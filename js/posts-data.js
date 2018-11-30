const posts = [
    {
        postID: 1,
        src: "../img/POSTS/breakfast/breakfast_1.jpg",
        userID: 1,
        category: "Breakfast",
        categoryHref: '#',
        href: '#',
        title: "Broccoli and Cottage Cheese Casserole",
        postBody: "This recipe blends several cheeses and bakes \
        them with fresh chopped broccoli mixed in. Soft, warm cheese is \
        great comfort food, right? But the resulting casserole is surprisingly \
        low in fat and calories, while providing lots of protein.\
        \
        The secret is cottage cheese. But you don’t have to tell anyone that!\
        \
        To make this recipe all your own, throw a handful of your favorite herbs \
        into the cheese mixture before baking this broccoli and cottage cheese casserole. \
        Ok, lets do it! And the first step is preheat the oven to 375 degrees.\
        Coat a 9-inch pie pan or a 7×9-inch casserole dish with cooking spray. \
        In a 1-1⁄2-quart saucepan, bring the water to boil. \
        Boil the broccoli for about 4 minutes, until al dente or still crunchy in the middle. \
        After that pour the broccoli into a colander and drain well. \
        In a medium-sized mixing bowl, combine the cottage cheese, cheddar cheese, onion, egg and Parmesan cheese. \
        Stir the broccoli into the cheese mixture. \
        Pour the mixture into the pie pan or baking dish and bake for 35 to 45 minutes, until the center of the casserole is set. \
        Allow the casserole to cool for about 10 minutes before serving.",
        ingredients: [
            'Nonstick cooking spray', 'cups water', '3 cups fresh broccoli florets', 
            '16 ounces cottage cheese, 1 percent fat, no added salt', '3⁄4 cup reduced-fat shredded cheddar cheese',
            '1 cup diced yellow onion', '3 tablespoons grated Parmesan cheese'
        ]
    },
    {
        postID: 2,
        src: "../img/POSTS/dinner/dinner_1.jpg",
        userID: 2,
        category: "Dinner",
        categoryHref: '#',
        href: '#',
        title: "Chicken Caesar salad",
        postBody: "Preheat a grill or grill pan to medium high. Make the dressing: Chop 2 garlic cloves and puree with 1/2 cup olive oil, the anchovies and lemon juice in a blender until smooth; season with salt and pepper. Pound the chicken with a mallet or heavy skillet until about 1/8 inch thick. Season with salt and pepper and toss with 1 tablespoon of the Caesar dressing. Grill the chicken until golden and crisp, 3 to 4 minutes per side. Brush the bread with olive oil on both sides and grill, turning, until toasted, about 2 minutes. Rub with the remaining garlic clove. Brush the romaine with 1 to 2 tablespoons of the dressing and grill until marked, 1 to 2 minutes per side. Chop the lettuce and transfer to a bowl. Cut the bread and chicken into bite-size pieces and add to the bowl. Toss with the remaining dressing, the parmesan, and pepper to taste. Garnish with more parmesan. ", 
        ingredients: [
            '3 cloves garlic', '1/2 cup extra-virgin olive oil, plus more for brushing',
            '2 to 4 anchovy fillets, chopped', 'Juice of 1 lemon',
            'Kosher salt and freshly ground pepper', '1 pound skin-on, boneless chicken breasts',
            '4 (1/2-inch-thick) slices focaccia or whole-wheat Italian bread',
            '4 romaine lettuce hearts, halved lengthwise', '3/4 cup freshly grated parmesan cheese, plus more for garnish'      
        ],
    },
    {
        postID: 3,
        src: "../img/POSTS/lunch/lunch_1.jpg",
        userID: 3,
        category: "Lunch",
        categoryHref: '#',
        href: '#',
        title: "French onion soup with cheddar",
        postBody: "Peel the onions and the garlic and cut them into thin \
        slices. Melt the butter in a frying pan and add the onions and garlic. \
        Caramelise the onions slowly over low to medium heat. This will take \
        approximately 30 min. The onions should not be fried, but should cook \
        slowly until golden.\
        \
        Now add the bay leaves, thyme, juniper berries and apple cider vinegar. \
        Simmer until the vinegar has cooked off. Now add the stock. \
        \
        Bring the soup to a boil and let it simmer for another 30 min. \
        Season to taste with salt and pepper.\
        \
        Heat some oil in a pan, then toast the French bread until golden on \
        both sides.\
        \
        Pour the soup into bowls and press the toasted French bread down into \
        them. Top with grated cheddar. Melt the cheese under the grill in the \
        oven.\
        \
        Serve immediately.", 
        ingredients: [
            '500g onions', '4 cloves of garlic', '25g butter', '100ml apple cider vinegar',
            '3 bay leaves', '4 sprigs of thyme', '5 juniper berries', '1,000ml veal stock',
            '8-12 slices of day-old French bread', '3 tbsp oil', '100g aged cheddar'
        ]
    },
    {
        postID: 4,
        src: "../img/POSTS/lunch/lunch_2.jpg",
        userID: 2,
        category: "Lunch",
        categoryHref: '#',
        href: '#',
        title: "Japanese Corn Soup",
        postBody: "One of our family’s favorites, sweet corn, is in season \
        from June to October. While we spent the summer in Japan, I received \
        a lot of recipe requests for Corn Potage and Japanese Corn Soup.  \
        As soon as I returned, I quickly refined my original recipe so I could \
        share this late, late-summer soup with you.\
        \
        As the nights are starting to make subtle shift with a touch of cool air, \
        this Japanese Corn Potage or Corn Soup would be the coziest way to savor \
        the deliciousness of the last of season’s produce. One of our family’s favorites, sweet corn, is in season from June to October. While we spent the summer in Japan, I received a lot of recipe requests for Corn Potage and Japanese Corn Soup.  As soon as I returned, I quickly refined my original recipe so I could share this late, late-summer soup with you. \
        As the nights are starting to make subtle shift with a touch of cool air, this Japanese Corn Potage or Corn Soup would be the coziest way to savor the deliciousness of the last of season’s produce. \
        Some other recipes for corn soup/corn potage recommend using vegetable or chicken broth or bouillon and I’ve tried them, but being a purist I stick to using ONLY water to extract the sweet corn flavor for pure undiluted taste. \
        Tip 3 – Adjust the ratio of creaminess with milk and heavy cream \
        I assume most of us prefer rich and creamy soup, but not everyone can afford getting extra calories from heavy cream. It’s entirely up to you how much heavy cream you want to add in this recipe.  Feel free to adjust the ratio of heavy cream and milk for the 2 cups you add into the soup.", 
        ingredients: [
            '4 ears corn (or 1.5 cans or 3 cups frozen corn)', '1 Tbsp extra virgin olive oil',
            'kosher salt (I used total of 2 Tbsp kosher salt in this recipe)', '¼ tsp paprika',
            '½ onion', '1 ½ Tbsp unsalted butter', '3 cups water', '1 cup milk', '1 cup heavy (whipping) cream',
            'Parsley to garnish', 'heavy (whipping) cream to garnish', 'extra virgin olive oil to garnish'
        ]
    },
    {
        postID: 5,
        src: "../img/POSTS/dinner/dinner_2.jpg",
        userID: 1,
        category: "Dinner",
        categoryHref: '#',
        href: '#',
        title: "Roasted beetroot and feta salad",
        postBody: "Step 1 \
        \
        Preheat oven to 180°C/160°C fan-forced. Wash beetroot. \
        Pat dry. Wrap in foil. Place on a baking tray. Roast for 1 \
        hour or until tender. Cool for 15 minutes. Meanwhile prepare \
        remaining ingredients. earing gloves, peel and discard skin from \
        beetroot. Cut beetroot into 2cm pieces. Step 2. Combine spinach, onion, feta, walnuts and beetroot in a bowl. Toss to combine. \
        Step 3. Place orange juice, oil and mustard in a screw-top jar. Season with salt and pepper. Secure lid. Shake to combine. Add to beetroot mixture. Toss to combine. Serve.", 
        ingredients: [
            '1 medium beetroot', '50g baby spinach', '1/2 small red onion, thinly sliced', '75g feta, crumbled',
            '1/4 cup walnuts, lightly toasted', '2 tablespoons orange juice', '1 tablespoon olive oil', '1/2 teaspoon dijon mustard',
            'Salt and pepper, to season.'
        ]
    },
    {
        postID: 6,
        src: "../img/POSTS/snack/snack_1.jpg",
        userID: 1,
        category: "Snack",
        categoryHref: '#',
        href: '#',
        title: "Vegan roasted garlic & tomato lentil salad",
        postBody: "This Roasted Garlic & Tomato Lentil Salad is the \
        perfect vegan cold lentil salad that everyone will love! With \
        roasted garlic, oven roasted tomatoes and onions, this is one you \
        don’t want to miss. You guys are going to love this Roasted Garlic & \
        Tomato Lentil Salad!\
        \
        I had no intention of publishing this recipe today, but I couldn’t \
        stop myself.  It is just that good.\
        \
        The last few days I’ve been a bit under the weather.", 
    },
    {
        postID: 7,
        src: "../img/POSTS/breakfast/breakfast_2.jpg",
        userID: 3,
        category: "Breakfast",
        categoryHref: '#',
        href: '#',
        title: "Sausages wuth poached egg",
        postBody: "This quick meal idea is ideal for busy days. Perfect for a filling \
        lunch or fancy breakfast.", 
    },
    {
        postID: 8,
        src: "../img/POSTS/lunch/lunch_3.jpg",
        userID: 2,
        category: "Lunch",
        categoryHref: '#',
        href: '#',
        title: "Green goddess revatalizarion bowl with herbed buckwheat",
        postBody: "This green goddess revitalization bowl with herbed buckwheat, \
        avocado & microgreens is just as satisfying as it is nourishing. Warm, \
        herb-flecked buckwheat salad is paired with a creamy avocado salad. The \
        buckwheat salad can be prepared a few days ahead of time. Just be sure to \
        prepare the avocado salad just before serving for ultimate freshness. ", 
    },
    {
        postID: 9,
        src: "../img/POSTS/snack/snack_2.jpg",
        userID: 2,
        category: "Snack",
        categoryHref: '#',
        href: '#',
        title: "Healthy sandwiches",
        postBody: "These easy sandwich stackers feature layers of sliced \
        avocado, sliced tomato, lettuce, sliced cucumbers, and Swiss cheese.  \
        They're perfect for a summer supper.\
        \
        A healthier version of the BLT, this sandwich is nutrient-rich. \
        Avocados are fattening, but they provide heart-healthy monounsaturated \
        fat. Avocados are also high in fiber. They can be used as healthy baking \
        and cooking alternatives for butter and shortening. ", 
    },
    {
        postID: 10,
        src: "../img/POSTS/snack/img_6.jpg",
        userID: 3,
        category: "Snack",
        categoryHref: '#',
        href: '#',
        title: "Chanterelle Salad",
        postBody: "Fresh domestic chanterelles have been described as having an apricot-like flavor to them. They grow wild in many areas in the United States and their season depends on the climate of the region. Look for them in specialty gourmet shops and farmer's markets.\
        \
        Place walnuts in a single layer in a large skillet. Toast over medium heat for 10 minutes, turning once. Coarsely chop and set aside.", 
    },

];