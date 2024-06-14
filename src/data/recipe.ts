import { Recipe } from '../app/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '892c3a24-f219-445c-9dfb-20166fb0a1c5',
    title: 'Simple Omelette Recipe',
    description:
      'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    ingredients: [
      '2-3 large eggs',
      'Salt, to taste',
      'Pepper, to taste',
      '1 tablespoon of butter or oil',
      'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    ],
    instructions: [
      {
        title: 'Beat the eggs',
        description:
          'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
      },
      {
        title: 'Heat the pan',
        description:
          'Place a non-stick frying pan over medium heat and add butter or oil.',
      },
      {
        title: 'Cook the omelette',
        description:
          'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
      },
      {
        title: 'Add fillings (optional)',
        description:
          'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
      },
      {
        title: 'Fold and serve',
        description:
          'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
      },
      {
        title: 'Enjoy',
        description: 'Serve hot, with additional salt and pepper if needed.',
      },
    ],
    nutrition: { calories: 277, carbs: 0, fat: 22, protein: 20 },
    preparationTime: { cooking: 5, preparation: 5, total: 10 },
  },
  {
    id: '82c45a64-8383-4c8d-9d8a-32f16666d1c5',
    title: 'Classic Spaghetti Carbonara',
    description:
      'A simple yet decadent Italian pasta dish made with eggs, cheese, pancetta or guanciale, and black pepper.',
    ingredients: [
      '12 oz. dried spaghetti',
      '3 large eggs',
      '1 cup grated Pecorino Romano cheese',
      '1/2 cup grated Parmesan cheese',
      '4 oz. pancetta or guanciale, diced',
      'Freshly ground black pepper',
      'Salt (to taste)',
    ],
    instructions: [
      {
        title: 'Cook the spaghetti',
        description:
          'Bring a large pot of salted water to a boil. Cook the spaghetti according to package directions until al dente.',
      },
      {
        title: 'Prepare the sauce',
        description:
          'While the pasta cooks, whisk the eggs, Pecorino Romano, Parmesan, and a generous amount of black pepper in a bowl.',
      },
      {
        title: 'Cook the pancetta',
        description:
          'In a separate pan, cook the pancetta or guanciale over medium heat until it is crisp and rendered.',
      },
      {
        title: 'Combine',
        description:
          'Drain the spaghetti, reserving some pasta water. Add the spaghetti to the pan with the pancetta and toss. Remove from heat.',
      },
      {
        title: 'Temper and toss',
        description:
          'Gradually add some of the reserved pasta water to the egg mixture, whisking constantly to prevent curdling. Pour the tempered egg mixture into the pasta and toss vigorously until a creamy sauce forms.',
      },
      {
        title: 'Serve',
        description:
          'Serve immediately with additional cheese and black pepper.',
      },
    ],
    nutrition: { calories: 600, carbs: 70, fat: 30, protein: 25 },
    preparationTime: { preparation: 10, cooking: 10, total: 20 },
  },
  {
    id: '03446a4e-9a95-468f-9642-75116f55a1c5',
    title: 'Chicken Tikka Masala',
    description:
      'A flavorful Indian curry with tender chicken pieces in a creamy tomato-based sauce, seasoned with aromatic spices.',
    ingredients: [
      '1 lb. boneless, skinless chicken breasts, cut into cubes',
      '1 cup plain yogurt',
      '1 tbsp. garam masala',
      '1 tbsp. turmeric powder',
      '1 tbsp. chili powder',
      '1 tbsp. ground cumin',
      '1 tbsp. ground coriander',
      '2 tbsp. vegetable oil',
      '1 onion, chopped',
      '3 cloves garlic, minced',
      '1 inch piece ginger, grated',
      '1 (14 oz.) can diced tomatoes',
      '1 cup heavy cream',
      'Fresh cilantro, chopped (for garnish)',
    ],
    instructions: [
      {
        title: 'Marinate the chicken',
        description:
          'In a bowl, combine the chicken, yogurt, garam masala, turmeric, chili powder, cumin, and coriander. Let it marinate for at least 30 minutes.',
      },
      {
        title: 'Cook the chicken',
        description:
          'Heat the oil in a large skillet over medium heat. Add the chicken and cook until browned on all sides. Remove from the skillet and set aside.',
      },
      {
        title: 'Sauté aromatics',
        description:
          'In the same skillet, add the onion, garlic, and ginger. Cook until the onion is softened.',
      },
      {
        title: 'Add tomatoes and simmer',
        description:
          'Stir in the diced tomatoes and bring to a simmer. Cook for 10-15 minutes, or until the sauce thickens.',
      },
      {
        title: 'Finish the sauce',
        description:
          'Add the cooked chicken back to the skillet, along with the heavy cream. Simmer for another 5 minutes.',
      },
      {
        title: 'Garnish and serve',
        description: 'Garnish with fresh cilantro and serve with rice or naan.',
      },
    ],
    nutrition: { calories: 550, carbs: 30, fat: 35, protein: 35 },
    preparationTime: { preparation: 20, cooking: 25, total: 45 },
  },
  {
    id: '0f12c354-9783-44d4-99fc-13168cb0a1c5',
    title: 'Beef Stir-Fry',
    description:
      'A quick and easy weeknight meal with tender strips of beef and colorful vegetables in a savory sauce.',
    ingredients: [
      '1 lb. flank steak, thinly sliced',
      '2 tbsp. soy sauce',
      '1 tbsp. cornstarch',
      '1 tbsp. vegetable oil',
      '1 onion, sliced',
      '2 cloves garlic, minced',
      '1 red bell pepper, sliced',
      '1 green bell pepper, sliced',
      '1/2 cup broccoli florets',
      '1/2 cup sliced mushrooms',
      '1/4 cup stir-fry sauce (store-bought or homemade)',
      'Sesame seeds and green onions (for garnish)',
    ],
    instructions: [
      {
        title: 'Marinate beef',
        description:
          'In a bowl, combine the beef, soy sauce, and cornstarch. Let it marinate for 15 minutes.',
      },
      {
        title: 'Stir-fry beef',
        description:
          'Heat the oil in a wok or large skillet over high heat. Add the beef and stir-fry until browned. Remove and set aside.',
      },
      {
        title: 'Sauté vegetables',
        description:
          'Add the onion, garlic, and bell peppers to the skillet. Stir-fry until softened.',
      },
      {
        title: 'Add remaining vegetables',
        description:
          'Add the broccoli and mushrooms. Stir-fry until crisp-tender.',
      },
      {
        title: 'Return beef and sauce',
        description:
          'Return the beef to the skillet and add the stir-fry sauce. Toss until everything is heated through.',
      },
      {
        title: 'Garnish and serve',
        description:
          'Garnish with sesame seeds and green onions. Serve over rice or noodles.',
      },
    ],
    nutrition: { calories: 400, carbs: 20, fat: 25, protein: 30 },
    preparationTime: { preparation: 15, cooking: 15, total: 30 },
  },
  {
    id: '957d8c24-d219-445c-8dbb-21176fb0a1c5',
    title: 'Greek Salad',
    description:
      'A refreshing Mediterranean salad with cucumbers, tomatoes, olives, feta cheese, and a simple vinaigrette.',
    ingredients: [
      '1 cucumber, chopped',
      '2 tomatoes, chopped',
      '1/2 red onion, thinly sliced',
      '1/2 cup Kalamata olives, pitted',
      '1/2 cup crumbled feta cheese',
      '2 tbsp. olive oil',
      '1 tbsp. red wine vinegar',
      '1/2 tsp. dried oregano',
      'Salt and pepper (to taste)',
    ],
    instructions: [
      {
        title: 'Prepare vegetables',
        description:
          'Chop the cucumber, tomatoes, and red onion. Pit the olives.',
      },
      {
        title: 'Make vinaigrette',
        description:
          'In a small bowl, whisk together the olive oil, red wine vinegar, oregano, salt, and pepper.',
      },
      {
        title: 'Assemble salad',
        description:
          'Combine the chopped vegetables, olives, and feta cheese in a large bowl.',
      },
      {
        title: 'Toss and serve',
        description:
          'Drizzle the vinaigrette over the salad and toss to coat. Serve immediately or chill for later.',
      },
    ],
    nutrition: { calories: 250, carbs: 10, fat: 20, protein: 5 },
    preparationTime: { preparation: 10, cooking: 0, total: 10 },
  },
  {
    id: 'f293212e-6483-4c4d-928a-32f19876a1c5',
    title: 'Chicken Caesar Salad',
    description:
      'A classic salad with grilled or baked chicken, romaine lettuce, croutons, Parmesan cheese, and creamy Caesar dressing.',
    ingredients: [
      '2 boneless, skinless chicken breasts',
      '1 head romaine lettuce, chopped',
      '1/2 cup croutons',
      '1/4 cup grated Parmesan cheese',
      'Caesar dressing (store-bought or homemade)',
    ],
    instructions: [
      {
        title: 'Cook chicken',
        description:
          'Grill or bake the chicken breasts until cooked through. Slice or shred the chicken.',
      },
      {
        title: 'Prepare salad',
        description:
          'In a large bowl, combine the romaine lettuce, croutons, and Parmesan cheese.',
      },
      {
        title: 'Add chicken and dressing',
        description:
          'Add the cooked chicken and Caesar dressing to the salad. Toss to coat.',
      },
      { title: 'Serve', description: 'Serve immediately.' },
    ],
    nutrition: { calories: 350, carbs: 15, fat: 20, protein: 30 },
    preparationTime: { preparation: 10, cooking: 20, total: 30 },
  },
  {
    id: '2a56f892-a219-445c-9d8b-20161fb0a1c5',
    title: 'Mushroom Risotto',
    description:
      'A creamy and comforting Italian rice dish made with Arborio rice, mushrooms, broth, and Parmesan cheese.',
    ingredients: [
      '1 tbsp. olive oil',
      '1 shallot, minced',
      '8 oz. sliced mushrooms',
      '1 cup Arborio rice',
      '1/2 cup dry white wine',
      '4 cups vegetable or chicken broth',
      '1/2 cup grated Parmesan cheese',
      'Salt and pepper (to taste)',
    ],
    instructions: [
      {
        title: 'Sauté aromatics',
        description:
          'Heat the olive oil in a large saucepan over medium heat. Add the shallot and cook until softened. Add the mushrooms and cook until browned.',
      },
      {
        title: 'Toast rice',
        description:
          'Add the Arborio rice and stir to coat with the oil. Cook for 1-2 minutes, until the rice is translucent.',
      },
      {
        title: 'Add wine',
        description:
          'Pour in the white wine and stir until it is absorbed by the rice.',
      },
      {
        title: 'Add broth gradually',
        description:
          'Warm the broth in a separate saucepan. Ladle the broth into the rice, 1/2 cup at a time, stirring constantly and waiting until each addition is absorbed before adding more.',
      },
      {
        title: 'Finish with cheese',
        description:
          'When the rice is creamy and al dente (about 20 minutes), stir in the Parmesan cheese, salt, and pepper. Serve immediately.',
      },
    ],
    nutrition: { calories: 450, carbs: 60, fat: 15, protein: 10 },
    preparationTime: { preparation: 10, cooking: 30, total: 40 },
  },
  {
    id: '768e3a24-f419-445c-9dfb-20169fb0a1c5',
    title: 'French Onion Soup',
    description:
      'A classic French soup made with caramelized onions, beef broth, and topped with crusty bread and melted Gruyère cheese.',
    ingredients: [
      '4 large yellow onions, thinly sliced',
      '2 tbsp. butter',
      '1 tbsp. olive oil',
      '1 tsp. sugar',
      '4 cups beef broth',
      '1/2 cup dry sherry (optional)',
      'Salt and pepper (to taste)',
      '4 slices baguette',
      '1 cup grated Gruyère cheese',
    ],
    instructions: [
      {
        title: 'Caramelize onions',
        description:
          'In a large pot or Dutch oven, melt the butter and olive oil over medium heat. Add the onions and cook, stirring occasionally, until deeply caramelized (about 45 minutes). Sprinkle with sugar towards the end to help with browning.',
      },
      {
        title: 'Add broth and simmer',
        description:
          'Add the beef broth and sherry (if using). Bring to a simmer and cook for 30 minutes. Season with salt and pepper.',
      },
      {
        title: 'Prepare bowls',
        description:
          'Preheat the broiler. Ladle the soup into oven-safe bowls.',
      },
      {
        title: 'Top and broil',
        description:
          'Top each bowl with a slice of baguette and a generous amount of Gruyère cheese. Broil until the cheese is melted and bubbly.',
      },
      { title: 'Serve', description: 'Serve immediately.' },
    ],
    nutrition: { calories: 400, carbs: 30, fat: 25, protein: 15 },
    preparationTime: { preparation: 15, cooking: 75, total: 90 },
  },
];
