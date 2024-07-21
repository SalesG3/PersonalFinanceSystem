window.onload = async function(){

    // Ao iniciar valida se o usuário tem sessão ativa

    if(sessionStorage.getItem('user_id') == null){

        window.location.href = "../Tela_Login/login.html"
    }
    else{

        document.querySelector('.welcome').innerHTML = "Bem Vindo(a) " + sessionStorage.getItem('user_name')
    }

    // Função do botão "Sair" no Menu Lateral

    document.querySelector('#log-out').addEventListener('click',function(){
        sessionStorage.clear()
    })

    // Esconde a tela de Registro

    document.querySelector('.detalhes').classList.add('hidden');

    // Insere dados na tabela

    Get()
}


// Função do Botão "Cadastrar" na Barra de Ferramentas

function Cadastrar(){

    // Define o título da tela Registro

    document.querySelector('.detalhes-titulo').innerHTML = "CADASTRAR NOVO REGISTRO:"

    // Esconde Tela Tabela & Exibe Tela Resgistro

    document.querySelector('.tabela').classList.add('hidden');
    document.querySelector('.detalhes').classList.remove('hidden');

    // Função do botão "Salvar" na Tela Registro

    document.querySelector('.btn_salvar').addEventListener('click', function(){

    })

    // Função botão "Cancelar" na Tela Registro

    document.querySelector('.btn_cancelar').addEventListener('click',function(){

        document.querySelector('.tabela').classList.remove('hidden');
        document.querySelector('.detalhes').classList.add('hidden');

    })
}

function MaskImplant(){

    var input = document.querySelector('#banco_implantacao').value
    .replace(',','');
    var newtext = ""

    for(i in input){

        if(input[i] in [0,1,2,3,4,5,6,7,8,9]){
            
            if(input.length == 1){
                document.querySelector('#banco_implantacao').value = "0,0" + input[0]
            }

            else if(input.length == 4 && input[1] == 0 && input[0] == 0){
                document.querySelector('#banco_implantacao').value = "0," + input[2] + input[3]
            }

            else if(input.length > 3){
                if(i == input.length-3){
                    newtext += input[i] + ","
                }
                else{
                    newtext += input[i]
                    
                    if(newtext[0] == "0"){
                        document.querySelector('#banco_implantacao').value = newtext.replace('0','')
                    }
                    else{
                        document.querySelector('#banco_implantacao').value = newtext
                    }
                }
            }

        }

        else{
            document.querySelector('#banco_implantacao').value = "";
            alert("Digite somente números no campo Implantação.");
            return false
        }
    };
};

function MaskLimit(){

    var input = document.querySelector('#banco_limite').value
    .replace(',','');

    var newtext = "";

    for(i in input){

        if(input[i] in [0,1,2,3,4,5,6,7,8,9]){
            
            if(input.length == 1){
                document.querySelector('#banco_limite').value = "0,0" + input[0]
            }

            else if(input.length == 4 && input[1] == 0 && input[0] == 0){
                document.querySelector('#banco_limite').value = "0," + input[2] + input[3]
            }

            else if(input.length > 3){
                if(i == input.length-3){
                    newtext += input[i] + ","
                }
                else{
                    newtext += input[i]
                    
                    if(newtext[0] == "0"){
                        document.querySelector('#banco_limite').value = newtext.replace('0','')
                    }
                    else{
                        document.querySelector('#banco_limite').value = newtext
                    }
                }
            }

        }
    
        else{
            document.querySelector('#banco_limite').value = "";
            alert("Digite somente números no campo Limite.");
            return false
        }
    }
};

async function Validate(){

    const conta = document.querySelector('#banco_conta').value;
    const implantacao = document.querySelector('#banco_implantacao').value;
    const limite = document.querySelector('#banco_limite').value;

    if(conta == "" || conta == " "){
        alert("O campo Conta é obrigatório!");
        document.querySelector('#banco_conta').classList.add('critical')
    }

    else if(implantacao == ""){
        alert("O campo Conta é obrigatório! Caso deseje valor zerado, digite '0'")
        document.querySelector('#banco_conta').classList.remove('critical')
        document.querySelector('#banco_implantacao').classList.add('critical')
    }

    else if(limite == ""){
        alert("O campo Conta é obrigatório! Caso deseje valor zerado, digite '0'")
        document.querySelector('#banco_conta').classList.remove('critical')
        document.querySelector('#banco_implantacao').classList.remove('critical')
        document.querySelector('#banco_limite').classList.add('critical')
    }
    else{
        await Post();

        for(i in document.querySelector('#dados-tabela')){
            document.querySelector('#dados-tabela').deleteRow(0-1)
            console.log('ok')
        };

        Get()
    }
}