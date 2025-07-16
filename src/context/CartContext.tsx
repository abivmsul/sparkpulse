// src/context/CartContext.tsx
import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { type Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

type State = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'DECREMENT_FROM_CART'; productId: string }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'CLEAR_CART' };

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(i => i.id === action.product.id);
      if (existing) {
        // Increment quantity
        return {
          items: state.items.map(i =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      } else {
        return { items: [...state.items, { ...action.product, quantity: 1 }] };
      }
    }

    case 'DECREMENT_FROM_CART': {
      return {
        items: state.items
          .map(i =>
            i.id === action.productId
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          // Remove items with zero quantity
          .filter(i => i.quantity > 0)
      };
    }

    case 'REMOVE_FROM_CART':
      return { items: state.items.filter(i => i.id !== action.productId) };

    case 'CLEAR_CART':
      return { items: [] };

    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  decrementFromCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product: Product) =>
    dispatch({ type: 'ADD_TO_CART', product });

  const decrementFromCart = (productId: string) =>
    dispatch({ type: 'DECREMENT_FROM_CART', productId });

  const removeFromCart = (productId: string) =>
    dispatch({ type: 'REMOVE_FROM_CART', productId });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        decrementFromCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
