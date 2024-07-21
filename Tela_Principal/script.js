window.onload = function(){

    if(sessionStorage.getItem('user_id') == null){
        window.location.href = "../Tela_Login/login.html"
    }
    else{
        document.querySelector('.welcome').innerHTML = "Bem Vindo(a) " + sessionStorage.getItem('user_name')
    }

    document.querySelector('#log-out').addEventListener('click',function(){
        sessionStorage.clear()
    })

}