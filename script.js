const recipes = [
    {
        title: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish with rich tomato sauce.",
        image: "https://www.preciouscore.com/wp-content/uploads/2024/06/Spaghetti-Bolognese-Chicken.jpg",
        details: "Ingredients: Spaghetti, ground beef, tomato sauce, garlic, onions. Instructions: Cook spaghetti, prepare the sauce, mix and serve.",
        category: "dinner"
    },
    {
        title: "Chicken Curry",
        description: "A flavorful curry made with tender chicken and spices.",
        image: "https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg",
        details: "Ingredients: Chicken, curry powder, coconut milk, garlic, onions. Instructions: Cook chicken, add spices, simmer with coconut milk.",
        category: "lunch"
    },
    {
        title: "Vegetable Stir Fry",
        description: "A quick and healthy mix of veggies in a savory sauce.",
        image: "https://kristineskitchenblog.com/wp-content/uploads/2024/01/vegetable-stir-fry-22-3.jpg",
        details: "Ingredients: Assorted vegetables, soy sauce, garlic, ginger. Instructions: Stir-fry veggies with sauce over high heat.",
        category: "lunch"
    },
    {
        title: "Beef Tacos",
        description: "Tacos filled with seasoned beef, fresh veggies, and cheese.",
        image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
        details: "Ingredients: Ground beef, taco shells, lettuce, cheese, salsa. Instructions: Cook beef, assemble tacos with toppings.",
        category: "dinner"
    },
    {
        title: "Pancakes",
        description: "Fluffy pancakes topped with syrup and fresh fruit.",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-06-seo-pancakes%2Fseo-pancakes-232",
        details: "Ingredients: Flour, eggs, milk, butter, syrup. Instructions: Mix ingredients, cook on griddle, serve with toppings.",
        category: "breakfast"
    },
    {
        title: "Caesar Salad",
        description: "A classic salad with crispy lettuce, croutons, and Caesar dressing.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
        details: "Ingredients: Romaine lettuce, croutons, Parmesan cheese, Caesar dressing. Instructions: Toss lettuce with dressing, top with croutons and cheese.",
        category: "lunch"
    },
    {
        title: "Chocolate Cake",
        description: "A rich and moist chocolate cake perfect for dessert.",
        image: "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
        details: "Ingredients: Flour, sugar, cocoa powder, eggs, butter. Instructions: Mix ingredients, bake, and frost with chocolate icing.",
        category: "dessert"
    },
    {
        title: "Grilled Salmon",
        description: "Healthy and delicious grilled salmon with a lemon glaze.",
        details: "Ingredients: Salmon fillets, lemon, olive oil, garlic, herbs. Instructions: Grill salmon, glaze with lemon and herbs.",
        image: "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
        category: "dinner"
    },
    {
        title: "French Toast",
        description: "Sweet and fluffy French toast for a perfect breakfast.",
        details: "Ingredients: Bread, eggs, milk, cinnamon, syrup. Instructions: Dip bread in egg mixture, cook on griddle, serve with syrup.",
        image: "https://untoldrecipesbynosheen.com/wp-content/uploads/2020/10/paki-french-toast-featured-1.jpg",
        category: "breakfast"
    },
    {
        title: "Vegetable Soup",
        description: "A hearty and healthy soup packed with vegetables.",
        details: "Ingredients: Carrots, celery, potatoes, tomatoes, broth. Instructions: Simmer vegetables in broth until tender.",
        image: "https://feelgoodfoodie.net/wp-content/uploads/2024/12/Vegetable-Stew-10.jpg",
        category: "lunch"
    },
    {
        title: "Tiramisu",
        description: "A classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.", 
        details: "Ingredients: Ladyfingers, coffee, mascarpone cheese, cocoa powder. Instructions: Layer ladyfingers with mascarpone cream, dust with cocoa.",
        image: "https://www.jocooks.com/wp-content/uploads/2019/07/tiramisu-1-15.jpg",
        category: "dessert"
    },
    {
        title: "Beef Stew",
        description: "A comforting stew with tender beef and vegetables.",
        details: "Ingredients: Beef, carrots, potatoes, onions, broth. Instructions: Simmer beef and vegetables in broth until tender.",
        image: "https://hips.hearstapps.com/hmg-prod/images/beef-stew-index-652e94c53b39b.jpg?crop=0.8891301070405547xw:1xh;center,top&resize=1200:*",
        category: "dinner"
    },
    {
        title: "Omelette",
        description: "A fluffy omelette filled with your favorite ingredients.",
        details: "Ingredients: Eggs, cheese, bell peppers, onions, herbs. Instructions: Whisk eggs, pour into skillet, add fillings, cook until set.",
        image: "https://www.sweetashoney.co/wp-content/uploads/Omelette-2.jpg",
        category: "breakfast"
    },
    {
        title: "Caprese Salad",
        description: "A fresh salad with tomatoes, mozzarella, and basil.",
        details: "Ingredients: Tomatoes, mozzarella cheese, fresh basil, olive oil, balsamic vinegar. Instructions: Layer ingredients, drizzle with oil and vinegar.",
        image: "https://natashaskitchen.com/wp-content/uploads/2019/08/Caprese-Salad-6.jpg",
        category: "lunch"
    },
    {
        title: "Pasta Primavera",
        description: "A colorful pasta dish with fresh vegetables.",
        details: "Ingredients: Pasta, bell peppers, zucchini, cherry tomatoes, olive oil. Instructions: Cook pasta, sauté vegetables, combine and serve.",
        image: "https://thecozycook.com/wp-content/uploads/2024/02/Pasta-Primavera-f.jpg",
        category: "dinner"
    },
    {
        title: "Banana Bread",
        description: "Moist and delicious banana bread perfect for breakfast or snack.",
        details: "Ingredients: Bananas, flour, sugar, eggs, butter. Instructions: Mix ingredients, bake until golden brown.",
        image: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2020/03/sk-ultimate-banana-bread.jpg?fit=1200%2C800&ssl=1",
        category: "breakfast"
    },
    {
        title: "Shrimp Scampi",
        description: "Succulent shrimp cooked in garlic butter and served over pasta.",
        details: "Ingredients: Shrimp, garlic, butter, lemon, pasta. Instructions: Sauté shrimp in garlic butter, serve over cooked pasta.",
        image: "https://www.allrecipes.com/thmb/g1mA246pFBZ2SQVmph3up6RwYF4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-8730066-copycat-red-lobster-shrimp-scampi-recipe-VAT-4x3-2lowerangle-2ea7c4b615f04459a0aea17fd28d9778.jpg",
        category: "dinner"
    },
    {
        title: "Apple Pie",
        description: "A classic dessert with a flaky crust and spiced apple filling.",
        details: "Ingredients: Apples, sugar, cinnamon, pie crust. Instructions: Fill crust with spiced apples, bake until golden.",
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/11/Apple-Pie.jpg",
        category: "dessert"
    },
    {
        title: "Quiche Lorraine",
        description: "A savory pie filled with eggs, cream, cheese, and bacon.",
        details: "Ingredients: Pie crust, eggs, cream, cheese, bacon. Instructions: Whisk eggs and cream, pour into crust, bake until set.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTe3ffYBWMd_Cn95Kzv76x4XibMrKzJz8Tg&s",
        category: "breakfast"
    },
    {
        title: "Stuffed Bell Peppers",
        description: "Bell peppers filled with a savory mixture of rice, meat, and spices.",
        details: "Ingredients: Bell peppers, ground beef, rice, tomatoes, spices. Instructions: Stuff peppers with mixture, bake until tender.",
        image: "https://saltedmint.com/wp-content/uploads/2024/01/Easy-Stuffed-bell-peppers-with-rice-2.jpg",
        category: "dinner"
    },
    {
        title: "Chocolate Chip Cookies",
        description: "Classic cookies loaded with chocolate chips.",
        details: "Ingredients: Flour, sugar, butter, chocolate chips, eggs. Instructions: Mix ingredients, scoop onto baking sheet, bake until golden.",
        image: "https://familycookierecipes.com/wp-content/uploads/2019/02/Oatmeal-Chocolate-Chip-Cookies-18.jpg",
        category: "dessert"
    },
    {
        title: "Greek Yogurt Parfait",
        description: "A healthy breakfast with layers of yogurt, fruit, and granola.",
        details: "Ingredients: Greek yogurt, mixed berries, granola, honey. Instructions: Layer ingredients in a glass, drizzle with honey.",
        image: "https://spicecravings.com/wp-content/uploads/2023/09/Greek-Yogurt-Parfait-Featured.jpg",
        category: "breakfast"
    },
    {
        title: "Lentil Soup",
        description: "A hearty and nutritious soup made with lentils and vegetables.",
        details: "Ingredients: Lentils, carrots, celery, onions, broth. Instructions: Simmer lentils and vegetables in broth until tender.",
        image: "https://www.homemademastery.com/wp-content/uploads/2021/10/Lentil-vegetable-soup-IMG_9832.jpg",
        category: "lunch"
    },
    {
        title: "BBQ Ribs",
        description: "Tender ribs coated in a tangy barbecue sauce.",
        details: "Ingredients: Pork ribs, barbecue sauce, spices. Instructions: Rub ribs with spices, bake, and glaze with sauce.",
        image: "https://www.grillseeker.com/wp-content/uploads/2022/06/sauced-pork-ribs-on-a-baoking-sheet.jpg",
        category: "dinner"
    },
    {
        title: "Mango Sticky Rice",
        description: "A popular Thai dessert made with sweet sticky rice and fresh mango.",
        details: "Ingredients: Sticky rice, coconut milk, mango, sugar. Instructions: Cook rice, mix with coconut milk, serve with mango.",
        image: "https://www.allrecipes.com/thmb/yeUwoCu2irwqGDb-3PHJHnaX2C4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-150313-thai-sweet-sticky-rice-with-mango-khao-neeo-mamuang-ddmfs-4x3-hero-0da7a9b26cce4d07aea44f2f2b6abd95.jpg",
        category: "dessert"
    }
];

const recipeContainer = document.getElementById("recipe-container");
const searchBar = document.getElementById("search-bar");
const detailsContainer = document.getElementById("details-container");

function displayRecipes(filteredRecipes) {
    recipeContainer.innerHTML = ''; // Clear previous recipes
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button class="view-recipe" data-title="${recipe.title}">View Recipe</button>
        `;

        recipeContainer.appendChild(recipeCard);
    });

    attachViewRecipeListeners();
}

function displayRecipeDetails(recipe) {
    detailsContainer.innerHTML = `
        <div class="recipe-details">
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.details}</p>
            <button id="close-details">Close</button>
        </div>
    `;
    detailsContainer.style.display = "block";
    detailsContainer.style.animation = "slideIn 0.5s ease-in-out"; // Add animation

    document.getElementById("close-details").addEventListener("click", () => {
        detailsContainer.style.display = "none";
    });
}

function attachViewRecipeListeners() {
    document.querySelectorAll(".view-recipe").forEach(button => {
        button.addEventListener("click", event => {
            const recipeTitle = event.target.dataset.title;
            const recipe = recipes.find(r => r.title === recipeTitle);
            if (recipe) {
                displayRecipeDetails(recipe);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayRecipes(recipes);

    searchBar.addEventListener("input", event => {
        const query = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query)
        );
        displayRecipes(filteredRecipes);
    });
});

const loadingSpinner = document.getElementById("loading-spinner");

function displayRecipes(filteredRecipes) {
    loadingSpinner.style.display = "block"; // Show spinner
    recipeContainer.innerHTML = ""; // Clear previous recipes

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <button class="view-recipe" data-title="${recipe.title}">View Recipe</button>
            `;

            recipeContainer.appendChild(recipeCard);
        });

        loadingSpinner.style.display = "none"; // Hide spinner
        attachViewRecipeListeners();
    }, 1000); // Adjust the delay as needed
}

document.addEventListener("DOMContentLoaded", () => {
    loadingSpinner.style.display = "block"; // Show spinner on initial load
    setTimeout(() => {
        displayRecipes(recipes);
    }, 1000); // Simulate loading delay
});

searchBar.addEventListener("input", event => {
    loadingSpinner.style.display = "block"; // Show spinner during search
    const query = event.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query)
    );

    setTimeout(() => {
        displayRecipes(filteredRecipes);
    }, 500); // Simulate search delay
});

// Add event listeners to category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
    });
});

// Add event listeners to star ratings
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const value = star.dataset.value;
        alert(`You rated this recipe ${value} stars!`);
        // You can store the rating in a database or local storage
    });
});

// Handle comment submission
document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();

    if (comment) {
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
        commentInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a comment before submitting.');
    }
});

// Handle newsletter subscription
document.getElementById('newsletter-form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Add event listeners to social media links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const platform = link.textContent.toLowerCase();
        alert(`Redirecting to our ${platform} page...`);
        // Replace with actual social media URLs
        window.open(`https://www.${platform}.com`, '_blank');
    });
});

// Display featured recipes
function displayFeaturedRecipes() {
    const featuredContainer = document.getElementById('featured-container');
    const featuredRecipes = recipes.slice(0, 3); // Show the first 3 recipes as featured

    featuredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button class="view-recipe" data-title="${recipe.title}">View Recipe</button>
        `;

        featuredContainer.appendChild(recipeCard);
    });

    attachViewRecipeListeners(); // Attach event listeners to "View Recipe" buttons
}

// Call the function to display featured recipes
displayFeaturedRecipes();

