
abrirModal();
fecharModal();
fecharModalLogado();
verificarEmail();
verificarSenha();
logar();



var booleanLogarEmail = false;
var booleLogarSenha = false;
function abrirModal(){
    let botaoAbrirModal = document.querySelector('.box2 button');
   
    botaoAbrirModal.addEventListener("click", function(){
        let modal = document.querySelector('.modal');
        let pageOne = document.querySelector('.container');

        pageOne.style.display="none";
        modal.style.display="block";
    })


}



function fecharModal(){
    let botaoFecharModal = document.querySelector('.modal .closed');


    botaoFecharModal.addEventListener("click", function(){
        let modal = document.querySelector('.modal');
        let pageOne = document.querySelector('.container');

        pageOne.style.display="flex";
        modal.style.display="none";
    })

}

function fecharModalLogado(){
    let botaoFecharModal = document.querySelector('.modalLogado .closedLogado');


    botaoFecharModal.addEventListener("click", function(){
        let modal = document.querySelector('.modalLogado');
        let pageOne = document.querySelector('.container');

        pageOne.style.display="flex";
        modal.style.display="none";
    })

}



function verificarEmail(){
    
    let email = document.querySelector('.box1 input[type=text]');

    email.addEventListener('change', valueEmail);

    function valueEmail(e){
       let emailDesmontado = e.target.value;

       let arrEmail = emailDesmontado.split("");
       var Boolean1  = false;
       var Boolean2 = false;
       for(i = 0; i < arrEmail.length; i++){

            if(arrEmail[i] == "@"){
                Boolean1 = true;

            }

            if(arrEmail[i] == "."){
                Boolean2 = true;
            }

       }

       if(Boolean1 == true && Boolean2 == true){
           email.style.border="2px solid green";
           booleanLogarEmail = true;
       }


       else{
           
           email.style.border="2px solid red";
           e.target.value = "";
           booleanLogarEmail = false;

       }


    }

    
}



function verificarSenha(e){

    let senha = document.querySelector('.box1 input[type=password]');

    senha.addEventListener('change', valueSenha);

    function valueSenha(el){
       
        let senhaDesmontada = el.target.value;
        let cont = 0;
        let arrSenha = senhaDesmontada.split("");

        for( i =0; i < arrSenha.length; i++){
            cont++;
    
        }

        if(cont >= 8 ){
            booleLogarSenha = true;
            senha.style.border="2px solid green";
            
        }
        else{
            senha.style.border="2px solid red";
            el.target.value = "";
            booleLogarSenha = false;
        }


        /* termina minha função */
    }

}




function logar() {
    let botaoLogar = document.querySelector('.box1 input[name=logar]');
    let ModalLogado = document.querySelector('.modalLogado');
    let container = document.querySelector(".container");
    botaoLogar.addEventListener("click", ()=>{
        if(booleanLogarEmail == true && booleLogarSenha == true){
            ModalLogado.style.display="flex";
            container.style.display="none";
            console.log("logado com sucesso");
         

        }

        else{
            console.log("tem alguma coisa errada verifique os dados");
        }
    })
    
    
}