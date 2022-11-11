import {Menu} from "./Menu";
import {Address} from "./Address";

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image?: string;
  menu?: Menu;
  address?: Address;
}
