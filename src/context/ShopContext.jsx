import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext(null);

const FAVORITES_KEY = "glowFavorites";
const CART_KEY = "glowCart";

function loadFavorites() {
  try {
    const savedText = localStorage.getItem(FAVORITES_KEY);

    if (savedText === null) {
      return [];
    }

    const parsedData = JSON.parse(savedText);

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData;
  } catch (error) {
    console.error("Unable to load favorites:", error);
    return [];
  }
}

function saveFavorites(favorites) {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
}

function loadCart() {
  try {
    const savedText = localStorage.getItem(CART_KEY);

    if (savedText === null) {
      return [];
    }

    const parsedData = JSON.parse(savedText);

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData;
  } catch (error) {
    console.error("Unable to load cart:", error);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart)
  );
}

export function ShopProvider({ children }) {

  const [favorites, setFavorites] = useState(
    () => loadFavorites()
  );

  const [cart, setCart] = useState(
    () => loadCart()
  );

  function handleAddFavorite(product) {
    const updatedFavorites = [
      ...favorites,
      product
    ];

    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  }

  function handleDeleteFavorite(id) {
    const updatedFavorites = favorites.filter(
      (item) => item.id !== id
    );

    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  }

  function toggleFavorite(product) {
    const alreadyFavorite = favorites.some(
      (item) => item.id === product.id
    );

    if (alreadyFavorite) {
      handleDeleteFavorite(product.id);
    } else {
      handleAddFavorite(product);
    }
  }

  function handleAddToCart(product) {
    const foundProduct = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (foundProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        { ...product, quantity: 1 }
      ];
    }

    setCart(updatedCart);
    saveCart(updatedCart);
  }

  function handleUpdateQuantity(id, quantity) {
    let updatedCart;

    if (quantity < 1) {
      updatedCart = cart.filter(
        (item) => item.id !== id
      );
    } else {
      updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: quantity }
          : item
      );
    }

    setCart(updatedCart);
    saveCart(updatedCart);
  }

  function handleRemoveFromCart(id) {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
    saveCart(updatedCart);
  }

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = {
    favorites,
    cart,
    toggleFavorite,
    addToCart: handleAddToCart,
    updateQuantity: handleUpdateQuantity,
    removeFromCart: handleRemoveFromCart,
    cartCount,
    cartTotal
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
}
