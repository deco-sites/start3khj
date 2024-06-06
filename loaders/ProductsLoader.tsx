export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: URL;
  rating: {
    rate: number;
    count: number;
  }
}

export interface Returns {
  products: Product[]
}

export default async function loader(): Promise<Returns> {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(response => response.json());
  
  return { products }
}