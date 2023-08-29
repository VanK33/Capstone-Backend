/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("procedures").del();
  await knex("procedures").insert([
    {
      id: 1,
      procedure_steps:
        "Make the marinade: Zest and juice one lemon, add olive oil, garlic, Italian seasoning, red pepper flakes, and parsley. Whisk to combine.",
      recipes_id: 1,
    },
    {
      id: 2,
      procedure_steps: "Slice the chicken breasts into thin cutlets.",
      recipes_id: 1,
    },
    {
      id: 3,
      procedure_steps:
        "Pat the chicken dry, season with salt and pepper, then coat in the marinade. Refrigerate for 30 minutes to 2 hours.",
      recipes_id: 1,
    },
    {
      id: 4,
      procedure_steps:
        "Heat olive oil in a large skillet over medium heat, sear the chicken for about 4 minutes on each side until golden and nearly cooked through.",
      recipes_id: 1,
    },
    {
      id: 5,
      procedure_steps:
        "Rest the chicken under foil for 5 minutes to reach 165°F internal temperature.",
      recipes_id: 1,
    },
    {
      id: 6,
      procedure_steps:
        "Slice the remaining lemon and garnish the chicken with chopped parsley and lemon slices.",
      recipes_id: 1,
    },
    {
      id: 7,
      procedure_steps: "Preheat oven to 450 degrees F.",
      recipes_id: 2,
    },
    {
      id: 8,
      procedure_steps:
        "In a large mixing bowl, combine tomatoes and carrots with olive oil, salt, and pepper. Toss to coat.",
      recipes_id: 2,
    },
    {
      id: 9,
      procedure_steps:
        "Spread the mixture on a baking sheet and roast for about 30 minutes.",
      recipes_id: 2,
    },
    {
      id: 10,
      procedure_steps:
        "Let the roasted tomatoes and carrots cool for 10 minutes, then blend in a food processor with a little water.",
      recipes_id: 2,
    },
    {
      id: 11,
      procedure_steps:
        "In a cooking pot, heat olive oil and cook onions and garlic until golden.",
      recipes_id: 2,
    },
    {
      id: 12,
      procedure_steps:
        "Add the roasted tomato mixture, crushed tomatoes, water, basil, thyme, and spices to the pot. Season with salt and pepper.",
      recipes_id: 2,
    },
    {
      id: 13,
      procedure_steps: "Bring to a boil, then simmer for about 20 minutes.",
      recipes_id: 2,
    },
    {
      id: 14,
      procedure_steps:
        "Remove thyme sprigs and transfer the soup to serving bowls.",
      recipes_id: 2,
    },
    {
      id: 15,
      procedure_steps:
        "Optional: Add a splash of lime juice and drizzle with extra olive oil before serving.",
      recipes_id: 2,
    },
    {
      id: 16,
      procedure_steps:
        "In a food processor, combine chickpeas and minced garlic, puree until a smooth, powder-like mixture forms.",
      recipes_id: 3,
    },
    {
      id: 17,
      procedure_steps:
        "While the processor is running, add ice cubes, tahini, salt, and lemon juice. Blend for about 4 minutes.",
      recipes_id: 3,
    },
    {
      id: 18,
      procedure_steps:
        "If the consistency is too thick, slowly add hot water while running the processor until you reach the desired silky smooth consistency.",
      recipes_id: 3,
    },
    {
      id: 19,
      procedure_steps:
        "Transfer the hummus to a serving bowl, drizzle with Early Harvest EVOO, and add a few chickpeas in the middle if desired.",
      recipes_id: 3,
    },
    {
      id: 20,
      procedure_steps: "Sprinkle sumac on top for added flavor.",
      recipes_id: 3,
    },
    {
      id: 21,
      procedure_steps:
        "Enjoy the hummus with warm pita wedges and your favorite veggies.",
      recipes_id: 3,
    },
    {
      id: 22,
      procedure_steps:
        "Place zucchini in a large bowl, drizzle with 3 tablespoons of extra virgin olive oil, and sprinkle with cumin. Toss to combine.",
      recipes_id: 4,
    },
    {
      id: 23,
      procedure_steps:
        "Heat a grill or griddle until hot, grill zucchini in batches for about 4 minutes, turning a few times until cooked through and charred.",
      recipes_id: 4,
    },
    {
      id: 24,
      procedure_steps:
        "Return grilled zucchini to the bowl, add lemon juice, fresh garlic, salt, and pepper. Toss to combine.",
      recipes_id: 4,
    },
    {
      id: 25,
      procedure_steps: "Add fresh herbs and toss gently again.",
      recipes_id: 4,
    },
    {
      id: 26,
      procedure_steps:
        "Transfer to a serving platter, and if desired, top with a sprinkle of feta or goat cheese.",
      recipes_id: 4,
    },
    {
      id: 27,
      procedure_steps: "Serve at room temperature and enjoy!",
      recipes_id: 4,
    },
    {
      id: 28,
      procedure_steps:
        "Cook the pasta in salted boiling water for about 9 minutes. Reserve some starchy pasta water and drain the pasta.",
      recipes_id: 5,
    },
    {
      id: 29,
      procedure_steps:
        "Cook the shrimp in 1 tablespoon of olive oil for 2-3 minutes on each side until pink. Set the shrimp aside.",
      recipes_id: 5,
    },
    {
      id: 30,
      procedure_steps:
        "In the same pan, add more olive oil if needed, and cook onions, garlic, oregano, and red pepper flakes for 1-2 minutes on medium-low heat.",
      recipes_id: 5,
    },
    {
      id: 31,
      procedure_steps:
        "Add wine to the pan, cook for 1 minute to reduce, then add lemon juice and zest.",
      recipes_id: 5,
    },
    {
      id: 32,
      procedure_steps:
        "Add parsley and tomatoes, toss for 30-40 seconds, season with salt.",
      recipes_id: 5,
    },
    {
      id: 33,
      procedure_steps:
        "Add the cooked pasta to the pan, toss to coat, and use pasta water if needed.",
      recipes_id: 5,
    },
    {
      id: 34,
      procedure_steps:
        "Add the cooked shrimp and warm briefly (about 30 seconds), then remove from heat.",
      recipes_id: 5,
    },
    {
      id: 35,
      procedure_steps:
        "Finish with grated parmesan cheese, more red pepper flakes or Aleppo pepper.",
      recipes_id: 5,
    },
    {
      id: 36,
      procedure_steps: "Serve immediately and enjoy!",
      recipes_id: 5,
    },
    {
      id: 37,
      procedure_steps: "Slice calamari tubes into ¾-inch thick rings.",
      recipes_id: 6,
    },
    {
      id: 38,
      procedure_steps:
        "Stir 1 teaspoon kosher salt in ½ cup milk in a medium bowl.",
      recipes_id: 6,
    },
    {
      id: 39,
      procedure_steps:
        "Add calamari rings to the milk mixture and refrigerate for 30 minutes.",
      recipes_id: 6,
    },
    {
      id: 40,
      procedure_steps:
        "Whisk together flour, cornstarch, baking powder, oregano, black pepper, and cayenne in a large bowl.",
      recipes_id: 6,
    },
    {
      id: 41,
      procedure_steps:
        "Take a portion of calamari rings, shake off excess milk, and toss in the flour mixture until coated. Repeat with the rest of the calamari.",
      recipes_id: 6,
    },
    {
      id: 42,
      procedure_steps:
        "Heat grape seed oil in a small pot to 350-365 degrees F.",
      recipes_id: 6,
    },
    {
      id: 43,
      procedure_steps:
        "Fry calamari for about 3 minutes or until golden brown.",
      recipes_id: 6,
    },
    {
      id: 44,
      procedure_steps:
        "Remove the fried calamari, season with kosher salt, and keep warm in a low oven.",
      recipes_id: 6,
    },
    {
      id: 45,
      procedure_steps: "Repeat until all the calamari is fried.",
      recipes_id: 6,
    },
    {
      id: 46,
      procedure_steps:
        "Transfer the fried calamari to a serving plate and finish with a squeeze of lemon juice.",
      recipes_id: 6,
    },
    {
      id: 47,
      procedure_steps:
        "Pat the shrimp dry and season with kosher salt and 1 teaspoon of red pepper flakes.",
      recipes_id: 7,
    },
    {
      id: 48,
      procedure_steps:
        "Heat 2 tablespoons of olive oil in a large skillet, add shrimp and cook briefly. Transfer shrimp and juices to a plate.",
      recipes_id: 7,
    },
    {
      id: 49,
      procedure_steps:
        "In the same skillet, heat another 3 tablespoons of olive oil and cook onions and garlic until softened and lightly golden.",
      recipes_id: 7,
    },
    {
      id: 50,
      procedure_steps: "Add white wine and cook until reduced by half.",
      recipes_id: 7,
    },
    {
      id: 51,
      procedure_steps:
        "Stir in diced tomatoes and tomato paste, season with salt, black pepper, oregano, and remaining red pepper flakes.",
      recipes_id: 7,
    },
    {
      id: 52,
      procedure_steps: "Simmer the sauce for about 10 minutes until thickened.",
      recipes_id: 7,
    },
    {
      id: 53,
      procedure_steps:
        "Return shrimp to the skillet and cook for 1 more minute until shrimp is warmed through and pink.",
      recipes_id: 7,
    },
    {
      id: 54,
      procedure_steps:
        "Finish with fresh parsley and serve immediately with crusty bread, pasta, or rice.",
      recipes_id: 7,
    },
    {
      id: 55,
      procedure_steps:
        "Cook the pasta in salted water according to package instructions (about 8 minutes). Drain and let it cool slightly.",
      recipes_id: 8,
    },
    {
      id: 56,
      procedure_steps:
        "Make the dressing: In a large bowl, mix lemon juice, zest, red wine vinegar, garlic, oregano, salt, and black pepper. While whisking, drizzle in ¼ cup of extra virgin olive oil.",
      recipes_id: 8,
    },
    {
      id: 57,
      procedure_steps:
        "Add the pasta, cucumber, bell pepper, tomatoes, shallots, parsley, capers, and Kalamata olives to the dressing. Toss to coat.",
      recipes_id: 8,
    },
    {
      id: 58,
      procedure_steps: "Add feta and toss gently.",
      recipes_id: 8,
    },
    {
      id: 59,
      procedure_steps:
        "Chill in the refrigerator for 30 minutes to 24 hours for the best flavor.",
      recipes_id: 8,
    },
    {
      id: 60,
      procedure_steps:
        "Give the salad a final toss and serve cold or at room temperature.",
      recipes_id: 8,
    },
    {
      id: 61,
      procedure_steps:
        "Marinate chicken tenders in a mixture of marinade ingredients. Cover and refrigerate for 30 minutes (or overnight).",
      recipes_id: 9,
    },
    {
      id: 62,
      procedure_steps:
        "Prepare Tzatziki sauce and other gyro fixings while the chicken marinates.",
      recipes_id: 9,
    },
    {
      id: 63,
      procedure_steps:
        "Heat 1 tablespoon of olive oil in a non-stick skillet over medium-high heat. Add chicken tenders and cook for 5 minutes on each side until browned and cooked through.",
      recipes_id: 9,
    },
    {
      id: 64,
      procedure_steps:
        "Warm up pita bread, spread Tzatziki sauce, add chicken, and top with tomato, cucumber, green pepper, red onion, and olives as desired.",
      recipes_id: 9,
    },
    {
      id: 65,
      procedure_steps:
        "Wrap up the pita and enjoy your delicious chicken gyro!",
      recipes_id: 9,
    },
    {
      id: 66,
      procedure_steps:
        "Pat the chicken dry and season with Kosher salt and black pepper on both sides.",
      recipes_id: 10,
    },
    {
      id: 67,
      procedure_steps:
        "Heat 2 tablespoons of olive oil in a Dutch oven over medium-high heat. Brown the chicken on both sides (about 6 to 8 minutes). Set the chicken aside on a plate.",
      recipes_id: 10,
    },
    {
      id: 68,
      procedure_steps:
        "In the same Dutch oven, add onions, garlic, carrots, bell peppers, zucchini, and potatoes. Season with salt, black pepper, and spices. Cook over medium-high heat until the veggies soften and gain some char (about 7 to 8 minutes).",
      recipes_id: 10,
    },
    {
      id: 69,
      procedure_steps:
        "Add tomatoes and break them up with a wooden spoon. Pour in chicken broth and add thyme springs. Bring to a boil.",
      recipes_id: 10,
    },
    {
      id: 70,
      procedure_steps:
        "Add the chicken back to the pot, cook for 5 minutes on high heat, then lower the heat to medium-low, cover partially, and simmer for 30 minutes.",
      recipes_id: 10,
    },
    {
      id: 71,
      procedure_steps:
        "Turn off the heat, remove thyme sprigs, and stir in white wine vinegar and fresh parsley.",
      recipes_id: 10,
    },
    {
      id: 72,
      procedure_steps: "Serve and enjoy your flavorful chicken stew!",
      recipes_id: 10,
    },
    {
      id: 73,
      procedure_steps:
        "Preheat the oven to 200 degrees F to keep the chicken warm.",
      recipes_id: 11,
    },
    {
      id: 74,
      procedure_steps:
        "Pat the chicken breast pieces dry and season with salt and black pepper. Lightly coat with flour, shaking off excess.",
      recipes_id: 11,
    },
    {
      id: 75,
      procedure_steps:
        "In a large cast iron skillet, heat extra virgin olive oil over medium-high heat. Cook the chicken for 3 minutes on each side in batches, not crowding the pan.",
      recipes_id: 11,
    },
    {
      id: 76,
      procedure_steps:
        "Keep the cooked chicken warm in the oven while you finish cooking.",
      recipes_id: 11,
    },
    {
      id: 77,
      procedure_steps:
        "In the same skillet, add more olive oil and ghee (or butter). Stir in lemon juice, wine, and capers. Bring the sauce to a boil, scraping off any browned bits.",
      recipes_id: 11,
    },
    {
      id: 78,
      procedure_steps:
        "Return the cooked chicken to the skillet with the sauce. Simmer for 4 to 5 minutes, basting the chicken with the sauce.",
      recipes_id: 11,
    },
    {
      id: 79,
      procedure_steps:
        "Remove from heat, garnish with parsley, and serve with plain orzo and your favorite salad.",
      recipes_id: 11,
    },
    {
      id: 80,
      procedure_steps:
        "Boil a large pot of salted water and cook the pasta until al dente. Reserve ½ cup of pasta water before draining.",
      recipes_id: 12,
    },
    {
      id: 81,
      procedure_steps:
        "Pat the chicken dry and slice into small bite-size pieces. Season with salt, black pepper, and dried oregano.",
      recipes_id: 12,
    },
    {
      id: 82,
      procedure_steps:
        "Heat 2 tablespoons of olive oil in a large pan over medium-high heat. Cook the chicken until golden-brown and cooked through (about 7 to 8 minutes).",
      recipes_id: 12,
    },
    {
      id: 83,
      procedure_steps:
        "Add garlic and sun-dried tomatoes to the pan, cook briefly, then add grape tomatoes and artichoke hearts. Toss to combine and reduce heat to medium-low.",
      recipes_id: 12,
    },
    {
      id: 84,
      procedure_steps:
        "In a small bowl, whisk milk, flour, and Parmesan cheese. Pour into the pan and add baby spinach and a little pasta water. Stir to thicken the sauce.",
      recipes_id: 12,
    },
    {
      id: 85,
      procedure_steps: "Add the cooked pasta, mix to combine, and add parsley.",
      recipes_id: 12,
    },
    {
      id: 86,
      procedure_steps: "Serve and enjoy your delicious chicken and pasta dish!",
      recipes_id: 12,
    },
    {
      id: 87,
      procedure_steps:
        "Heat oil in a large pot over medium-high heat. Add onion, bell pepper, and garlic. Cook until tender.",
      recipes_id: 13,
    },
    {
      id: 88,
      procedure_steps:
        "Add turkey and cook until no longer pink, breaking it up with a spoon.",
      recipes_id: 13,
    },
    {
      id: 89,
      procedure_steps:
        "Stir in chili powder, cumin, oregano, salt, cayenne, and black pepper. Cook for 1 minute, stirring constantly.",
      recipes_id: 13,
    },
    {
      id: 90,
      procedure_steps:
        "Add canned tomatoes, beans, broth, and brown sugar. Bring to a boil.",
      recipes_id: 13,
    },
    {
      id: 91,
      procedure_steps:
        "Reduce heat to medium-low and simmer, uncovered, until chili thickens.",
      recipes_id: 13,
    },
    {
      id: 92,
      procedure_steps:
        "Serve topped with shredded cheese, sour cream, and sliced green onions.",
      recipes_id: 13,
    },
    {
      id: 93,
      procedure_steps:
        "In a large pot, cook bacon until crisp. Remove bacon and drain on paper towels, keeping the drippings in the pot.",
      recipes_id: 14,
    },
    {
      id: 94,
      procedure_steps: "Add butter to the pot and melt.",
      recipes_id: 14,
    },
    {
      id: 95,
      procedure_steps:
        "Add onion, celery, and carrot. Cook until tender, then stir in garlic and cook briefly.",
      recipes_id: 14,
    },
    {
      id: 96,
      procedure_steps:
        "Add corn kernels, corn cobs (if using fresh corn), and potatoes.",
      recipes_id: 14,
    },
    {
      id: 97,
      procedure_steps:
        "Pour in broth, milk, salt, thyme, and pepper. Bring to a simmer and cook until potatoes are tender.",
      recipes_id: 14,
    },
    {
      id: 98,
      procedure_steps:
        "Remove corn cobs, then blend 2 cups of the soup mixture until smooth and return to the pot.",
      recipes_id: 14,
    },
    {
      id: 99,
      procedure_steps: "Stir in the cooked bacon and serve hot.",
      recipes_id: 14,
    },
    {
      id: 100,
      procedure_steps:
        "Garnish each bowl with chopped chives and black pepper.",
      recipes_id: 14,
    },
    {
      id: 101,
      procedure_steps:
        "In a large bowl, add chopped cooked chicken, green onions, halved grapes, and celery stalks.",
      recipes_id: 15,
    },
    {
      id: 102,
      procedure_steps: "Add mayonnaise to the bowl.",
      recipes_id: 15,
    },
    {
      id: 103,
      procedure_steps:
        "Add dijon mustard, slivered almonds, lemon juice, salt, and pepper.",
      recipes_id: 15,
    },
    {
      id: 104,
      procedure_steps:
        "Stir until well combined. Cover and chill for at least 30 minutes before serving.",
      recipes_id: 15,
    },
    {
      id: 105,
      procedure_steps:
        "Season with additional salt and pepper to taste, if needed.",
      recipes_id: 15,
    },
    {
      id: 106,
      procedure_steps: "Serve as a sandwich or over a salad.",
      recipes_id: 15,
    },
    {
      id: 107,
      procedure_steps:
        "Combine lime, lemon, and orange juice in a medium mixing bowl. Reserve ½ cup of the juice mixture.",
      recipes_id: 16,
    },
    {
      id: 108,
      procedure_steps:
        "Cut shrimp into ½-inch pieces and mix into the citrus juice. Cover and refrigerate for at least 30 minutes until shrimp turns pink and opaque.",
      recipes_id: 16,
    },
    {
      id: 109,
      procedure_steps:
        "Strain the shrimp, discarding the liquid, and return shrimp to the mixing bowl.",
      recipes_id: 16,
    },
    {
      id: 110,
      procedure_steps:
        "Add tomatoes, red onion, cilantro, jalapeno, and salt to the bowl. Stir to combine.",
      recipes_id: 16,
    },
    {
      id: 111,
      procedure_steps:
        "Stir in the reserved ½ cup juice mixture. Cover and refrigerate for 30 minutes to 4 hours, stirring occasionally.",
      recipes_id: 16,
    },
    {
      id: 112,
      procedure_steps: "Gently stir in avocado just before serving.",
      recipes_id: 16,
    },
    {
      id: 113,
      procedure_steps: "Serve with tortilla chips.",
      recipes_id: 16,
    },
    {
      id: 114,
      procedure_steps:
        "Combine lime, lemon, and orange juice in a medium mixing bowl. Reserve ½ cup of the juice mixture.",
      recipes_id: 17,
    },
    {
      id: 115,
      procedure_steps:
        "Cut shrimp into ½-inch pieces and mix into the citrus juice. Cover and refrigerate for at least 30 minutes until shrimp turns pink and opaque.",
      recipes_id: 17,
    },
    {
      id: 116,
      procedure_steps:
        "Strain the shrimp, discarding the liquid, and return shrimp to the mixing bowl.",
      recipes_id: 17,
    },
    {
      id: 117,
      procedure_steps:
        "Add tomatoes, red onion, cilantro, jalapeno, and salt to the bowl. Stir to combine.",
      recipes_id: 17,
    },
    {
      id: 118,
      procedure_steps:
        "Stir in the reserved ½ cup juice mixture. Cover and refrigerate for 30 minutes to 4 hours, stirring occasionally.",
      recipes_id: 17,
    },
    {
      id: 119,
      procedure_steps: "Gently stir in avocado just before serving.",
      recipes_id: 17,
    },
    {
      id: 120,
      procedure_steps: "Serve with tortilla chips.",
      recipes_id: 17,
    },
  ]);
};
