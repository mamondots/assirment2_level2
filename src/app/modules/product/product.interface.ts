type Variant = {
  type: string;
  value: string;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
