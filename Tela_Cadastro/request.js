function Request(){

    if(
        ValidateNome() == false ||
        ValidateCPF() == false ||
        ValidateEmail() == false ||
        ValidateContato() == false ||
        ValidateSenha() == false
    ){
        return
    }

    else{
        Post();
    }

}

async function Post(){
    const response = await fetch('http://localhost:8000/Cadastro',{
        method:'POST',
        mode:'cors',
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        redirect:'follow',
        referrerPolicy:'no-referrer',
        body: JSON.stringify({
            user_nome: ValidateNome(),
            user_cpf: ValidateCPF(),
            user_email: ValidateEmail(),
            user_contato: ValidateContato(),
            user_senha: ValidateSenha()
        }),
    }).then(response => response.json()).then((data) => {

        console.log(data);

        if(data.falied != undefined){

            let input = document.getElementsByClassName('input');

            for(i in input){

                if(input[i].value == data.falied){
                
                    input[i].classList.add('obrigatorio');
                    alert('Campo Email já utilizado em outra.');
    
                    return false
                }
    
                else if(input[i].value.replace('.','').replace('.','').replace('-','') == data.falied){
    
                    input[i].classList.add('obrigatorio');
                    alert('Campo CPF já utilizado em outra.');
    
                    return false
                }
    
                else if(input[i].value.replace('(','').replace(')','').replace('-','') == data.falied){
    
                    input[i].classList.add('obrigatorio');
                    alert('Campo Contato já utilizado em outra.');
    
                    return false
                }
            }
        }

        else if(data.sucess != undefined){
            alert('Cadastro realizado com sucesso! Pressione "OK" para fazer login.')
            
            let input = document.getElementsByClassName('input');

            for(i in input){
                input[i].value = ""
            };

            window.location.href = "../Tela_Login/login.html";

            return true
        }
    });

    
}