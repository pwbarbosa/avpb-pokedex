
$(document).ready(function() {
    alert('ready')
    const x = document.querySelector("#nextButton");
    let num = 0;

    x.addEventListener("click", () => {
        alert('next')
        console.clear();
        num++;

        fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then(res => res.json())
        .then(pokemon => {
            console.log("Pokemon's name is " + pokemon.name);
            console.log("Pokemon's weight in pounds is: " + pokemon.weight*.22);
            console.log("Pokemon's base hp is " + pokemon.stats[0].base_stat);
            console.log('Aaaaaand the pokemon is....');
            console.log(pokemon);
        })

        
    });

    
    $('#_poke_index_go').click(function() {
        alert('click');
        if($('#_poke_index_input').val()){
            console.clear();
            fetch(`https://pokeapi.co/api/v2/pokemon/${$('#_poke_index_input').val()}`)
            .then(res => res.json())
            .then(pokemon => {
                console.log('Pokemon datatype: ' + typeof pokemon)
                console.log("Pokemon's name is " + pokemon.name);
                console.log("Pokemon's weight in pounds is: " + pokemon.weight*.22);
                console.log("Pokemon's base hp is " + pokemon.stats[0].base_stat);
                console.log('Aaaaaand the pokemon is....');
                console.log(pokemon);
            });
        }
    });
    // fetch(`https://pokeapi.co/api/v2/pokemon/${newNum}`)
    //     .then(res => res.json())
    //     .then(pokemon => {
    //         console.log('Pokemon datatype: ' + typeof pokemon)
    //         console.log("Pokemon's name is " + pokemon.name);
    //         console.log("Pokemon's weight in pounds is: " + pokemon.weight*.22);
    //         console.log("Pokemon's base hp is " + pokemon.stats[0].base_stat);
    //         console.log('Aaaaaand the pokemon is....');
    //         console.log(pokemon);
    //         newNum++;
    //     }).catch(function(){
    //         condition = false;
    //     });
    let initialNum = 1;

    function getNextPokemon(thisNum) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${thisNum}`)
        .then(res => res.json())
        .then(pokemon => {
            console.log('Poke id is ' + pokemon.id)
            console.log("Pokemon's name is " + pokemon.name);
            console.log("Pokemon's weight in pounds is: " + pokemon.weight * 0.22);
            console.log("Pokemon's base hp is " + pokemon.stats[0].base_stat);
            console.log('Aaaaaand the pokemon is....');
            console.log(pokemon);
            
            const nextNum = thisNum + 1;
            if (nextNum <= 100) { // Fetches up to Pokemon 100
                getNextPokemon(nextNum);
            }
        });
    }

    getNextPokemon(initialNum);
});