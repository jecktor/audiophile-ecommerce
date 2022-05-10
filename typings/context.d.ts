export interface t_CartProduct {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface t_Cart {
  cartItems: t_CartProduct[];
  totalPrice: number;
  totalQuantities: number;
  shippingCost: number;
  vatCost: number;
}
