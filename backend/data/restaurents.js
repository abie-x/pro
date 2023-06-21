// const restaurants = [
//     {
//         restaurant_name: "Barbeque Nation",
//         city: "Delhi",
//         address: "6th Floor Imperiaal Trade Center, Mahatma Gandhi Rd, Kacheripady, Ernakulam, Kerala 682035",
//         image: "https://edtimes.in/wp-content/uploads/2021/05/thumb.jpg",
//         phone_number: "852361489",
//         cuisines: ["BBQ/Grill", "Rice dishes", "Sea food", "Shakes"],
//         ambience: ["Family friendly", "Outdoor"],
//         reviews: [{reviewer_name: "Joe", review_text: "Good food! good staff", rating: 4,}],
//         // review_date: '2023-02-02',
//         menu_items: [{item_name: "Pasta", item_description: "Pasta in white sauce is a classic Italian dish that is popular worldwide. The dish consists of cooked pasta tossed in a creamy white sauce made from butter, flour, milk, and cheese.", item_image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", item_price: 500, vegetarian: true, spicy: false, allergens: ["wheat", "milk"], remaining: 0, category: "Live Counter", cheffSpecial: true }]
//     },
//     {
//         restaurant_name: "Thompson's Cafe",
//         city: "Delhi",
//         address: "6th Floor Imperiaal Trade Center, Mahatma Gandhi Rd, Kacheripady, Ernakulam, Kerala 682035",
//         image: "https://www.asia-bars.com/wp-content/uploads/2013/10/cafe-9-jim-thompson-7.jpg",
//         phone_number: "852361489",
//         cuisines: ["BBQ/Grill", "Rice dishes"],
//         ambience: ["Family friendly", "Outdoor", "Romantic"],
//         reviews: [{reviewer_name: "Joe", review_text: "Good food! good staff", rating: 4,}],
//         // review_date: '2023-02-02',
//         menu_items: [{item_name: "Dosa", item_description: "Pasta in white sauce is a classic Italian dish that is popular worldwide. The dish consists of cooked pasta tossed in a creamy white sauce made from butter, flour, milk, and cheese.", item_image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", item_price: 450, vegetarian: true, spicy: false, allergens: ["wheat", "milk"], remaining: 100, category: "Live Counter", cheffSpecial: false}]
//     },

//     {
//         restaurant_name: "La Piazza",
//         city: "Mumbai",
//         address: "15th corner lane, Bandra west, Mumbai",
//         image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cd/57/9d/ristorante-la-piazza.jpg?w=800&h=600&s=1",
//         phone_number: "555-1234",
//         cuisines: ["Italian", "Grills"],
//         ambience: ["Casual Dining"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The pasta was amazing!",
//             rating: 4
//           },
//           {
//             reviewer_name: "Jane Doe",
//             review_text: "The pizza was delicious!",
//             rating: 5
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Spaghetti Carbonara",
//             item_description: "Spaghetti with bacon and cream sauce",
//             item_image: "spaghetti.jpg",
//             item_price: 15,
//             vegetarian: false,
//             spicy: false,
//             allergens: ["Gluten"],
//             remaining: 20,
//             cheffSpecial: true,
//             category: "Main Course"
//           },
//           {
//             item_name: "Margherita Pizza",
//             item_description: "Tomato sauce, mozzarella cheese, and basil",
//             item_image: "pizza.jpg",
//             item_price: 12,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Dairy"],
//             remaining: 15,
//             cheffSpecial: false,
//             category: "Main Course"
//           },
//           {
//             item_name: "Eggplant Parmesan",
//             item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
//             item_image: "https://example.com/images/eggplant_parmesan.jpg",
//             item_price: 15.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Gluten"],
//             remaining: 10,
//             cheffSpecial: false,
//             category: "Main Course",
//             created_at: "2022-03-01T18:30:00.000Z",
//             updated_at: "2022-03-01T18:30:00.000Z"
//           },
//           {
//             item_name: "Ravioli",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Gluten", "Dairy"],
//             remaining: 20,
//             cheffSpecial: true,
//             category: "Starters",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 120,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Tiramisu",
//             item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
//             item_image: "https://example.com/images/tiramisu.jpg",
//             item_price: 7.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Dairy"],
//             remaining: 15,
//             cheffSpecial: false,
//             category: "Desserts",
//             created_at: "2022-03-03T15:30:00.000Z",
//             updated_at: "2022-03-03T15:30:00.000Z"
//           },
//           {
//             item_name: "Penne Vodka",
//             item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//             item_image: "https://example.com/images/penne_vodka.jpg",
//             item_price: 16.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Dairy"],
//             remaining: 8,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-04T19:00:00.000Z",
//             updated_at: "2022-03-04T19:00:00.000Z"
//           },
//         ]
//       },
//       {
//         restaurant_name: "Le Bernardin",
//         city: "Mumbai",
//         address: "Unit3 lane road, Bandra east, Mumbai",
//         image: "https://www.gayot.com/images/reviews/le-bernardin-eric-ripert.jpg",
//         phone_number: "555-5678",
//         cuisines: ["French", "Seafood", "Gluten free"],
//         ambience: ["Fine Dining", "Sports bar"],
//         reviews: [
//           {
//             reviewer_name: "Alice Lee",
//             review_text: "The seafood was so fresh!",
//             rating: 5
//           },
//           {
//             reviewer_name: "Bob Chen",
//             review_text: "The service was top-notch!",
//             rating: 4
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-750x750.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 40,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Tuna Tartare",
//             item_description: "Raw tuna with avocado and citrus",
//             item_image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/06/tuna-tartare-1-638x425.jpg",
//             item_price: 20,
//             vegetarian: false,
//             spicy: false,
//             allergens: ["Fish"],
//             remaining: 10,
//             cheffSpecial: true,
//             category: "Starters"
//           },
//           {
//             item_name: "Lobster Risotto",
//             item_description: "Creamy risotto with lobster meat",
//             item_image: "https://res.cloudinary.com/hsxfx8igq/image/upload/t_4x3_recipe_image,f_auto/v1612796720/Butter-Poached-Lobster-with-risotto-7_bgb9vf.jpg",
//             item_price: 35,
//             vegetarian: false,
//             spicy: false,
//             allergens: ["Shellfish", "Dairy"],
//             remaining: 8,
//             cheffSpecial: false,
//             category: "Main Course"
//           },
//           {
//             item_name: "Eggplant Parmesan",
//             item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
//             item_image: "https://www.allrecipes.com/thmb/v8J8OelKo1bEJ9RyekLtL89A_R0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4457679-eggplant-parmesan-gluten-free-Buckwheat-Queen-4x3-1-1380f16c6cc14e059f7ae7d741d390d9.jpg",
//             item_price: 15.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Gluten"],
//             remaining: 10,
//             cheffSpecial: false,
//             category: "Main Course",
//             created_at: "2022-03-01T18:30:00.000Z",
//             updated_at: "2022-03-01T18:30:00.000Z"
//           },
//           {
//             item_name: "Ravioli",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://www.washingtonpost.com/resizer/TQ9QxR65Yg-GXfMDjOkJrQr1IdE=/arc-anglerfish-washpost-prod-washpost/public/NISTUZONRZGA6YLORKXHOVYFXA.jpg",
//             item_price: 12.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Gluten", "Dairy"],
//             remaining: 20,
//             cheffSpecial: true,
//             category: "Starters",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Tiramisu",
//             item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
//             item_image: "https://www.livewellbakeoften.com/wp-content/uploads/2021/01/Tiramisu-8s.jpg",
//             item_price: 7.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Dairy"],
//             remaining: 15,
//             cheffSpecial: false,
//             category: "Desserts",
//             created_at: "2022-03-03T15:30:00.000Z",
//             updated_at: "2022-03-03T15:30:00.000Z"
//           },
//           {
//             item_name: "Penne Vodka",
//             item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//             item_image: "https://natashaskitchen.com/wp-content/uploads/2023/02/Penne-alla-Vodka-SQ.jpg",
//             item_price: 16.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: ["Dairy"],
//             remaining: 8,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-04T19:00:00.000Z",
//             updated_at: "2022-03-04T19:00:00.000Z"
//           },
//         ]
//       },
//       {
//         restaurant_name: "The Golden Spoon",
//         city: "Mumbai",
//         address: "Wadia international centre, Lower parel, Mumbai",
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/13/81/a5/cd/inside-view-luminated.jpg",
//         phone_number: "555-1234",
//         cuisines: ["Chinese", "Japanese"],
//         ambience: ["Casual", "Family-friendly"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The food was delicious!",
//             review_date: "2022-03-15T08:00:00.000Z",
//             rating: 4
//           },
//           {
//             reviewer_name: "Mary Johnson",
//             review_text: "Great service and atmosphere",
//             review_date: "2022-02-20T08:00:00.000Z",
//             rating: 5
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 58,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Kung Pao Chicken",
//             item_description: "Spicy chicken with peanuts and vegetables",
//             item_image: "https://www.example.com/images/kung-pao-chicken.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             allergens: ["peanuts"],
//             remaining: 10,
//             cheffSpecial: false,
//             category: "Main Course"
//           },
//           {
//             item_name: "California Roll",
//             item_description: "Crab, avocado, and cucumber rolled in sushi rice",
//             item_image: "https://www.example.com/images/california-roll.jpg",
//             item_price: 8.99,
//             vegetarian: false,
//             spicy: false,
//             allergens: ["shellfish"],
//             remaining: 5,
//             cheffSpecial: false,
//             category: "Starters"
//           },
//           {
//             item_name: "Shrimp Tempura",
//             item_description: "Crispy fried shrimp with dipping sauce",
//             item_image: "https://www.example.com/images/shrimp-tempura.jpg",
//             item_price: 10.99,
//             vegetarian: false,
//             spicy: false,
//             allergens: ["shellfish"],
//             remaining: 7,
//             cheffSpecial: true,
//             category: "Starters"
//           },
//           {
//             item_name: "Miso Soup",
//             item_description: "Soybean paste soup with tofu and seaweed",
//             item_image: "https://www.example.com/images/miso-soup.jpg",
//             item_price: 2.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: [],
//             remaining: 20,
//             cheffSpecial: false,
//             category: "Soup"
//           }
//         ]
//       },
//       {
//         restaurant_name: "Taj Mahal Palace",
//         city: "Mumbai",
//         address: "13 Main St, Andheri west, Mumbai",
//         image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg",
//         phone_number: "555-555-1234",
//         cuisines: ["Indian"],
//         ambience: ["Casual Dining", "Family Friendly"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The food was amazing and the service was excellent!",
//             review_date: "2022-03-20",
//             rating: 5
//           },
//           {
//             reviewer_name: "Jane Doe",
//             review_text: "The food was good but the service could have been better.",
//             review_date: "2022-03-15",
//             rating: 3
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 100,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Chicken Tikka Masala",
//             item_description: "Grilled chicken in a creamy tomato sauce",
//             item_image: "https://example.com/images/chicken-tikka-masala.jpg",
//             item_price: 14.99,
//             vegetarian: false,
//             spicy: true,
//             allergens: ["dairy"],
//             remaining: 10,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Vegetable Biryani",
//             item_description: "Mixed vegetables with aromatic basmati rice",
//             item_image: "https://example.com/images/vegetable-biryani.jpg",
//             item_price: 11.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: [],
//             remaining: 15,
//             cheffSpecial: true,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Samosa",
//             item_description: "Crispy fried pastry filled with spiced vegetables",
//             item_image: "https://example.com/images/samosa.jpg",
//             item_price: 3.99,
//             vegetarian: true,
//             spicy: true,
//             allergens: ["gluten"],
//             remaining: 20,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Starters",
//             updated_at: "2022-03-05"
//           }
//         ]
//       },
//       {
//         restaurant_name: "Lake view Cafe",
//         city: "Mumbai",
//         address: "plot no2, powai, Mumbai",
//         image: "https://www.mumbailive.com/images/media/images/images_1536737847562_lakeview_3_1.jpg?bg=251b1c&crop=1368%2C768%2C0%2C0&fit=fill&fm=webp&h=768&w=1368",
//         phone_number: "555-555-1234",
//         cuisines: ["Indian"],
//         ambience: ["Casual Dining", "Family Friendly"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The food was amazing and the service was excellent!",
//             review_date: "2022-03-20",
//             rating: 5
//           },
//           {
//             reviewer_name: "Jane Doe",
//             review_text: "The food was good but the service could have been better.",
//             review_date: "2022-03-15",
//             rating: 3
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 100,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Chicken Tikka Masala",
//             item_description: "Grilled chicken in a creamy tomato sauce",
//             item_image: "https://example.com/images/chicken-tikka-masala.jpg",
//             item_price: 14.99,
//             vegetarian: false,
//             spicy: true,
//             allergens: ["dairy"],
//             remaining: 10,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Vegetable Biryani",
//             item_description: "Mixed vegetables with aromatic basmati rice",
//             item_image: "https://example.com/images/vegetable-biryani.jpg",
//             item_price: 11.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: [],
//             remaining: 15,
//             cheffSpecial: true,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Samosa",
//             item_description: "Crispy fried pastry filled with spiced vegetables",
//             item_image: "https://example.com/images/samosa.jpg",
//             item_price: 3.99,
//             vegetarian: true,
//             spicy: true,
//             allergens: ["gluten"],
//             remaining: 20,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Starters",
//             updated_at: "2022-03-05"
//           }
//         ]
//       },
//       {
//         restaurant_name: "The earth plate",
//         city: "Mumbai",
//         address: "Western express hwy, Terminal1, Mumbai",
//         image: "https://im.whatshot.in/img/2020/Mar/the-earth-plate-sahara-star-1-1584304251.jpg",
//         phone_number: "555-555-1234",
//         cuisines: ["Indian"],
//         ambience: ["Casual Dining", "Family Friendly"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The food was amazing and the service was excellent!",
//             review_date: "2022-03-20",
//             rating: 5
//           },
//           {
//             reviewer_name: "Jane Doe",
//             review_text: "The food was good but the service could have been better.",
//             review_date: "2022-03-15",
//             rating: 3
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 100,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Chicken Tikka Masala",
//             item_description: "Grilled chicken in a creamy tomato sauce",
//             item_image: "https://example.com/images/chicken-tikka-masala.jpg",
//             item_price: 14.99,
//             vegetarian: false,
//             spicy: true,
//             allergens: ["dairy"],
//             remaining: 10,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Vegetable Biryani",
//             item_description: "Mixed vegetables with aromatic basmati rice",
//             item_image: "https://example.com/images/vegetable-biryani.jpg",
//             item_price: 11.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: [],
//             remaining: 15,
//             cheffSpecial: true,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Samosa",
//             item_description: "Crispy fried pastry filled with spiced vegetables",
//             item_image: "https://example.com/images/samosa.jpg",
//             item_price: 3.99,
//             vegetarian: true,
//             spicy: true,
//             allergens: ["gluten"],
//             remaining: 20,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Starters",
//             updated_at: "2022-03-05"
//           }
//         ]
//       },
//       {
//         restaurant_name: "Citrus Cafe",
//         city: "Mumbai",
//         address: "Opposite mittal estate, Andheri, Mumbai",
//         image: "https://b.zmtcdn.com/data/pictures/0/66090/d1fa8d1ca850c20a2673bdeb8670c565_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//         phone_number: "555-555-1234",
//         cuisines: ["Indian"],
//         ambience: ["Casual Dining", "Family Friendly"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The food was amazing and the service was excellent!",
//             review_date: "2022-03-20",
//             rating: 5
//           },
//           {
//             reviewer_name: "Jane Doe",
//             review_text: "The food was good but the service could have been better.",
//             review_date: "2022-03-15",
//             rating: 3
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 100,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Chicken Tikka Masala",
//             item_description: "Grilled chicken in a creamy tomato sauce",
//             item_image: "https://example.com/images/chicken-tikka-masala.jpg",
//             item_price: 14.99,
//             vegetarian: false,
//             spicy: true,
//             allergens: ["dairy"],
//             remaining: 10,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Vegetable Biryani",
//             item_description: "Mixed vegetables with aromatic basmati rice",
//             item_image: "https://example.com/images/vegetable-biryani.jpg",
//             item_price: 11.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: [],
//             remaining: 15,
//             cheffSpecial: true,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Samosa",
//             item_description: "Crispy fried pastry filled with spiced vegetables",
//             item_image: "https://example.com/images/samosa.jpg",
//             item_price: 3.99,
//             vegetarian: true,
//             spicy: true,
//             allergens: ["gluten"],
//             remaining: 20,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Starters",
//             updated_at: "2022-03-05"
//           }
//         ]
//       },
//       {
//         restaurant_name: "Shanghai Club",
//         city: "Mumbai",
//         address: "287, Dr baba sahed rd, parel, mumbai",
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/19/3c/bf/71/ambiance-at-shanghai.jpg",
//         phone_number: "555-555-1234",
//         cuisines: ["Indian"],
//         ambience: ["Casual Dining", "Family Friendly"],
//         reviews: [
//           {
//             reviewer_name: "John Smith",
//             review_text: "The food was amazing and the service was excellent!",
//             review_date: "2022-03-20",
//             rating: 5
//           },
//           {
//             reviewer_name: "Jane Doe",
//             review_text: "The food was good but the service could have been better.",
//             review_date: "2022-03-15",
//             rating: 3
//           }
//         ],
//         menu_items: [
//           {
//             item_name: "Chicken Biriyani",
//             item_description: "Pasta pockets filled with ricotta cheese and served in marinara sauce.",
//             item_image: "https://example.com/images/ravioli.jpg",
//             item_price: 12.99,
//             vegetarian: false,
//             spicy: true,
//             remaining: 100,
//             cheffSpecial: true,
//             category: "Main Course",
//             created_at: "2022-03-02T12:00:00.000Z",
//             updated_at: "2022-03-02T12:00:00.000Z"
//           },
//           {
//             item_name: "Chicken Tikka Masala",
//             item_description: "Grilled chicken in a creamy tomato sauce",
//             item_image: "https://example.com/images/chicken-tikka-masala.jpg",
//             item_price: 14.99,
//             vegetarian: false,
//             spicy: true,
//             allergens: ["dairy"],
//             remaining: 10,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Vegetable Biryani",
//             item_description: "Mixed vegetables with aromatic basmati rice",
//             item_image: "https://example.com/images/vegetable-biryani.jpg",
//             item_price: 11.99,
//             vegetarian: true,
//             spicy: false,
//             allergens: [],
//             remaining: 15,
//             cheffSpecial: true,
//             created_at: "2022-03-01",
//             category: "Main Course",
//             updated_at: "2022-03-05"
//           },
//           {
//             item_name: "Samosa",
//             item_description: "Crispy fried pastry filled with spiced vegetables",
//             item_image: "https://example.com/images/samosa.jpg",
//             item_price: 3.99,
//             vegetarian: true,
//             spicy: true,
//             allergens: ["gluten"],
//             remaining: 20,
//             cheffSpecial: false,
//             created_at: "2022-03-01",
//             category: "Starters",
//             updated_at: "2022-03-05"
//           }
//         ]
//       }
// ]

// export default restaurants

// const restaurants = [
//   {
//     restaurant_name: "Le Bernardin",
//     city: "Mumbai",
//     address: "Unit3 lane road, Bandra east, Mumbai",
//     image: "https://www.gayot.com/images/reviews/le-bernardin-eric-ripert.jpg",
//     phone_number: "555-5678",
//     cuisines: [, "seafood", "chinese"],
//     ambience: ["outdoor seating", "family friendly"],
//     reviews: [
//       {
//         reviewer_name: "Alice Lee",
//         review_text: "The seafood was so fresh!",
//         rating: 5
//       },
//       {
//         reviewer_name: "Bob Chen",
//         review_text: "The service was top-notch!",
//         rating: 4
//       }
//     ],
//     menu_items: [
//       {
//         item_name: "goan fish curry",
//         item_description: "ghhhgjjjjjjjjvghhhhhhhhhhhhhhhhjj",
//         item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fgoan-fish-curry-indian%2F&psig=AOvVaw0O7Hf7Y81OYgd_0Ct4QNvh&ust=1683795672956000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiugOmx6v4CFQAAAAAdAAAAABAE",
//         item_price: 100,
//         vegetarian: false,
//         spicy: true,
//         remaining: 40,
//         cheffSpecial: true,
//         category: "main course",
//         created_at: "2022-03-02T12:00:00.000Z",
//         updated_at: "2022-03-02T12:00:00.000Z"
//       },
//       {
//         item_name: "Tuna Tartare",
//         item_description: "Raw tuna with avocado and citrus",
//         item_image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/06/tuna-tartare-1-638x425.jpg",
//         item_price: 250,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Fish"],
//         remaining: 10,
//         cheffSpecial: true,
//         category: "starters"
//       },
//       {
//         item_name: "Lobster Risotto",
//         item_description: "Creamy risotto with lobster meat",
//         item_image: "https://res.cloudinary.com/hsxfx8igq/image/upload/t_4x3_recipe_image,f_auto/v1612796720/Butter-Poached-Lobster-with-risotto-7_bgb9vf.jpg",
//         item_price: 200,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Shellfish", "Dairy"],
//         remaining: 8,
//         cheffSpecial: false,
//         category: "Main Course"
//       },
//       {
//         item_name: "Peking duck",
//         item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
//         item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fpeking-duck&psig=AOvVaw2ZmZx1FY5eMk-kffWGQK62&ust=1683795943441000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCky-my6v4CFQAAAAAdAAAAABAF",
//         item_price: 200,
//         vegetarian: false,
//         spicy: true,
//         allergens: ["Gluten"],
//         remaining: 10,
//         cheffSpecial: true,
//         category: "Main Course",
//         created_at: "2022-03-01T18:30:00.000Z",
//         updated_at: "2022-03-01T18:30:00.000Z"
//       },
//       {
//         item_name: "shumai",
//         item_description: "hfjhbkjkjkjkklklkllk",
//         item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fsiu-mai-shumai-steamed-dumplings%2F&psig=AOvVaw2uA49BFr7nEmkbi-JiC8kt&ust=1683796061177000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCn6KGz6v4CFQAAAAAdAAAAABAJ",
//         item_price: 200,
//         vegetarian: true,
//         spicy: false,
//         allergens: ["Gluten", "Dairy"],
//         remaining: 20,
//         cheffSpecial: false,
//         category: "Starters",
//         created_at: "2022-03-02T12:00:00.000Z",
//         updated_at: "2022-03-02T12:00:00.000Z"
//       },
//       {
//         item_name: "hot pot",
//         item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
//         item_image: "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_cut_750x400_39.webp",
//         item_price: 300,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 15,
//         cheffSpecial: false,
//         category: "main course",
//         created_at: "2022-03-03T15:30:00.000Z",
//         updated_at: "2022-03-03T15:30:00.000Z"
//       },
//       {
//         item_name: "lobster tails",
//         item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//         item_image: "https://www.coastalseafoods.com/Assets/coastal-seafood-daily-specials.jpg",
//         item_price: 160,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 8,
//         cheffSpecial: true,
//         category: "Main Course",
//         created_at: "2022-03-04T19:00:00.000Z",
//         updated_at: "2022-03-04T19:00:00.000Z"
//       },
// { item_name: "Wonton",
//         item_description: "Creamy risotto with lobster meat",
//         item_image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Frasamalaysia.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fchicken_wontons_thumb.jpg&tbnid=ts_7C6O03u8xnM&vet=12ahUKEwjs-7iMtOr-AhU45XMBHfWzDaEQMygAegUIARCFAg..i&imgrefurl=https%3A%2F%2Frasamalaysia.com%2Fchicken-wontons%2F&docid=VdK2BZjodTAPDM&w=600&h=600&q=chicken%20wonton&ved=2ahUKEwjs-7iMtOr-AhU45XMBHfWzDaEQMygAegUIARCFAg",
//         item_price: 35,
//         vegetarian: false,
//         spicy: true,
//         allergens: ["Shellfish", "Dairy"],
//         remaining: 8,
//         cheffSpecial: true,
//         category: "starters"
// },
// {
//         item_name: "garlic prawns",
//         item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//         item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fgarlic-prawns-shrimp%2F&psig=AOvVaw2Gk2eLM-CoeFRr6LBFWrlV&ust=1683796779803000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJC3y_i16v4CFQAAAAAdAAAAABAE",
//         item_price: 160,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 8,
//         cheffSpecial: true,
//         category: "Main Course",
//         created_at: "2022-03-04T19:00:00.000Z",
//         updated_at: "2022-03-04T19:00:00.000Z"
//       }, {
//         item_name: "china delight",
//         item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//         item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chinadelightparkville.com%2F&psig=AOvVaw0CfsyAtiDq8pnxFXNI35Gy&ust=1683796841604000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjwipa26v4CFQAAAAAdAAAAABAe",
//         item_price: 160,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 8,
//         cheffSpecial: true,
//         category: "Main Course",
//         created_at: "2022-03-04T19:00:00.000Z",
//         updated_at: "2022-03-04T19:00:00.000Z"
//       }
//     ]
//   },







// {
//     restaurant_name: "Estella",
//     city: "Mumbai",
//     address: "Unit3 lane road, Bandra east, Mumbai",
//     image: "https://assets.gqindia.com/photos/62a9d3ec3e8cdc9b632eb2ab/master/w_1600,c_limit/Estella.jpg",
//     phone_number: "555-5678",
//     cuisines: [, "seafood", "italian"],
//     ambience: ["outdoor seating", "family friendly"],
//     reviews: [
//       {
//         reviewer_name: "Alice Lee",
//         review_text: "The seafood was so fresh!",
//         rating: 5
//       },
//       {
//         reviewer_name: "Bob Chen",
//         review_text: "The service was top-notch!",
//         rating: 4
//       }
//     ],
//     menu_items: [
//       {
//         item_name: "gnocchi",
//         item_description: "ghhhgjjjjjjjjvghhhhhhhhhhhhhhhhjj",
//         item_image: “https://www.chefspencil.com/wp-content/uploads/Gnocchi-1.jpg.webp”
//         item_price: 300,
//         vegetarian: false,
//         spicy: true,
//         remaining: 40,
//         cheffSpecial: true,
//         category: "starters",
//         created_at: "2022-03-02T12:00:00.000Z",
//         updated_at: "2022-03-02T12:00:00.000Z"
//       },
//       {
//         item_name: "ribollita",
//         item_description: "Raw tuna with avocado and citrus",
//         item_image: "https://www.chefspencil.com/wp-content/uploads/Ribollita.jpg.webp",
//         item_price: 350,
//         vegetarian: true,
//         spicy: false,
//         allergens: ["Fish"],
//         remaining: 10,
//         cheffSpecial: true,
//         category: "Starters"
//       },
//       {
//         item_name: "bagna cauda",
//         item_description: "Creamy risotto with lobster meat",
//         item_image: "https://www.chefspencil.com/wp-content/uploads/Bagna-cauda.jpg.webp",
//         item_price: 200,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Shellfish", "Dairy"],
//         remaining: 8,
//         cheffSpecial: false,
//         category: "Main Course"
//       },
//       {
//         item_name: "Polenta",
//         item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
//         item_image: "https://www.seriouseats.com/thmb/ILLeyKORbTnz3DsUKRrEoLSDJjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg",
//         item_price: 300,
//         vegetarian: false,
//         spicy: true,
//         allergens: ["Gluten"],
//         remaining: 10,
//         cheffSpecial: true,
//         category: "Main Course",
//         created_at: "2022-03-01T18:30:00.000Z",
//         updated_at: "2022-03-01T18:30:00.000Z"
//       },
//       {
//         item_name: "pasta",
//         item_description: "hfjhbkjkjkjkklklkllk",
//         item_image: "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg",
//         item_price: 200,
//         vegetarian: true,
//         spicy: false,
//         allergens: ["Gluten", "Dairy"],
//         remaining: 20,
//         cheffSpecial: false,
//         category: "Starters",
//         created_at: "2022-03-02T12:00:00.000Z",
//         updated_at: "2022-03-02T12:00:00.000Z"
//       },
//       {
//         item_name: "sphagetti with clams and garlic",
//         item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
//         item_image: "https://www.foodandwine.com/thmb/aBJSH_AZq5Go7VCdtk3u1MmJJfg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201002-r-spaghetti-clams-garlic-191079f02ac24cc1aefa05f5b921273b.jpg",
//         item_price: 300,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 15,
//         cheffSpecial: true,
//         category: "main course",
//         created_at: "2022-03-03T15:30:00.000Z",
//         updated_at: "2022-03-03T15:30:00.000Z"
//       },
//       {
//         item_name: "langoustines alla busara",
//         item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//         item_image: "https://www.foodandwine.com/thmb/RVKpUtXnBmURqq8Yk-ufccF9xdQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/langoustines-alla-busara-XL-RECIPE0916-14e38dd9b4ed4db7837177ea655f11ff.jpg",
//         item_price: 160,
//         vegetarian: true,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 8,
//         cheffSpecial: false,
//         category: "starters",
//         created_at: "2022-03-04T19:00:00.000Z",
//         updated_at: "2022-03-04T19:00:00.000Z"
//       },
// { item_name: "maine style lobster rolls",
//         item_description: "Creamy risotto with lobster meat",
//         item_image: "",
//         item_price: 35,
//         vegetarian: false,
//         spicy: true,
//         allergens: ["Shellfish", "Dairy"],
//         remaining: 8,
//         cheffSpecial: true,
//         category: "starters"
// },
// {
//         item_name: "garlic prawns",
//         item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//         item_image: "https://www.foodandwine.com/thmb/4TZj0NWKrVhE2DNDOJOs8gpudrM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/maine-style-lobster-rolls-ft-RECIPE0718_1-1ef66855601d4248a2499945e08244b7.jpg",
//         item_price: 160,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 8,
//         cheffSpecial: false,
//         category: "Main Course",
//         created_at: "2022-03-04T19:00:00.000Z",
//         updated_at: "2022-03-04T19:00:00.000Z"
//       }, {
//         item_name: "chutney fish",
//         item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
//         item_image: "https://www.foodandwine.com/thmb/fQVMR6Csaho8UG8AlX1OnDMTgdw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chutney-fish-FT-RECIPE0321-2b2d51daaba34c999f693ec58c3dfd34.jpg",
//         item_price: 160,
//         vegetarian: false,
//         spicy: false,
//         allergens: ["Dairy"],
//         remaining: 8,
//         cheffSpecial: false,
//         category: "Main Course",
//         created_at: "2022-03-04T19:00:00.000Z",
//         updated_at: "2022-03-04T19:00:00.000Z"
//       }
//     ]
//   },

//   ]

// export default restaurants

const restaurants = [
  {
    restaurant_name: "Le Bernardin",
    city: "Mumbai",
    address: "Unit3 lane road, Bandra east, Mumbai",
    image: "https://www.gayot.com/images/reviews/le-bernardin-eric-ripert.jpg",
    phone_number: "555-5678",
    cuisines: [, "seafood", "chinese"],
    ambience: ["outdoor seating", "family friendly"],
    reviews: [
      {
        reviewer_name: "Alice Lee",
        review_text: "The seafood was so fresh!",
        rating: 5
      },
      {
        reviewer_name: "Bob Chen",
        review_text: "The service was top-notch!",
        rating: 4
      }
    ],
    menu_items: [
      {
        item_name: "meals",
        item_description: "ghhhgjjjjjjjjvghhhhhhhhhhhhhhhhjj",
        item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fgoan-fish-curry-indian%2F&psig=AOvVaw0O7Hf7Y81OYgd_0Ct4QNvh&ust=1683795672956000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiugOmx6v4CFQAAAAAdAAAAABAE",
        item_price: 100,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: true,
        remaining: 40,
        calorie: 350,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-02T12:00:00.000Z",
        updated_at: "2022-03-02T12:00:00.000Z"
      },
      {
        item_name: "Tuna Tartare",
        item_description: "Raw tuna with avocado and citrus",
        item_image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/06/tuna-tartare-1-638x425.jpg",
        item_price: 250,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Fish"],
        remaining: 10,
        calorie: 160,
        cheffSpecial: true,
        category: "starters"
      },
      {
        item_name: "Rice",
        item_description: "Creamy risotto with lobster meat",
        item_image: "https://res.cloudinary.com/hsxfx8igq/image/upload/t_4x3_recipe_image,f_auto/v1612796720/Butter-Poached-Lobster-with-risotto-7_bgb9vf.jpg",
        item_price: 200,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Shellfish", "Dairy"],
        remaining: 8,
        calorie: 200,
        cheffSpecial: false,
        category: "main course"
      },
      {
        item_name: "Peking duck",
        item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
        item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fpeking-duck&psig=AOvVaw2ZmZx1FY5eMk-kffWGQK62&ust=1683795943441000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCky-my6v4CFQAAAAAdAAAAABAF",
        item_price: 200,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: true,
        allergens: ["Gluten"],
        remaining: 10,
        calorie: 250,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-01T18:30:00.000Z",
        updated_at: "2022-03-01T18:30:00.000Z"
      },
      {
        item_name: "shumai",
        item_description: "hfjhbkjkjkjkklklkllk",
        item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fsiu-mai-shumai-steamed-dumplings%2F&psig=AOvVaw2uA49BFr7nEmkbi-JiC8kt&ust=1683796061177000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCn6KGz6v4CFQAAAAAdAAAAABAJ",
        item_price: 200,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: true,
        spicy: false,
        allergens: ["Gluten", "Dairy"],
        remaining: 20,
        calorie: 300,
        cheffSpecial: false,
        category: "starters",
        created_at: "2022-03-02T12:00:00.000Z",
        updated_at: "2022-03-02T12:00:00.000Z"
      },
      {
        item_name: "hot pot",
        item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
        item_image: "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_cut_750x400_39.webp",
        item_price: 300,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 15,
        calorie: 130,
        cheffSpecial: false,
        category: "main course",
        created_at: "2022-03-03T15:30:00.000Z",
        updated_at: "2022-03-03T15:30:00.000Z"
      },
      {
        item_name: "lobster tails",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.coastalseafoods.com/Assets/coastal-seafood-daily-specials.jpg",
        item_price: 160,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 220,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      },
{ item_name: "Wonton",
        item_description: "Creamy risotto with lobster meat",
        item_image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Frasamalaysia.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fchicken_wontons_thumb.jpg&tbnid=ts_7C6O03u8xnM&vet=12ahUKEwjs-7iMtOr-AhU45XMBHfWzDaEQMygAegUIARCFAg..i&imgrefurl=https%3A%2F%2Frasamalaysia.com%2Fchicken-wontons%2F&docid=VdK2BZjodTAPDM&w=600&h=600&q=chicken%20wonton&ved=2ahUKEwjs-7iMtOr-AhU45XMBHfWzDaEQMygAegUIARCFAg",
        item_price: 35,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: true,
        allergens: ["Shellfish", "Dairy"],
        remaining: 8, 
        calorie: 75,
        cheffSpecial: true,
        category: "starters"
},
{
        item_name: "garlic prawns",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fgarlic-prawns-shrimp%2F&psig=AOvVaw2Gk2eLM-CoeFRr6LBFWrlV&ust=1683796779803000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJC3y_i16v4CFQAAAAAdAAAAABAE",
        item_price: 160,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 200,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      }, {
        item_name: "china delight",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chinadelightparkville.com%2F&psig=AOvVaw0CfsyAtiDq8pnxFXNI35Gy&ust=1683796841604000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjwipa26v4CFQAAAAAdAAAAABAe",
        item_price: 160,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 250,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      }
    ]
  },







{
    restaurant_name: "Taj mahal palace",
    city: "Mumbai",
    address: "Unit3 lane road, Bandra east, Mumbai",
    image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/12/15/Pictures/_9f2b6346-ffd3-11e8-9457-b1b429387a4e.jpg",
    phone_number: "555-5678",
    cuisines: [, "seafood", "italian"],
    ambience: ["outdoor seating", "family friendly"],
    reviews: [
      {
        reviewer_name: "Alice Lee",
        review_text: "The seafood was so fresh!",
        rating: 5
      },
      {
        reviewer_name: "Bob Chen",
        review_text: "The service was top-notch!",
        rating: 4
      }
    ],
    menu_items: [
      {
        item_name: "gnocchi",
        item_description: "ghhhgjjjjjjjjvghhhhhhhhhhhhhhhhjj",
        item_image: "https://www.chefspencil.com/wp-content/uploads/Gnocchi-1.jpg.webp",
        item_price: 300,
        item_stripe_price: "price_1NKH01SJv6spOPlPFvGPdjIW",
        vegetarian: false,
        spicy: true,
        remaining: 40,
        calorie: 75,
        cheffSpecial: true,
        category: "starters",
        created_at: "2022-03-02T12:00:00.000Z",
        updated_at: "2022-03-02T12:00:00.000Z"
      },
      {
        item_name: "ribollita",
        item_description: "Raw tuna with avocado and citrus",
        item_image: "https://www.chefspencil.com/wp-content/uploads/Ribollita.jpg.webp",
        item_price: 350,
        price: "price_1NKH2VSJv6spOPlPYL7h7Cji",
        vegetarian: true,
        spicy: false,
        allergens: ["Fish"],
        remaining: 10,
        calorie: 80,
        cheffSpecial: true,
        category: "starters"
      },
      {
        item_name: "bagna cauda",  
        item_description: "Creamy risotto with lobster meat",
        item_image: "https://www.chefspencil.com/wp-content/uploads/Bagna-cauda.jpg.webp",
        item_price: 200,
        price: "price_1NKklTSJv6spOPlP39SwvKgH",
        vegetarian: false,
        spicy: false,
        allergens: ["Shellfish", "Dairy"],
        remaining: 8,
        calorie: 150,
        cheffSpecial: false,
        category: "main course"
      },
      {
        item_name: "Polenta",
        item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
        item_image: "https://www.seriouseats.com/thmb/ILLeyKORbTnz3DsUKRrEoLSDJjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg",
        item_price: 300,
        price: "price_1NKksmSJv6spOPlP5A0NK2AL",
        vegetarian: false,      
        spicy: true,
        allergens: ["Gluten"],
        remaining: 10,
        calorie: 200,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-01T18:30:00.000Z",
        updated_at: "2022-03-01T18:30:00.000Z"
      },
      {
        item_name: "pasta",
        item_description: "hfjhbkjkjkjkklklkllk",
        item_image: "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg",
        item_price: 200,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: true,
        spicy: false,
        allergens: ["Gluten", "Dairy"],
        remaining: 20,
        calorie: 250,
        cheffSpecial: false,
        category: "starters",
        created_at: "2022-03-02T12:00:00.000Z",
        updated_at: "2022-03-02T12:00:00.000Z"
      },
      {
        item_name: "sphagetti with clams and garlic",
        item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
        item_image: "https://www.foodandwine.com/thmb/aBJSH_AZq5Go7VCdtk3u1MmJJfg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201002-r-spaghetti-clams-garlic-191079f02ac24cc1aefa05f5b921273b.jpg",
        item_price: 300,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 15,
        calorie: 200,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-03T15:30:00.000Z",
        updated_at: "2022-03-03T15:30:00.000Z"
      },
      {
        item_name: "langoustines alla busara",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.foodandwine.com/thmb/RVKpUtXnBmURqq8Yk-ufccF9xdQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/langoustines-alla-busara-XL-RECIPE0916-14e38dd9b4ed4db7837177ea655f11ff.jpg",
        item_price: 160,
        price: "price_1NKkvJSJv6spOPlP5NL7nbMH",
        vegetarian: true,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 80,
        cheffSpecial: false,
        category: "starters",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      },
{ item_name: "maine style lobster rolls",
        item_description: "Creamy risotto with lobster meat",
        item_image: "https://www.simplyrecipes.com/thmb/sGLLVhhk2WcGYQHOHPpSKgUEomA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__07__New-England-Lobster-Rolls-LEAD-3b-66e6d533de5643f5b00f40aa9e9c8251.jpg",
        item_price: 35,
        price: "price_1NKkxASJv6spOPlPvWCJbszh",
        vegetarian: false,
        spicy: true,
        allergens: ["Shellfish", "Dairy"],
        remaining: 8,
        calorie: 20,
        cheffSpecial: true,
        category: "starters"
},
{
        item_name: "garlic prawns",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.foodandwine.com/thmb/4TZj0NWKrVhE2DNDOJOs8gpudrM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/maine-style-lobster-rolls-ft-RECIPE0718_1-1ef66855601d4248a2499945e08244b7.jpg",
        item_price: 160,
        price: "price_1NKl23SJv6spOPlP0zcNI66m",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 100,
        cheffSpecial: false,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      }, {
        item_name: "chutney fish",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.foodandwine.com/thmb/fQVMR6Csaho8UG8AlX1OnDMTgdw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chutney-fish-FT-RECIPE0321-2b2d51daaba34c999f693ec58c3dfd34.jpg",
        item_price: 160,
        price: "price_1NKl41SJv6spOPlP7ORbYCkxhdc",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 100,
        cheffSpecial: false,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      }
    ]
  },







{
    restaurant_name: "Estella",
    city: "Mumbai",
    address: "Unit3 lane road, Bandra east, Mumbai",
    image: "https://assets.gqindia.com/photos/62a9d3ec3e8cdc9b632eb2ab/master/w_1600,c_limit/Estella.jpg",
    phone_number: "555-5678",
    cuisines: [, "seafood", "italian"],
    ambience: ["outdoor seating", "family friendly"],
    reviews: [
      {
        reviewer_name: "Alice Lee",
        review_text: "The seafood was so fresh!",
        rating: 5
      },
      {
        reviewer_name: "Bob Chen",
        review_text: "The service was top-notch!",
        rating: 4
      }
    ],
    menu_items: [
      {
        item_name: "gnocchi",
        item_description: "ghhhgjjjjjjjjvghhhhhhhhhhhhhhhhjj",
        item_image: "https://www.chefspencil.com/wp-content/uploads/Gnocchi-1.jpg.webp",
        item_price: 300,
        price: "price_1NKH01SJv6spOPlPFvGPdjIW",
        vegetarian: false,
        spicy: true,
        remaining: 40,
        calorie: 450,
        cheffSpecial: true,
        category: "starters",
        created_at: "2022-03-02T12:00:00.000Z",
        updated_at: "2022-03-02T12:00:00.000Z"
      },
      {
        item_name: "ribollita",
        item_description: "Raw tuna with avocado and citrus",
        item_image: "https://www.chefspencil.com/wp-content/uploads/Ribollita.jpg.webp",
        item_price: 350,
        price: "price_1NKH2VSJv6spOPlPYL7h7Cji",
        vegetarian: true,
        spicy: false,
        allergens: ["Fish"],
        remaining: 10,
        calorie: 350,
        cheffSpecial: true,
        category: "starters"
      },
      {
        item_name: "bagna cauda",
        item_description: "Creamy risotto with lobster meat",
        item_image: "https://www.chefspencil.com/wp-content/uploads/Bagna-cauda.jpg.webp",
        item_price: 200,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Shellfish", "Dairy"],
        remaining: 8,
        calorie: 150,
        cheffSpecial: false,
        category: "main course"
      },
      {
        item_name: "Polenta",
        item_description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese. Served with spaghetti marinara.",
        item_image: "https://www.seriouseats.com/thmb/ILLeyKORbTnz3DsUKRrEoLSDJjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg",
        item_price: 300,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: true,
        allergens: ["Gluten"],
        remaining: 10,
        calorie: 270,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-01T18:30:00.000Z",
        updated_at: "2022-03-01T18:30:00.000Z"
      },
      {
        item_name: "pasta",
        item_description: "hfjhbkjkjkjkklklkllk",
        item_image: "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg",
        item_price: 200,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: true,
        spicy: false,
        allergens: ["Gluten", "Dairy"],
        remaining: 20,
        calorie: 180,
        cheffSpecial: false,
        category: "starters",
        created_at: "2022-03-02T12:00:00.000Z",
        updated_at: "2022-03-02T12:00:00.000Z"
      },
      {
        item_name: "sphagetti with clams and garlic",
        item_description: "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cheese.",
        item_image: "https://www.foodandwine.com/thmb/aBJSH_AZq5Go7VCdtk3u1MmJJfg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201002-r-spaghetti-clams-garlic-191079f02ac24cc1aefa05f5b921273b.jpg",
        item_price: 300,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 15,
        calorie: 280,
        cheffSpecial: true,
        category: "main course",
        created_at: "2022-03-03T15:30:00.000Z",
        updated_at: "2022-03-03T15:30:00.000Z"
      },
      {
        item_name: "langoustines alla busara",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.foodandwine.com/thmb/RVKpUtXnBmURqq8Yk-ufccF9xdQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/langoustines-alla-busara-XL-RECIPE0916-14e38dd9b4ed4db7837177ea655f11ff.jpg",
        item_price: 160,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: true,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 150,
        cheffSpecial: false,
        category: "starters",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      },
{ item_name: "maine style lobster rolls",
        item_description: "Creamy risotto with lobster meat",
        item_image: "https://www.simplyrecipes.com/thmb/sGLLVhhk2WcGYQHOHPpSKgUEomA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__07__New-England-Lobster-Rolls-LEAD-3b-66e6d533de5643f5b00f40aa9e9c8251.jpg",
        item_price: 35,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: true,
        allergens: ["Shellfish", "Dairy"],
        remaining: 8,
        calorie: 25,
        cheffSpecial: true,
        category: "starters"
},
{
        item_name: "garlic prawns",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.foodandwine.com/thmb/4TZj0NWKrVhE2DNDOJOs8gpudrM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/maine-style-lobster-rolls-ft-RECIPE0718_1-1ef66855601d4248a2499945e08244b7.jpg",
        item_price: 160,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 100,
        cheffSpecial: false,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      }, {
        item_name: "chutney fish",
        item_description: "Penne pasta tossed in a creamy tomato sauce with a touch of vodka.",
        item_image: "https://www.foodandwine.com/thmb/fQVMR6Csaho8UG8AlX1OnDMTgdw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chutney-fish-FT-RECIPE0321-2b2d51daaba34c999f693ec58c3dfd34.jpg",
        item_price: 160,
        price: "price_1NJJWzSJv6spOPlPjEtcYLEn",
        vegetarian: false,
        spicy: false,
        allergens: ["Dairy"],
        remaining: 8,
        calorie: 120,
        cheffSpecial: false,
        category: "main course",
        created_at: "2022-03-04T19:00:00.000Z",
        updated_at: "2022-03-04T19:00:00.000Z"
      }
    ]
  },
  ]

export default restaurants


