let corpo = document.body;

function addDarkTheme(){
    corpo.className = ""; //Limpando as classes anteriores
    // Adiciono a classe dark, a qual ja esta criada no CSS
    corpo.classList.add("dark"); 
}
function removeDarkTheme(){
    corpo.className ="";
    corpo.classList.add("white");
}

function addSize(){
    //corpo.classList.add("tamanho");
    corpo.classList.toggle("tamanho");
}