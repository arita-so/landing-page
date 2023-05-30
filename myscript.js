const carrega = document.getElementById("carrega")
carrega.addEventListener ('click', (event) => {
    alert ("Obrigada por visitares a minha Landing Page para o programa Step By Tech!") 
});

// Funções para o MouseOver Event

function changeBackground(){
    document.getElementById("aprender").style.color = "white";
    document.getElementById("aprender").style.backgroundColor = "#ff6585";
}

function backToNormal(){
    document.getElementById("aprender").style.color = "#ff6585";
    document.getElementById("aprender").style.backgroundColor = "";
}

function changeBackground1(){
    document.getElementById("grupo").style.color = "white";
    document.getElementById("grupo").style.backgroundColor = "#ff6585";
}

function backToNormal1(){
    document.getElementById("grupo").style.color = "#ff6585";
    document.getElementById("grupo").style.backgroundColor = "";
}
