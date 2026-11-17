class Solution {
    findAllRecipes(recipes, ingredients, supplies) {
        const res = new Set();
        const suppliesSet = new Set(supplies);

        function makeRecipes() {
            for (let i = 0; i < recipes.length; i++) {
                const recipe = recipes[i];
                let canMake = true;
                for (let ingredient of ingredients[i]) {
                    if (!suppliesSet.has(ingredient)) {
                        canMake = false;
                    }
                }
                if (canMake) {
                    suppliesSet.add(recipe);
                    res.add(recipe);
                }
            }
        }

        makeRecipes();
        makeRecipes();
        return Array.from(res);
    }
}

/*
    hashset

    add supplies to a hash set
    
    looop over recipes and ingredients and see if you can build recipe
    if so then add it to ingredients

    do two passes over recipes 

 */