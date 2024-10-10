const counter = (function () {

    let compteur = 0; 

    function updateDisplay () {
        document.getElementById("compteur").textContent = compteur;
    }

    function incremente () {
        compteur ++; 
        updateDisplay();
    }

    function decremente () {
        compteur --; 
        updateDisplay(); 
    }

    function reset () {
        compteur = 0;
        updateDisplay(); 
    }

    return {
        incremente : incremente,
        decremente : decremente,
        reset : reset
    }

}) (); 

document.getElementById("incremente").addEventListener("click", counter.incremente); 
document.getElementById("decremente").addEventListener("click", counter.decremente); 
document.getElementById("reset").addEventListener("click", counter.reset); 