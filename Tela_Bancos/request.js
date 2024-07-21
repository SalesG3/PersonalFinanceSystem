async function Get(){

    let response = await fetch(`http://localhost:8000/bancos`).then(response => response.json())
    .then((data) => {
        
        for(i in data){
            let datarow = `<tr>
            <td>${data[i].banco_conta}</td>
            <td>${data[i].banco_descricao}</td>
            <td> R$ ${data[i].banco_implantacao.toFixed(2).replace('.',',')}</td>
            <td> R$ ${data[i].banco_limite.toFixed(2).replace('.',',')}</td>
            <td></td>
            </tr>`;

            document.querySelector('#dados-tabela').innerHTML += datarow;
        };
    })
};

async function Post(){

    let response = await fetch('http://localhost:8000/bancos',{
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
            banco_conta: document.querySelector('#banco_conta').value,
            banco_descricao: document.querySelector('#banco_descricao').value,
            banco_implantacao: document.querySelector('#banco_implantacao').value.replace(',','.'),
            banco_limite: document.querySelector('#banco_limite').value.replace(',','.')
        })
    }).then((response) => response.json()).then((data) => {

        if(data.sucess != undefined){
            console.log(data);
            alert("Registro Salvo com sucesso no Banco de Dados!")

            document.querySelector('.tabela').classList.remove('hidden');
            document.querySelector('.detalhes').classList.add('hidden');
        }
        else{
            
        }

    })
}