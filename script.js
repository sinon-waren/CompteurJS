let compteur = 0; 

function cmpincrement (){
    compteur++; 
    document.getElementById("compteur").textContent = compteur; 
}

function decremente () {
    compteur--;
    document.getElementById("compteur").textContent = compteur;
}

function cptreset () {
    compteur = 0;
    document.getElementById("compteur").textContent = compteur;
}

document.getElementById("incremente").addEventListener("click", cmpincrement); 
document.getElementById("decremente").addEventListener("click", decremente); 
document.getElementById("reset").addEventListener("click", cptreset); 