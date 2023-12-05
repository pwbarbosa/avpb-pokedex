
$(document).ready(function() {
    const x = document.querySelector("#nextButton");
    let num = 0;

    x.addEventListener("click", () => {
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
    let pokeCache = new Array();
    function getNextPokemon(thisNum) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${thisNum}`)
        .then(res => res.json())
        .then(pokemon => {
            pokeCache.push(pokemon);
            console.log('Poke id is ' + pokemon.id);
            console.log('Pokecache length: ' + pokeCache.length);
            const nextNum = thisNum + 1;
            nextNum == 1 ? console.log(pokemon) : console.log('Greater than 1!');
            if (pokemon) { // Fetches up to Pokemon 100
                getNextPokemon(nextNum);
            }
        }).catch(function(e){
            console.error(e);
            console.log("Looks like we couldn't grab anymore here! Let's skip ahead");
            nextNum = 10001;
            getNextPokemon(nextNum);
            //maybe have the system try to run getNextPokemon() from one more than last known index 5-10 more times. 
            //We could also save the final index in cookies, if not the whole array, to test to see if it is likely that we have all
            //the pokemon possible
        }).catch(function(e){
            console.error(e);
        });
    }

    getNextPokemon(initialNum);
});
