import {Category} from "./Category";

export interface Restaurant {
  image: string;
  name: string;
  description: string;
  categories: Category[];
}
