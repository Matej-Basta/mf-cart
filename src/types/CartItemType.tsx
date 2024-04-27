import ProductType from "./ProductType";

export default interface CartItemType extends ProductType {
    quantity: number;
}