function Request(){
    const email = document.querySelector('#user_email').value;
    const senha = document.querySelector('#user_senha').value;

    if(email == ""){
        alert('Preencha o campo Email para fazer login.')
    }

    else if(senha == ""){
        alert('Preencha o campo Senha para fazer login')
    }

    else{
        Get();
        async function Get(){

            let response = await fetch(`http://localhost:8000/Login/${email}/${senha}`)
            .then(response => response.json()).then((data) => {

                if(data.sucess != undefined){

                    document.querySelector('#user_email').value = "";
                    document.querySelector('#user_senha').value = "";

                    sessionStorage.setItem('user_id',data.sucess);
                    sessionStorage.setItem('user_name',data.user)

                    window.location.href = "../Tela_Principal/principal.html";

                    return true
                }

                else if(data.falied != undefined){

                    alert('Dados Incorretos');
                    
                    return false
                }

                else{

                    console.log('ERR!');

                    return false
                }
            });
        }
    }
}
