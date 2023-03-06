const form = document.querySelector('.endereco')
const cep = document.querySelector('#cep')
const divErro = document.querySelector('#erro')


function popularCampos(responde){
document.getElementById('rua').value = responde.logradouro;
document.getElementById('bairro').value = responde.bairro;
document.getElementById('cidade').value = responde.localidade;
document.getElementById('estado').value = responde.uf;
document.getElementById('ibge').value = responde.ibge;
}
function errorAnimation(){
divErro.classList.remove('animacao')
setTimeout(function(){
    divErro.classList.add('animacao')
},1000)
}
function exibirErro(){
    console.log('ERRO')
    errorAnimation()
    form.classList.add('error')
    setTimeout(function(){
        form.classList.remove('error')
    },1000)
}


cep.addEventListener("keyup", ({key}) => {
 if (key === "Enter" || key === 9) {
 
    let valorCep = document.getElementById("cep").value
     fetch(`http://viacep.com.br/ws/${valorCep}/json/`, {method:'GET'})
      .then(responde => responde.json()
      .then(popularCampos))
        .catch(exibirErro)
    }
   
})

