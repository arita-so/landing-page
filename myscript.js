const carrega = document.querySelector('div')
carrega.setAttribute("id", "carrega")
carrega.addEventListener ('click', (event) => {
    alert ("Obrigada por visitares a minha Landing Page para o programa Step By Tech!") 
});

const aprender = document.querySelectorAll("span")[0]
aprender.setAttribute("id", "aprender")
document.getElementById("aprender")
const grupo = document.querySelectorAll("span")[1]
grupo.setAttribute("id", "grupo")
document.getElementById("grupo")

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

aprender.setAttribute('mouseover', changeBackground)
aprender.setAttribute('mouseout', backToNormal)
aprender.addEventListener('mouseover', changeBackground)
aprender.addEventListener('mouseout', backToNormal)

grupo.setAttribute('mouseover', changeBackground1)
grupo.setAttribute('mouseout', backToNormal1)
grupo.addEventListener('mouseover', changeBackground1)
grupo.addEventListener('mouseout', backToNormal1)
