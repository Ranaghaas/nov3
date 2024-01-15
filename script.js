document.addEventListener('DOMContentLoaded', () => {
    // Load some initial recipes
    fetchRecipes('pasta');
});

async function fetchRecipes(query) {
    try {
        const apiKey = '490d3b66345b462b9138113bb2899631'; 
        const response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}`);
        const data = await response.json();

        displayRecipes(data.results);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipeListSection = document.getElementById('recipe-list');

    recipeListSection.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>Ready in ${recipe.readyInMinutes} minutes</p>
            <img src="${recipe.image}" alt="${recipe.title}">
        `;
        recipeListSection.appendChild(recipeCard);
    });
}

function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput.trim() !== '') {
        fetchRecipes(searchInput);
    }
}
