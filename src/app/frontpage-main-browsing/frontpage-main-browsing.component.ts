import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../businessObjects/Restaurant";

@Component({
  selector: 'app-frontpage-main-browsing',
  templateUrl: './frontpage-main-browsing.component.html',
  styleUrls: ['./frontpage-main-browsing.component.scss']
})
export class FrontpageMainBrowsingComponent implements OnInit {
  restaurants: Restaurant[] = [
    {
      image: 'assets/restaurants/bannerExample.avif',
      name: 'Veronikas place',
      description: 'Veronikas place is a lovely place to be',
      categories: [
        {
          name: 'Popular', items: [
            {
              name: 'Pasta bolognese', description: 'This pasta dish with authentic tomata sauce is delecious', image: 'assets/restaurants/spaghetti.jpg', price: 125
            },
            {
              name: 'Pasta Scoglio', description: 'This pasta dish with everything tasty from the ocean is worth it everytime', image: 'assets/restaurants/scoglio.avif', price: 150
            },
            {
              name: 'Potato/onion soup', description: 'This soup is very popular in denmark, and is served with bacon crumbs spread on top', image: 'assets/restaurants/potatosoup.jpg', price: 150
            },
          ]
        },
        {
          name: 'Drinks', items: [
            {
              name: 'Cola', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/coca_cola.jpg', price: 35
            },
            {
              name: 'Sprite', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/sprite.jpg', price: 35
            },
            {
              name: 'Fanta', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/fanta.jpg', price: 35
            },
          ]
        },
        {
          name: 'Entrees', items: [
            {
              name: 'Mozzarella sticks', description: 'This cheesy appetizer will leave your mouth drooling for more', image: 'assets/restaurants/mozarellasticks.jpg', price: 125
            },
            {
              name: 'Cheddar Biscuits', description: 'These bites of heavenly baked cheese and biscuit are recommended for the hungry guest', image: 'assets/restaurants/cheddarbiscuits.jpg', price: 150
            },
            {
              name: 'Onion rings', description: 'This classic is a must try for all new guest. We make them they used to.', image: 'assets/restaurants/onionrings.jpg', price: 150
            },
          ]
        },
        {
          name: 'Main courses', items: [
            {
              name: 'Cedar-Plank Salmon', description: 'A big salmon fillet always feels like a festive main course, especially when it\'s cooked on a cedar grilling plank, so it picks up a whisper of smoky flavor.', image: 'assets/restaurants/salmon.jpg', price: 125
            },
            {
              name: 'Braised Chicken Legs With Grapes and Fennel', description: 'There\'s nothing wrong with defaulting to chicken when you\'re trying to think of dinner party ideas. The key is to select a truly special chicken recipe, like this easy sweet-and-spicy braise, made with ribbons of fennel and juicy table grapes.', image: 'assets/restaurants/braisedchicken.jpg', price: 150
            },
            {
              name: 'Seared Scallops With Brown Butter and Lemon Pan Sauce', description: 'Scallops are always a stunner, but these are just different. Try them before your neighbor', image: 'assets/restaurants/scallops.jpg', price: 150
            },
          ]
        },
        {
          name: 'Desserts', items: [
            {
              name: 'Pecan chocolate bread and butter pudding', description: 'This chocolate bread and butter pudding makes use of any leftover bread.', image: 'assets/restaurants/pecanchocolate.jpg', price: 125
            },
            {
              name: 'Poached pear vacherin (meringue)', description: 'Chef Scott Pickett whips together a sweet and creamy dessert with flavours from Victoria\'s Mornington Peninsula.', image: 'assets/restaurants/poachedpears.jpg', price: 150
            },
            {
              name: 'Coconut yoghurt cake', description: 'Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.', image: 'assets/restaurants/coconutyoghurtcake.jpg', price: 150
            },
          ]
        },
      ]
    },
    {
      image: 'assets/restaurants/mogens.jpg',
      name: 'Mogens place',
      description: 'Mogens place is a nice place to be',
      categories: [
        {
          name: 'Popular', items: [
            {
              name: 'Pasta bolognese', description: 'This pasta dish with authentic tomata sauce is delecious', image: 'assets/restaurants/spaghetti.jpg', price: 125
            },
            {
              name: 'Pasta Scoglio', description: 'This pasta dish with everything tasty from the ocean is worth it everytime', image: 'assets/restaurants/scoglio.avif', price: 150
            },
            {
              name: 'Potato/onion soup', description: 'This soup is very popular in denmark, and is served with bacon crumbs spread on top', image: 'assets/restaurants/potatosoup.jpg', price: 150
            },
          ]
        },
        {
          name: 'Drinks', items: [
            {
              name: 'Cola', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/coca_cola.jpg', price: 35
            },
            {
              name: 'Sprite', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/sprite.jpg', price: 35
            },
            {
              name: 'Fanta', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/fanta.jpg', price: 35
            },
          ]
        },
        {
          name: 'Entrees', items: [
            {
              name: 'Mozzarella sticks', description: 'This cheesy appetizer will leave your mouth drooling for more', image: 'assets/restaurants/mozarellasticks.jpg', price: 125
            },
            {
              name: 'Cheddar Biscuits', description: 'These bites of heavenly baked cheese and biscuit are recommended for the hungry guest', image: 'assets/restaurants/cheddarbiscuits.jpg', price: 150
            },
            {
              name: 'Onion rings', description: 'This classic is a must try for all new guest. We make them they used to.', image: 'assets/restaurants/onionrings.jpg', price: 150
            },
          ]
        },
        {
          name: 'Main courses', items: [
            {
              name: 'Cedar-Plank Salmon', description: 'A big salmon fillet always feels like a festive main course, especially when it\'s cooked on a cedar grilling plank, so it picks up a whisper of smoky flavor.', image: 'assets/restaurants/salmon.jpg', price: 125
            },
            {
              name: 'Braised Chicken Legs With Grapes and Fennel', description: 'There\'s nothing wrong with defaulting to chicken when you\'re trying to think of dinner party ideas. The key is to select a truly special chicken recipe, like this easy sweet-and-spicy braise, made with ribbons of fennel and juicy table grapes.', image: 'assets/restaurants/braisedchicken.jpg', price: 150
            },
            {
              name: 'Seared Scallops With Brown Butter and Lemon Pan Sauce', description: 'Scallops are always a stunner, but these are just different. Try them before your neighbor', image: 'assets/restaurants/scallops.jpg', price: 150
            },
          ]
        },
        {
          name: 'Desserts', items: [
            {
              name: 'Pecan chocolate bread and butter pudding', description: 'This chocolate bread and butter pudding makes use of any leftover bread.', image: 'assets/restaurants/pecanchocolate.jpg', price: 125
            },
            {
              name: 'Poached pear vacherin (meringue)', description: 'Chef Scott Pickett whips together a sweet and creamy dessert with flavours from Victoria\'s Mornington Peninsula.', image: 'assets/restaurants/poachedpears.jpg', price: 150
            },
            {
              name: 'Coconut yoghurt cake', description: 'Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.', image: 'assets/restaurants/coconutyoghurtcake.jpg', price: 150
            },
          ]
        },
      ]
    },
    {
      image: 'assets/restaurants/signes.jpg',
      name: 'Signes place',
      description: 'Signes place is a colorsome place to be',
      categories: [
        {
          name: 'Popular', items: [
            {
              name: 'Pasta bolognese', description: 'This pasta dish with authentic tomata sauce is delecious', image: 'assets/restaurants/spaghetti.jpg', price: 125
            },
            {
              name: 'Pasta Scoglio', description: 'This pasta dish with everything tasty from the ocean is worth it everytime', image: 'assets/restaurants/scoglio.avif', price: 150
            },
            {
              name: 'Potato/onion soup', description: 'This soup is very popular in denmark, and is served with bacon crumbs spread on top', image: 'assets/restaurants/potatosoup.jpg', price: 150
            },
          ]
        },
        {
          name: 'Drinks', items: [
            {
              name: 'Cola', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/coca_cola.jpg', price: 35
            },
            {
              name: 'Sprite', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/sprite.jpg', price: 35
            },
            {
              name: 'Fanta', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/fanta.jpg', price: 35
            },
          ]
        },
        {
          name: 'Entrees', items: [
            {
              name: 'Mozzarella sticks', description: 'This cheesy appetizer will leave your mouth drooling for more', image: 'assets/restaurants/mozarellasticks.jpg', price: 125
            },
            {
              name: 'Cheddar Biscuits', description: 'These bites of heavenly baked cheese and biscuit are recommended for the hungry guest', image: 'assets/restaurants/cheddarbiscuits.jpg', price: 150
            },
            {
              name: 'Onion rings', description: 'This classic is a must try for all new guest. We make them they used to.', image: 'assets/restaurants/onionrings.jpg', price: 150
            },
          ]
        },
        {
          name: 'Main courses', items: [
            {
              name: 'Cedar-Plank Salmon', description: 'A big salmon fillet always feels like a festive main course, especially when it\'s cooked on a cedar grilling plank, so it picks up a whisper of smoky flavor.', image: 'assets/restaurants/salmon.jpg', price: 125
            },
            {
              name: 'Braised Chicken Legs With Grapes and Fennel', description: 'There\'s nothing wrong with defaulting to chicken when you\'re trying to think of dinner party ideas. The key is to select a truly special chicken recipe, like this easy sweet-and-spicy braise, made with ribbons of fennel and juicy table grapes.', image: 'assets/restaurants/braisedchicken.jpg', price: 150
            },
            {
              name: 'Seared Scallops With Brown Butter and Lemon Pan Sauce', description: 'Scallops are always a stunner, but these are just different. Try them before your neighbor', image: 'assets/restaurants/scallops.jpg', price: 150
            },
          ]
        },
        {
          name: 'Desserts', items: [
            {
              name: 'Pecan chocolate bread and butter pudding', description: 'This chocolate bread and butter pudding makes use of any leftover bread.', image: 'assets/restaurants/pecanchocolate.jpg', price: 125
            },
            {
              name: 'Poached pear vacherin (meringue)', description: 'Chef Scott Pickett whips together a sweet and creamy dessert with flavours from Victoria\'s Mornington Peninsula.', image: 'assets/restaurants/poachedpears.jpg', price: 150
            },
            {
              name: 'Coconut yoghurt cake', description: 'Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.', image: 'assets/restaurants/coconutyoghurtcake.jpg', price: 150
            },
          ]
        },
      ]
    },
    {
      image: 'assets/restaurants/henriks.jpg',
      name: 'Henriks place',
      description: 'Henriks place is an exciting place to be',
      categories: [
        {
          name: 'Popular', items: [
            {
              name: 'Pasta bolognese', description: 'This pasta dish with authentic tomata sauce is delecious', image: 'assets/restaurants/spaghetti.jpg', price: 125
            },
            {
              name: 'Pasta Scoglio', description: 'This pasta dish with everything tasty from the ocean is worth it everytime', image: 'assets/restaurants/scoglio.avif', price: 150
            },
            {
              name: 'Potato/onion soup', description: 'This soup is very popular in denmark, and is served with bacon crumbs spread on top', image: 'assets/restaurants/potatosoup.jpg', price: 150
            },
          ]
        },
        {
          name: 'Drinks', items: [
            {
              name: 'Cola', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/coca_cola.jpg', price: 35
            },
            {
              name: 'Sprite', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/sprite.jpg', price: 35
            },
            {
              name: 'Fanta', description: 'Soft drinks should be enjoyed with caution', image: 'assets/restaurants/fanta.jpg', price: 35
            },
          ]
        },
        {
          name: 'Entrees', items: [
            {
              name: 'Mozzarella sticks', description: 'This cheesy appetizer will leave your mouth drooling for more', image: 'assets/restaurants/mozarellasticks.jpg', price: 125
            },
            {
              name: 'Cheddar Biscuits', description: 'These bites of heavenly baked cheese and biscuit are recommended for the hungry guest', image: 'assets/restaurants/cheddarbiscuits.jpg', price: 150
            },
            {
              name: 'Onion rings', description: 'This classic is a must try for all new guest. We make them they used to.', image: 'assets/restaurants/onionrings.jpg', price: 150
            },
          ]
        },
        {
          name: 'Main courses', items: [
            {
              name: 'Cedar-Plank Salmon', description: 'A big salmon fillet always feels like a festive main course, especially when it\'s cooked on a cedar grilling plank, so it picks up a whisper of smoky flavor.', image: 'assets/restaurants/salmon.jpg', price: 125
            },
            {
              name: 'Braised Chicken Legs With Grapes and Fennel', description: 'There\'s nothing wrong with defaulting to chicken when you\'re trying to think of dinner party ideas. The key is to select a truly special chicken recipe, like this easy sweet-and-spicy braise, made with ribbons of fennel and juicy table grapes.', image: 'assets/restaurants/braisedchicken.jpg', price: 150
            },
            {
              name: 'Seared Scallops With Brown Butter and Lemon Pan Sauce', description: 'Scallops are always a stunner, but these are just different. Try them before your neighbor', image: 'assets/restaurants/scallops.jpg', price: 150
            },
          ]
        },
        {
          name: 'Desserts', items: [
            {
              name: 'Pecan chocolate bread and butter pudding', description: 'This chocolate bread and butter pudding makes use of any leftover bread.', image: 'assets/restaurants/pecanchocolate.jpg', price: 125
            },
            {
              name: 'Poached pear vacherin (meringue)', description: 'Chef Scott Pickett whips together a sweet and creamy dessert with flavours from Victoria\'s Mornington Peninsula.', image: 'assets/restaurants/poachedpears.jpg', price: 150
            },
            {
              name: 'Coconut yoghurt cake', description: 'Zero waste tip: "When it comes to storing perishables like dairy, the freezer is your best friends. Milk and yoghurt can be stored in ice cube trays and popped out to use in smoothies." - Ronni Kahn.', image: 'assets/restaurants/coconutyoghurtcake.jpg', price: 150
            },
          ]
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
