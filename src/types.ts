export interface StateType {
  _title: string;
  _description: string;
}

type Price = {
  regular: string;
  current: string;
};

interface Product {
  id: string;
  name: string;
  description: string;
  price: Price;
  new: boolean;
  sale: boolean;
  url: string;
  image: string;
}

export interface FullGetResponse {
  title: string;
  description: "An athletic shoe is a name for a shoe designed for sporting and physical activities, and is different in style and build than a dress shoe. Originally used mainly during sports, today they are worn as casual footwear. They are often very comfortable and usually have lots of padding.";
  products: Product[];
}
