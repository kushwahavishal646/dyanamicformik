import React, { createContext, useState, useCallback, useMemo } from "react";

import { PRODUCTS } from "../features/shop/helper";

interface IShopContextProvider {
  children: React.ReactNode;
}

interface ICart {
  [key: number]: number;
}

interface IShopContextType {
  cartItems: ICart;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}

export const ShopContext = createContext<IShopContextType>({} as IShopContextType);

const getDefaultCart = () => {
  const cart: ICart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[PRODUCTS[i].id] = 0;
  }
  return cart;
};

export const ShopContextProvider: React.FC<IShopContextProvider> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICart>(getDefaultCart);

  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        return total + quantity * (itemInfo?.price ?? 0);
      }
      return total;
    }, 0);
  }, [cartItems]);

  const addToCart = useCallback((itemId: number) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }, []);

  const updateCartItemCount = useCallback((newAmount: number, itemId: number) => {
    setCartItems(prev => ({ ...prev, [itemId]: newAmount }));
  }, []);

  const checkout = useCallback(() => {
    setCartItems(getDefaultCart());
  }, []);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  }), [
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout
  ]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

