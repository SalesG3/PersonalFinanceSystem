function MaskCPF(){

    var input = document.querySelector('#user_cpf').value
    .replace('.','').replace('.','').replace('-','')

    for(i in input){

        if(input[i] in [1,2,3,4,5,6,7,8,9,0]){
            continue
        }
        
        else{
            document.querySelector('#user_cpf').value = "";
            alert('CPF Inválido!')
        }
    }

    document.querySelector('#user_cpf').addEventListener('keypress',function(){

        var input = document.querySelector('#user_cpf').value;

        if(input.length == 3 || input.length == 7){
            document.querySelector('#user_cpf').value += "."
        }
        else if(input.length == 11){
            document.querySelector('#user_cpf').value += "-"
        }
    })
}

function MaskContato(){

    var input = document.querySelector('#user_contato').value
    .replace('(','').replace(')','').replace('-','')

    for(i in input){

        if(input[i] in [1,2,3,4,5,6,7,8,9,0]){
            continue
        }
        
        else{
            document.querySelector('#user_contato').value = "";
            alert('Contato Inválido!')
        }
    }

    document.querySelector('#user_contato').addEventListener('keypress',function(){

        var input = document.querySelector('#user_contato').value;

        if(input.length == 1){
            document.querySelector('#user_contato').value = "(" + input[0]
        }
        else if(input.length == 3){
            document.querySelector('#user_contato').value += ")"
        }
        else if(input.length == 9){
            document.querySelector('#user_contato').value += "-"
        }
    })
}

function ValidateNome(){

    var input = document.querySelector('#user_nome').value;

    if(input == ""){
        document.querySelector('#user_nome').classList.add('obrigatorio');
        alert('Todos os campos são obritatórios!');
        return false
    }

    else{
        document.querySelector('#user_nome').classList.remove('obrigatorio');
        return input
    }
}

function ValidateCPF(){

    var input = document.querySelector('#user_cpf').value
    .replace('.','').replace('.','').replace('-','')

    if(input == ""){
        document.querySelector('#user_cpf').classList.add('obrigatorio');
        alert('Todos os campos são obritatórios!');
        return false
    }

    else if(input.length != 11){
        document.querySelector('#user_cpf').classList.add('obrigatorio');
        alert('CPF incompleto!');
        return false
    }

    else{
        document.querySelector('#user_cpf').classList.remove('obrigatorio');
        return input
    }
}

function ValidateEmail(){

    var input = document.querySelector('#user_email').value;

    if(input == ""){
        document.querySelector('#user_email').classList.add('obrigatorio');
        alert('Todos os campos são obritatórios!');
        return false
    }

    else if(input.search("@") == -1 || input.search('.com') == -1){
        document.querySelector('#user_email').classList.add('obrigatorio');
        alert('Digite um email válido.');
        return false
    }

    else if(input.search('@') == 0){
        document.querySelector('#user_email').classList.add('obrigatorio');
        alert('Digite um email válido.')
        return false
    }

    else{
        document.querySelector('#user_email').classList.remove('obrigatorio');
        return input
    }
}

function ValidateContato(){

    var input = document.querySelector('#user_contato').value
    .replace('(','').replace(')','').replace('-','')

    if(input == ""){
        document.querySelector('#user_contato').classList.add('obrigatorio');
        alert('Todos os campos são obritatórios!');
        return false
    }

    else if(input.length != 11){
        document.querySelector('#user_contato').classList.add('obrigatorio');
        alert('Contato incompleto!');
        return false
    }

    else{
        document.querySelector('#user_contato').classList.remove('obrigatorio');
        return input
    }
}

function ValidateSenha(){

    var input = document.querySelector('#user_senha').value;

    if(input.length < 8){
        document.querySelector('#user_senha').classList.add('obrigatorio');
        alert('Senha muito curta! 8 digítos necessários.');
        return false
    }

    else{
        document.querySelector('#user_senha').classList.remove('obrigatorio');
        return input
    }
}