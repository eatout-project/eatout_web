import {Menu} from "./Menu";
import {Address} from "./Address";

export interface Restaurant {
  name: string;
  description: string;
  image: string;
  menu: Menu;
  address?: Address;
}
