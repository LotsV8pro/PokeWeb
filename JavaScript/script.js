document.getElementById("pokedexImg").addEventListener("click", function() {
    var pokemonList = document.getElementById("pokemonList");
    var listItems = pokemonList.querySelectorAll("li");

    listItems.forEach(function(item, index) {
        setTimeout(function() {
            item.style.transform = "translateX(100%)";
        }, index * 200); // Adjust the delay as needed
    });
});
