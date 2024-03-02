import { useShoppingCart } from "../context/ShoppingCartContext";

import storeItems from "../data/item.json";
type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCard } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
}
