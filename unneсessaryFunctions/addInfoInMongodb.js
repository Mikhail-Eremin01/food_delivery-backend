// //  Form all data for mongoDB


// const allRestaurants = [
//     {
//         name: "KFC",
//         address: {
//             district: "central",
//             street: "Glinka",
//             house: 19
//         },
//         image: "/kfc.svg",
//         telephone: "+380639481148"
//     },
//     {
//         name: "Sharky's",
//         address: {
//             district: "central",
//             street: "Shevchenko",
//             house: 6
//         },
//         image: "/dollar.svg",
//         telephone: "+380689488201"
//     },
//     {
//         name: "McDonalds",
//         address: {
//             district: "central",
//             street: "Glinka",
//             house: 3
//         },
//         image: "/mcdonalds.svg",
//         telephone: "+380977155028"
//     }
// ]




// Restaurant.insertMany(allRestaurants)
// .then((res) => console.log('Saved info about all restaurants'))
// .catch((err) => console.log(err));





// //  All mcDonalds dishes

// const allDishesMcdonalds = [
//     {
//       dishesName: 'spicy crispy chicken sandwich',
//       price: 36,
//       weight: 276,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'big mac®',
//       price: 109,
//       weight: 264,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'chicken mcnuggets®',
//       price: 83,
//       weight: 265,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chicken-McNuggets-4pc-1:1-4-product-tile-desktop',     
//       available: false
//     },
//     {
//       dishesName: 'world famous fries®',
//       price: 87,
//       weight: 355,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'quarter pounder®* with cheese',
//       price: 46,
//       weight: 263,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'iced coffee',
//       price: 118,
//       weight: 363,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Premium-Roast-Iced-Coffee-Medium:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'egg mcmuffin®',
//       price: 41,
//       weight: 320,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'sausage burrito',
//       price: 59,
//       weight: 392,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Burrito-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'bacon, egg  & cheese biscuit',
//       price: 67,
//       weight: 353,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'sausage mcmuffin®',
//       price: 101,
//       weight: 268,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'sausage mcmuffin® with egg',
//       price: 42,
//       weight: 388,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin-with-Egg:1-4-product-tile-desktop',   
//       available: true
//     },
//     {
//       dishesName: 'sausage biscuit',
//       price: 85,
//       weight: 365,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'sausage biscuit  with egg',
//       price: 36,
//       weight: 269,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-with-Egg-Regular-Size-Biscuit-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'bacon, egg & cheese mcgriddles®',
//       price: 76,
//       weight: 284,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-McGriddles:1-4-product-tile-desktop', 
//       available: false
//     },
//     {
//       dishesName: 'sausage mcgriddles®',
//       price: 103,
//       weight: 326,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McGriddles:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'sausage, egg & cheese mcgriddles®',
//       price: 53,
//       weight: 304,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'big breakfast®',
//       price: 33,
//       weight: 381,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/s-mcdonalds-Big-Breakfast-Regular-Size-Biscuit-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'big breakfast® with hotcakes',
//       price: 107,
//       weight: 226,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Breakfast-with-Hotcakes-Regular-Size-Biscuit-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'hotcakes',
//       price: 109,
//       weight: 235,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hotcakes:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'hotcakes and sausage',
//       price: 104,
//       weight: 384,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hotcakes-and-Sausage:1-4-product-tile-desktop',        
//       available: true
//     },
//     {
//       dishesName: 'hash browns',
//       price: 101,
//       weight: 392,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-HASH-BROWNS-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'fruit & maple oatmeal',
//       price: 94,
//       weight: 339,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Fruit-Maple-Oatmeal-1:1-4-product-tile-desktop',       
//       available: false
//     },
//     {
//       dishesName: 'spicy deluxe crispy chicken sandwich',
//       price: 42,
//       weight: 386,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-deluxe-crispy-chicken-sandwich:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'crispy chicken sandwich',
//       price: 77,
//       weight: 274,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-crispy-chicken-sandwich:1-4-product-tile-desktop',     
//       available: true
//     },
//     {
//       dishesName: 'deluxe crispy chicken sandwich',
//       price: 45,
//       weight: 376,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'mcchicken®',
//       price: 46,
//       weight: 232,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'filet-o-fish®',
//       price: 52,
//       weight: 299,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Filet-O-Fish-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'big mac® combo meal',
//       price: 100,
//       weight: 345,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-4-product-tile-desktop',   
//       available: true
//     },
//     {
//       dishesName: 'cheeseburger combo meal',
//       price: 82,
//       weight: 269,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'quarter pounder®* with cheese meal',
//       price: 32,
//       weight: 211,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'double quarter pounder®* with cheese meal',
//       price: 107,
//       weight: 272,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals-combo:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'crispy chicken sandwich combo meal',
//       price: 113,
//       weight: 345,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-crispy-chicken-sandwich-meal:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'spicy crispy chicken sandwich combo meal',
//       price: 82,
//       weight: 338,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-spicy-crispy-chicken-sandwich-meal-combo:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'deluxe crispy chicken sandwich combo meal',
//       price: 44,
//       weight: 323,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-deluxe-crispy-chicken-sandwich-meal:1-4-product-tile-desktop',   
//       available: true
//     },
//     {
//       dishesName: '10 piece chicken mcnuggets® meal',
//       price: 38,
//       weight: 375,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Chicken-McNuggets-10-piece-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'filet-o-fish® meal',
//       price: 114,
//       weight: 312,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Filet-O-Fish-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'egg mcmuffin® meal',
//       price: 108,
//       weight: 301,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Egg-McMuffin-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'sausage mcmuffin® with egg meal',
//       price: 116,
//       weight: 256,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Sausage-McMuffin-with-Egg-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'sausage biscuit with egg meal',
//       price: 117,
//       weight: 311,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Sausage-Biscuit-with-Egg-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'bacon, egg & cheese biscuit meal',
//       price: 88,
//       weight: 393,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Bacon-Egg-Cheese-Biscuit-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'bacon, egg & cheese mcgriddles® meal',
//       price: 76,
//       weight: 317,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Bacon-Egg-Cheese-McGriddles-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'sausage, egg & cheese mcgriddles® meal',
//       price: 118,
//       weight: 227,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Sausage-Egg-Cheese-McGriddles-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'sausage mcgriddles® meal',
//       price: 57,
//       weight: 333,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Sausage-McGriddles-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'sausage burrito meal',
//       price: 54,
//       weight: 210,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Sausage-Burrito-2-Extra-Value-Meals:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'mcflurry® with oreo® cookies',
//       price: 40,
//       weight: 332,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-oreo-mcflurry-snack:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: "mcflurry® with m&m's® candies",
//       price: 101,
//       weight: 281,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mm-mcflurry-snack:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'vanilla cone',
//       price: 90,
//       weight: 343,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'chocolate shake',
//       price: 115,
//       weight: 280,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-McCafe-Shake-Medium-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'vanilla shake',
//       price: 102,
//       weight: 202,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-McCafe-Shake-Medium-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'strawberry shake',
//       price: 64,
//       weight: 281,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Strawberry-McCafe-Shake-Medium-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'hot fudge sundae',
//       price: 117,
//       weight: 244,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hot-Fudge-Sundae:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'hot caramel sundae',
//       price: 87,
//       weight: 219,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hot-Caramel-Sundae-1:1-4-product-tile-desktop',        
//       available: true
//     },
//     {
//       dishesName: 'baked apple pie',
//       price: 92,
//       weight: 346,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Baked-Hot-Apple-Pie-1:1-4-product-tile-desktop',       
//       available: true
//     },
//     {
//       dishesName: 'chocolate chip cookie',
//       price: 86,
//       weight: 320,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-Chip-Cookie-mcd:1-4-product-tile-desktop',   
//       available: false
//     },
//     {
//       dishesName: 'caramel macchiato',
//       price: 110,
//       weight: 399,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-caramel-macchiato:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'iced caramel macchiato',
//       price: 105,
//       weight: 306,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-iced-caramel-macchiato-1:1-4-product-tile-desktop',    
//       available: false
//     },
//     {
//       dishesName: 'cappuccino',
//       price: 66,
//       weight: 214,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-cappuccino-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'caramel cappuccino',
//       price: 71,
//       weight: 309,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-caramel-cappuccino:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'french vanilla cappuccino',
//       price: 66,
//       weight: 361,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-vanilla-cappuccino:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'mocha',
//       price: 66,
//       weight: 379,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Mocha-Medium:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'iced mocha',
//       price: 85,
//       weight: 358,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Iced-Mocha-Medium-1:1-4-product-tile-desktop',  
//       available: false
//     },
//     {
//       dishesName: 'latte',
//       price: 66,
//       weight: 246,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Latte-Medium:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'iced latte',
//       price: 42,
//       weight: 342,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-iced-latte-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'caramel latte',
//       price: 44,
//       weight: 357,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Caramel-Latte-Medium:1-4-product-tile-desktop', 
//       available: false
//     },
//     {
//       dishesName: 'iced caramel latte',
//       price: 107,
//       weight: 242,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-iced-caramel-latte:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'french vanilla latte',
//       price: 51,
//       weight: 357,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Vanilla-Latte-Medium:1-4-product-tile-desktop', 
//       available: true
//     },
//     {
//       dishesName: 'iced french vanilla latte',
//       price: 89,
//       weight: 374,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-iced-french-vanilla-latte-1:1-4-product-tile-desktop', 
//       available: true
//     },
//     {
//       dishesName: 'americano',
//       price: 52,
//       weight: 238,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-americano-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'premium roast coffee',
//       price: 109,
//       weight: 215,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coffee-Medium:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'iced caramel coffee',
//       price: 59,
//       weight: 279,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Caramel-Iced-Coffee:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'iced french vanilla coffee',
//       price: 75,
//       weight: 305,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Iced-Coffee:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'caramel frappé',
//       price: 43,
//       weight: 297,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Frappe-Caramel-Medium-1:1-4-product-tile-desktop',     
//       available: false
//     },
//     {
//       dishesName: 'mocha frappé',
//       price: 70,
//       weight: 346,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Frappe-Mocha-Medium:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'hot chocolate',
//       price: 106,
//       weight: 333,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Hot-Chocolate-Medium:1-4-product-tile-desktop', 
//       available: false
//     },
//     {
//       dishesName: 'strawberry banana smoothie',
//       price: 98,
//       weight: 393,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Strawberry-Banana-Smoothie-Medium:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'mango pineapple smoothie',
//       price: 65,
//       weight: 289,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Mango-Pineapple-Smoothie-Small:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'apple fritter',
//       price: 38,
//       weight: 372,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-apple-fritter-bakery:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'blueberry muffin',
//       price: 79,
//       weight: 254,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-blueberry-muffin-bakery-mcd:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'cinnamon roll with cream cheese icing',
//       price: 86,
//       weight: 214,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-cinnamon-roll-mcbakery:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'mcdouble®',
//       price: 55,
//       weight: 348,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McDouble-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'coca-cola®',
//       price: 75,
//       weight: 206,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-4-product-tile-desktop',   
//       available: false
//     },
//     {
//       dishesName: 'sprite®',
//       price: 115,
//       weight: 352,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'fanta® orange',
//       price: 112,
//       weight: 258,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fanta-orange-1:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'dr pepper®',
//       price: 92,
//       weight: 393,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Dr-Pepper-Small-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'diet coke®',
//       price: 37,
//       weight: 256,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Diet-Coke-Small-1:1-4-product-tile-desktop',
//       available: false
//     },
//     {
//       dishesName: 'hi-c® orange lavaburst®',
//       price: 33,
//       weight: 391,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-hi-c-lavaburst:1-4-product-tile-desktop',
//       available: true
//     },
//     {
//       dishesName: 'unsweetened iced tea',
//       price: 100,
//       weight: 272,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Iced-Tea-Large-unsweetened:1-4-product-tile-desktop',  
//       available: false
//     },
//     {
//       dishesName: 'sweet tea',
//       price: 78,
//       weight: 372,
//       image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Iced-Tea-Large-drink:1-4-product-tile-desktop',        
//       available: true
//     }
// ]
// const dishesMc = allDishesMcdonalds.map(el => {
//     return {...el, restaurantsId: new ObjectId('62fd0c4a1f3a671a69e62a15')}
// })
// Dish.insertMany(dishesMc)
// .then((res) => console.log('Saved all mcDonalds dishes'))
// .catch((err) => console.log(err));


// //  All KFC dishes
// const allDishesKfc = [
//     {
//         "dishesName": "cheeseburger",
//         "price": 104,
//         "weight": 385,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4061.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "toast 2 cheese",
//         "price": 115,
//         "weight": 307,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3729.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "double chicken spicy",
//         "price": 68,
//         "weight": 278,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4117.png",
//         "available": false
//     },
//     {
//         "dishesName": "double chicken",
//         "price": 55,
//         "weight": 295,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4065.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "chickenburger spicy",
//         "price": 53,
//         "weight": 293,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4063.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "chickenburger",
//         "price": 60,
//         "weight": 359,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4064.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "ukranian toast",
//         "price": 39,
//         "weight": 233,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4068.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "boxmaster spicy",
//         "price": 42,
//         "weight": 349,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4105.png",
//         "available": false
//     },
//     {
//         "dishesName": "boxmaster original",
//         "price": 85,
//         "weight": 327,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4104.png",
//         "available": true
//     },
//     {
//         "dishesName": "chef roll spicy",
//         "price": 82,
//         "weight": 254,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4111.jpg",
//         "available": false
//     },
//     {  "dishesName": "chef roll",
//         "price": 34,
//         "weight": 398,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4062.jpg",
//         "available": true
//     },
//     {   "dishesName": "twister junior original",
//         "price": 52,
//         "weight": 330,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4067.jpg",
//         "available": false
//     },
//     {        "dishesName": "bucket 8 drumstiks spicy",
//         "price": 33,
//         "weight": 311,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3741.jpg",
//         "available": false
//     },
//     {   "dishesName": "bucket 8 drumstiks or",
//         "price": 74,
//         "weight": 276,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3750.jpg",
//         "available": true
//     },
//     {   "dishesName": "bucket duet spicy",
//         "price": 41,
//         "weight": 249,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4092.png",
//         "available": true
//     },
//     {   "dishesName": "bucket duet original",
//         "price": 95,
//         "weight": 213,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4093.png",
//         "available": true
//     },
//     {   "dishesName": "bucket l (26 hot&amp;spicy wings)",
//         "price": 83,
//         "weight": 272,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3746.jpg",
//         "available": true
//     },
//     {   "dishesName": "bucket m (18 hot&amp;spicy wings)",
//         "price": 104,
//         "weight": 292,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3742.jpg",
//         "available": true
//     },
//     {   "dishesName": "bucket s (12 hot&amp;spicy wings)",
//         "price": 32,
//         "weight": 363,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3749.jpg",
//         "available": true
//     },
//     {   "dishesName": "bucket bites",
//         "price": 40,
//         "weight": 373,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4114.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "8 spicy wings",
//         "price": 76,
//         "weight": 351,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4096.png",
//         "available": false
//     },
//     {
//         "dishesName": "5 spicy wings",
//         "price": 66,
//         "weight": 288,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4097.png",
//         "available": false
//     },
//     {
//         "dishesName": "3 spicy wings",
//         "price": 76,
//         "weight": 358,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3786.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "8 strips spicy",
//         "price": 90,
//         "weight": 365,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4098.png",
//         "available": true
//     },
//     {
//         "dishesName": "8 strips",
//         "price": 116,
//         "weight": 237,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4056.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "5 strips spicy",
//         "price": 110,
//         "weight": 370,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4099.png",
//         "available": true
//     },
//     {
//         "dishesName": "5 strips",
//         "price": 40,
//         "weight": 306,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4053.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "3 strips spicy",
//         "price": 44,
//         "weight": 289,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3785.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "3 strips",
//         "price": 112,
//         "weight": 393,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3798.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "4 spicy drumsticks",
//         "price": 93,
//         "weight": 375,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4100.png",
//         "available": false
//     },
//     {
//         "dishesName": "4 drumsticks",
//         "price": 89,
//         "weight": 284,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3790.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "3 spicy drumsticks",
//         "price": 59,
//         "weight": 319,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4101.png",
//         "available": true
//     },
//     {
//         "dishesName": "3 drumsticks",
//         "price": 35,
//         "weight": 385,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3799.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "1 spicy drumstick",
//         "price": 50,
//         "weight": 323,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4102.png",
//         "available": false
//     },
//     {
//         "dishesName": "1 drumstick",
//         "price": 114,
//         "weight": 318,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3783.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "bites teriyaki",
//         "price": 110,
//         "weight": 272,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3802.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "bites",
//         "price": 110,
//         "weight": 349,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3797.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "20 nuggets",
//         "price": 76,
//         "weight": 343,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3801.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "9 nuggets",
//         "price": 119,
//         "weight": 350,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4115.png",
//         "available": false
//     },
//     {
//         "dishesName": "6 nuggets",
//         "price": 85,
//         "weight": 231,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4116.png",
//         "available": true
//     },
//     {
//         "dishesName": "bucket fries",
//         "price": 93,
//         "weight": 237,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3833.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "french fries standart",
//         "price": 114,
//         "weight": 352,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3831.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "french fries small",
//         "price": 78,
//         "weight": 372,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3830.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "homemade potatoes",
//         "price": 51,
//         "weight": 285,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3834.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "hash brown",
//         "price": 94,
//         "weight": 203,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3832.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "mustard sauce depot",
//         "price": 77,
//         "weight": 293,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3825.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "mayonnaise",
//         "price": 66,
//         "weight": 234,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3829.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "barbeque sause depot",
//         "price": 59,
//         "weight": 319,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3827.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "ketchup depot",
//         "price": 100,
//         "weight": 271,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3826.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "curry sauce depot",
//         "price": 85,
//         "weight": 337,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3824.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "sweet n' sour sause depot",
//         "price": 108,
//         "weight": 374,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3828.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "cheese sauce depot",
//         "price": 88,
//         "weight": 259,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3823.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "mango chili sauce",
//         "price": 77,
//         "weight": 358,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4066.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "mirinda 0.5 l (bottle)",
//         "price": 88,
//         "weight": 322,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3776.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "pepsi 0.5 l (bottle)",
//         "price": 113,
//         "weight": 279,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3760.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "pepsi max 0,5l (bottle)",
//         "price": 91,
//         "weight": 250,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3768.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "seven up 0.5 l(bottle)",
//         "price": 52,
//         "weight": 288,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3769.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "mirinda 0.5 l",
//         "price": 87,
//         "weight": 341,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3764.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "pepsi 0.5 l",
//         "price": 40,
//         "weight": 336,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3773.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "pepsi max 0.5 l",
//         "price": 84,
//         "weight": 256,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4108.png",
//         "available": true
//     },
//     {
//         "dishesName": "seven up 0.5 l",
//         "price": 83,
//         "weight": 236,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3771.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "mirinda 0.3 l",
//         "price": 46,
//         "weight": 272,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3774.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "mirinda 0.3 l",
//         "price": 42,
//         "weight": 247,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3774.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "pepsi 0.3 l",
//         "price": 56,
//         "weight": 283,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3777.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "pepsi max 0.3 l",
//         "price": 62,
//         "weight": 341,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4109.png",
//         "available": true
//     },
//     {
//         "dishesName": "seven up 0.3 l",
//         "price": 90,
//         "weight": 328,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3778.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "lipton ice tea black with lemon bottle 0,5 l",
//         "price": 35,
//         "weight": 370,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3779.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "lipton ice tea black with peach, bottle 0,5 l",
//         "price": 117,
//         "weight": 355,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3765.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "mineral water \"aqua minerale\" sparkling bottle 0,5 l",
//         "price": 78,
//         "weight": 328,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3780.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "mineral water \"aqua minerale\" still bottle 0,5 l",
//         "price": 108,
//         "weight": 369,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3781.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "mineral water \"karpatska dzherelna\" sparkling bottle 0,5 l",
//         "price": 51,
//         "weight": 350,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4112.png",
//         "available": false
//     },
//     {
//         "dishesName": "mineral water \"karpatska dzherelna\" still bottle 0,5 l",
//         "price": 109,
//         "weight": 325,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4113.png",
//         "available": true
//     },
//     {
//         "dishesName": "pepsi max in can 0.33 l",
//         "price": 39,
//         "weight": 291,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3767.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "pepsi in a can 0.33 l",
//         "price": 51,
//         "weight": 355,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4110.png",
//         "available": false
//     },
//     {
//         "dishesName": "juice \"sandora\" orange 0,25 l",
//         "price": 59,
//         "weight": 386,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3762.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "juice \"sandora\" apple 0,25 l",
//         "price": 63,
//         "weight": 352,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3761.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "cappuccino 0,4 l",
//         "price": 94,
//         "weight": 391,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3871.png",
//         "available": true
//     },
//     {
//         "dishesName": "latte 0,4 l",
//         "price": 96,
//         "weight": 243,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3870.png",
//         "available": true
//     },
//     {
//         "dishesName": "cappuccino 0,3 l",
//         "price": 86,
//         "weight": 245,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3867.png",
//         "available": false
//     },
//     {
//         "dishesName": "americano 0,3 l",
//         "price": 90,
//         "weight": 280,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3865.png",
//         "available": true
//     },
//     {
//         "dishesName": "latte 0,3 l",
//         "price": 66,
//         "weight": 374,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3869.png",
//         "available": false
//     },
//     {
//         "dishesName": "cappuccino 0.2 l",
//         "price": 112,
//         "weight": 390,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3851.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "latte 0.2 l",
//         "price": 39,
//         "weight": 222,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3850.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "americano 0.2 l",
//         "price": 37,
//         "weight": 308,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3866.png",
//         "available": true
//     },
//     {
//         "dishesName": "black tea with bergamot",
//         "price": 75,
//         "weight": 252,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3863.png",
//         "available": true
//     },
//     {
//         "dishesName": "green tea with mango",
//         "price": 111,
//         "weight": 341,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3864.png",
//         "available": true
//     },
//     {
//         "dishesName": "ice cream lion",
//         "price": 72,
//         "weight": 320,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3861.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "ice-cream summer fantasy",
//         "price": 76,
//         "weight": 328,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3812.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "summer ice-cream",
//         "price": 44,
//         "weight": 368,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3813.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "donut strawberry",
//         "price": 100,
//         "weight": 381,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3817.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "donut salted caramel",
//         "price": 33,
//         "weight": 377,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3852.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "muffin with currants",
//         "price": 113,
//         "weight": 310,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3816.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "muffin chocolate",
//         "price": 31,
//         "weight": 272,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3815.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "cherry pie",
//         "price": 88,
//         "weight": 294,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_4094.png",
//         "available": false
//     },
//     {
//         "dishesName": "milkshake strawberry 0.4 l",
//         "price": 85,
//         "weight": 268,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3821.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "milkshake chokolate-nut 0.4 l",
//         "price": 96,
//         "weight": 270,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3819.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "milkshake banana 0.4 l",
//         "price": 120,
//         "weight": 211,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3854.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "milkshake strawberry 0.3 l",
//         "price": 97,
//         "weight": 202,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3822.jpg",
//         "available": true
//     },
//     {
//         "dishesName": "milkshake chokolate-nut 0.3 l",
//         "price": 69,
//         "weight": 348,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3820.jpg",
//         "available": false
//     },
//     {
//         "dishesName": "milkshake banana 0.3 l",
//         "price": 42,
//         "weight": 344,
//         "image": "https://www.kfc-ukraine.com/admin/files/medium/medium_3853.jpg",
//         "available": false
//     }
// ]
// const dishesKfc = allDishesKfc.map(el => {
//     return {...el, restaurantsId: new ObjectId('62fd0c4a1f3a671a69e62a13')}
// })
// Dish.insertMany(dishesKfc)
// .then((res) => console.log('Saved all KFC dishes'))
// .catch((err) => console.log(err));


// //  All Sharkys dishes
// const allDishesSharkys = [
//     {
//         "dishesName": "hot honey fried chicken",
//         "price": 84,
//         "weight": 294,
//         "image": "https://olo-images-live.imgix.net/4c/4c567b60112c4cd6a380f63ea9bd3c91.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=1d8a2bd464c6c55283fa6ba30361f5b3",
//         "available": true
//     },
//     {
//         "dishesName": "nashville hot fried chicken",
//         "price": 34,
//         "weight": 262,
//         "image": "https://olo-images-live.imgix.net/8e/8eba20f9cdff498ea5b5aa30bc7d0dab.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c338d1b1aa930eedf86739dbef2676e9",
//         "available": false
//     },
//     {
//         "dishesName": "korean bbq fried chicken",
//         "price": 80,
//         "weight": 332,
//         "image": "https://olo-images-live.imgix.net/31/3182b7887491480191c333889996020b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c9901fdf778bf405dc5a885fa3ea2c66",
//         "available": true
//     },
//     {
//         "dishesName": "sharky's burrito",
//         "price": 65,
//         "weight": 283,
//         "image": "https://olo-images-live.imgix.net/c2/c2f8b829f107424986e01620b0c1c187.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=a2f0653aeb9b77a46a0bae5416742187",
//         "available": false
//     },
//     {
//         "dishesName": "grilled wild fish, or shrimp burrito",
//         "price": 93,
//         "weight": 223,
//         "image": "https://olo-images-live.imgix.net/0f/0f7656fe582b4963afa5747cee364b4d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=de027b1a517323344f3572bcc15b9e1f",
//         "available": true
//     },
//     {
//         "dishesName": "superfood salad - avocado quinoa",
//         "price": 64,
//         "weight": 359,
//         "image": "https://olo-images-live.imgix.net/0c/0ce586a6860649318114996dda943c87.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=cc02872f436b50c9e9ef86bd4d0ab398",
//         "available": false
//     },
//     {
//         "dishesName": "numex caesar",
//         "price": 34,
//         "weight": 290,
//         "image": "https://olo-images-live.imgix.net/0c/0c7adf9ddf044697b5461c2a34d200ea.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=d2f121961b5415740a6c0b44439a17bd",
//         "available": false
//     },
//     {
//         "dishesName": "seasonal roasted vegetable bowl",
//         "price": 57,
//         "weight": 210,
//         "image": "https://olo-images-live.imgix.net/9d/9d0669ea87664275b8d17690352dc82a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=47af260ade8dfae1d5a457cd2bbe33aa",
//         "available": true
//     },
//     {
//         "dishesName": "nachos",
//         "price": 50,
//         "weight": 302,
//         "image": "https://olo-images-live.imgix.net/c6/c6f0757ba4d641e68b94aaa3ef53746a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=a2a4d49563ed0a9b4a514e1051103772",
//         "available": false
//     },
//     {
//         "dishesName": "nachos grande",
//         "price": 91,
//         "weight": 351,
//         "image": "https://olo-images-live.imgix.net/56/5625a75c999e4974bbedff3b347fc310.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=4fc281ba8a6b9da51108d543a8b2c380",
//         "available": true
//     },
//     {
//         "dishesName": "quesadilla",
//         "price": 35,
//         "weight": 320,
//         "image": "https://olo-images-live.imgix.net/e4/e45705c827a2425096dca3015f371dd7.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=2ebf4178b7c5e7d63501ada8b7f8d280",
//         "available": true
//     },
//     {
//         "dishesName": "bbq chicken pizza",
//         "price": 50,
//         "weight": 233,
//         "image": "https://olo-images-live.imgix.net/d2/d2f3006670104b2cb9c1ecc6eba7a7a4.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=d51fb7aab603208901ce7eebe29b9694",
//         "available": true
//     },
//     {
//         "dishesName": "chicken taquitos",
//         "price": 80,
//         "weight": 333,
//         "image": "https://olo-images-live.imgix.net/35/3573f7803bce4dab94aaa50c6138a801.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=2e74a7f1f77034170bc860e1247ae6ee",
//         "available": true
//     },
//     {
//         "dishesName": "wild caught tempura fish or shrimp burrito",
//         "price": 105,
//         "weight": 229,
//         "image": "https://olo-images-live.imgix.net/6e/6e63359da26249858540b24c6a17c25c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=16faddc76ec438910d8280a9daaad958",
//         "available": true
//     },
//     {
//         "dishesName": "santa fe burrito",
//         "price": 42,
//         "weight": 322,
//         "image": "https://olo-images-live.imgix.net/38/38199fbe7a1d4c108600ed4443706197.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=e9db2deb7f6ebaa46357acab0d839cfb",
//         "available": true
//     },
//     {
//         "dishesName": "wild caught salmon",
//         "price": 51,
//         "weight": 326,
//         "image": "https://olo-images-live.imgix.net/8b/8bc19eab1ba04ec794691bb3c04aa7f5.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=468063fff1c629f5c51a9c788fdb71fd",
//         "available": false
//     },
//     {
//         "dishesName": "fiesta burrito",
//         "price": 38,
//         "weight": 206,
//         "image": "https://olo-images-live.imgix.net/6a/6ae7af91082d47cbba78841dc02cc5d6.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=0418fe40c7850ec8e635728b9869b85a",
//         "available": false
//     },
//     {
//         "dishesName": "tofu & veggie burrito",
//         "price": 54,
//         "weight": 366,
//         "image": "https://olo-images-live.imgix.net/6e/6e55645b9851481aac3ca82533085a68.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=4d6861ff71c116998037be80a6409dc7",
//         "available": false
//     },
//     {
//         "dishesName": "organic bean & cheese burrito",
//         "price": 70,
//         "weight": 283,
//         "image": "https://olo-images-live.imgix.net/ce/ced288acecad4094986eb18f762bc008.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=cf8016575f1a0724d310670f287ae719",
//         "available": true
//     },
//     {
//         "dishesName": "aj burrito",
//         "price": 120,
//         "weight": 255,
//         "image": "https://olo-images-live.imgix.net/c1/c1e7274758764f78a3495db1f94857f9.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=d5b8c5bac1711b69cb1b41e303c49e74",
//         "available": false
//     },
//     {
//         "dishesName": "two taco plate",
//         "price": 38,
//         "weight": 385,
//         "image": "https://olo-images-live.imgix.net/a4/a4c167d9008b4be8b6164c947867ad3c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=7559d9b5be3c6642d0f000653e9b5813",
//         "available": true
//     },
//     {
//         "dishesName": "original taco",
//         "price": 74,
//         "weight": 207,
//         "image": "https://olo-images-live.imgix.net/f0/f0fddbf15c834d68a841fb019e1b57ce.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=f1bb51d731a0a2a7e8414b5264f56c51",
//         "available": true
//     },
//     {
//         "dishesName": "california taco",
//         "price": 110,
//         "weight": 249,
//         "image": "https://olo-images-live.imgix.net/56/5611e7c190d74e109bb26e2cc62c1e3d.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=417c504810be03bfccf71dedcc315f2f",
//         "available": false
//     },
//     {
//         "dishesName": "fajita taco",
//         "price": 44,
//         "weight": 277,
//         "image": "https://olo-images-live.imgix.net/3f/3f351e05b7144d18884d7042d8131cd2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=a73afb506e05ac8fc4a442dbd0ef608a",
//         "available": true
//     },
//     {
//         "dishesName": "roasted cauliflower & mushroom taco",
//         "price": 83,
//         "weight": 272,
//         "image": "https://olo-images-live.imgix.net/2c/2c16ee47f9994a678ef1242d2071bcf2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c27c541a7cdc0b5716e9403d043fa34e",
//         "available": true
//     },
//     {
//         "dishesName": "organic tofu & veggie taco",
//         "price": 59,
//         "weight": 264,
//         "image": "https://olo-images-live.imgix.net/4d/4d17b41fe4e449af9f9efeb8579f7770.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=709d302f6f029cd37dbd82a7698443b3",
//         "available": false
//     },
//     {
//         "dishesName": "grilled wild fish, or shrimp a la carte taco",
//         "price": 89,
//         "weight": 349,
//         "image": "https://olo-images-live.imgix.net/14/14a0498ae449457e929d74f6240e6cf9.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=2acccf7707a991b604bc25fdca6c77f3",
//         "available": false
//     },
//     {
//         "dishesName": "tempura battered fish, or shrimp a la carte taco",
//         "price": 46,
//         "weight": 309,
//         "image": "https://olo-images-live.imgix.net/65/65444fe29321442085788e5dc08d1385.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=cdaba1bf36869182cfbe471cd40f118e",
//         "available": true
//     },
//     {
//         "dishesName": "power plate with all natural chicken breast",
//         "price": 104,
//         "weight": 237,
//         "image": "https://olo-images-live.imgix.net/28/28f1231bb8be4a8187e37d4dad3de505.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=62415b37977cd3c10a89f1dcf5ab6233",
//         "available": true
//     },
//     {
//         "dishesName": "power plate with grass-fed steak",
//         "price": 68,
//         "weight": 321,
//         "image": "https://olo-images-live.imgix.net/51/512db2f9853f49f5bd2c612f56c662fd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=0129fb2395ed3943dff68abfca2bf696",
//         "available": true
//     },
//     {
//         "dishesName": "power plate with wild caught salmon",
//         "price": 87,
//         "weight": 206,
//         "image": "https://olo-images-live.imgix.net/42/42cc2aded8f741ed96fac0d9f055faef.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c10017458923d6a6877e1bcee366a444",
//         "available": true
//     },
//     {
//         "dishesName": "power plate with shrimp",
//         "price": 111,
//         "weight": 202,
//         "image": "https://olo-images-live.imgix.net/0f/0f856abb781b484e91c2cbc8c7575b33.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=27b21c23ec093b373cce882f1e8f86e4",
//         "available": true
//     },
//     {
//         "dishesName": "power bowl",
//         "price": 118,
//         "weight": 372,
//         "image": "https://olo-images-live.imgix.net/96/9605580ffee045b8bef07c62c12f8213.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=ce7a56777a2d8c9cc29349343a5a5ee5",
//         "available": true
//     },
//     {
//         "dishesName": "power plate with organic non-gmo tofu",
//         "price": 90,
//         "weight": 210,
//         "image": "https://olo-images-live.imgix.net/a3/a3ea0ead3c9849639af15537cb379324.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c4b4c58e17599847a475e6f2dd70112e",
//         "available": false
//     },
//     {
//         "dishesName": "fajita bowl",
//         "price": 113,
//         "weight": 291,
//         "image": "https://olo-images-live.imgix.net/ab/ab4213c1e10345ab8e7b9e4730616033.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=5ca4f9d5df6b400de64c6e8b9094f919",
//         "available": false
//     },
//     {
//         "dishesName": "kid's power plate",
//         "price": 84,
//         "weight": 221,
//         "image": "https://olo-images-live.imgix.net/4a/4a3e79752de442ea91066b3c3d5832d6.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c38800f016230db9d9c1fea8fd4779e4",
//         "available": false
//     },
//     {
//         "dishesName": "kid's cheese quesadilla",
//         "price": 54,
//         "weight": 309,
//         "image": "https://olo-images-live.imgix.net/d2/d2ba1c535ef94a1b9e6feffaf606676d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=59fc244d3af9e631bc0265b7c70e9c09",
//         "available": true
//     },
//     {
//         "dishesName": "kid's nachos",
//         "price": 103,
//         "weight": 267,
//         "image": "https://olo-images-live.imgix.net/82/82e11f746f224b38be7ef706f3526557.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=2b37336e3fd82a4e13ad725f60b84cec",
//         "available": true
//     },
//     {
//         "dishesName": "kid's drinks",
//         "price": 55,
//         "weight": 281,
//         "image": "https://olo-images-live.imgix.net/46/46ea80b295ad417db24d9b7b85fb7cff.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=4e73c218847fed6fb69a45ce445d8f14",
//         "available": true
//     },
//     {
//         "dishesName": "spinach, mushroom, & cauliflower quesadilla",
//         "price": 52,
//         "weight": 200,
//         "image": "https://olo-images-live.imgix.net/70/706b0918043c48289d97a58006adcd82.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=6b24b44e119433d21cf2304b428aa884",
//         "available": true
//     },
//     {
//         "dishesName": "stacked chicken enchiladas",
//         "price": 92,
//         "weight": 265,
//         "image": "https://olo-images-live.imgix.net/5c/5cf68413303a45d487d69ba658f444cb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=aa2af450e403f48c32168029d675f083",
//         "available": true
//     },
//     {
//         "dishesName": "chicken tortilla soup",
//         "price": 91,
//         "weight": 279,
//         "image": "https://olo-images-live.imgix.net/f9/f9df3d8885d945f1b9dbc2850ec72f9e.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=da00e728605b04bbf04fc212a47a3a62",
//         "available": true
//     },
//     {
//         "dishesName": "tostada salad",
//         "price": 106,
//         "weight": 278,
//         "image": "https://olo-images-live.imgix.net/e5/e5e148771cb74776a91fabda356e2508.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=6af784bd459ec4f2a0564e25d724b78a",
//         "available": false
//     },
//     {
//         "dishesName": "sharky's chicken salad",
//         "price": 79,
//         "weight": 377,
//         "image": "https://olo-images-live.imgix.net/58/581ed1707d79471bb5b10d4a948b01a5.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=4ec89cbb513159a5b6629f87f3754431",
//         "available": true
//     },
//     {
//         "dishesName": "half sharky's chicken salad",
//         "price": 80,
//         "weight": 303,
//         "image": "https://olo-images-live.imgix.net/c3/c3ceb895e0e44962a7ebc6a454347da6.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=6b011a99113fe92c7fdf0b1b37a5c003",
//         "available": true
//     },
//     {
//         "dishesName": "half numex caesar salad",
//         "price": 37,
//         "weight": 386,
//         "image": "https://olo-images-live.imgix.net/69/69db1f02934d46bebdeb74d8a066c863.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=b0c9c929d1a7c1fe4fef9423e4df96c2",
//         "available": true
//     },
//     {
//         "dishesName": "small side salad",
//         "price": 73,
//         "weight": 282,
//         "image": "https://olo-images-live.imgix.net/13/136a95d6726849bca231a8b6f64c5125.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=813ceafff0a2e2d9a01c5e20878f2156",
//         "available": false
//     },
//     {
//         "dishesName": "soup & numex side salad",
//         "price": 94,
//         "weight": 218,
//         "image": "https://olo-images-live.imgix.net/96/9679f814f8bc40b1b3927eeb2344fd00.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=729f4a8140d323e2cd3f647006577032",
//         "available": false
//     },
//     {
//         "dishesName": "plant based queso & chips",
//         "price": 85,
//         "weight": 253,
//         "image": "https://olo-images-live.imgix.net/b6/b623cb9c1c2d4fcda2059af0b50fa91c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=446a20e5b3d439f616436699b312a5d8",
//         "available": false
//     },
//     {
//         "dishesName": "avocado quinoa superfood salad",
//         "price": 33,
//         "weight": 387,
//         "image": "https://olo-images-live.imgix.net/df/df21c5f3f6ff4b779d39c33ba3848543.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=178573b22e81e1edec7d5fe31da2cc65",
//         "available": false
//     },
//     {
//         "dishesName": "roasted cauliflower & mushroom taco plate",
//         "price": 62,
//         "weight": 354,
//         "image": "https://olo-images-live.imgix.net/4e/4e5a4e15bf6948288028c1cd701f82bc.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c52e0c96480b9071024e192ae3cd6592",
//         "available": false
//     },
//     {
//         "dishesName": "organic non-gmo tofu & veggie taco plate",
//         "price": 71,
//         "weight": 312,
//         "image": "https://olo-images-live.imgix.net/d1/d1ed6219fd6b4b4399718eaa3434a908.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=8ec3b9b451bd0dbdfc6153459e93a8c0",
//         "available": true
//     }
// ]
// const dishesSharkys = allDishesSharkys.map(el => {
//     return {...el, restaurantsId: new ObjectId('62fd0c4a1f3a671a69e62a14')}
// })
// Dish.insertMany(dishesSharkys)
// .then((res) => console.log('Saved all Sharkys dishes'))
// .catch((err) => console.log(err));