export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  label?: "new" | number;
  url: string;
};
