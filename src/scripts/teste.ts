import * as foo from "./../assets/teste-don.json";


window.addEventListener('DOMContentLoaded', function(){
    

    let teste: string;
    
    teste = 'oi';
    console.log(teste);
    console.log('opa!!!');
    console.log(foo);
    

    const aaaa = [{
        nome: 'marco',
        numero: 12,
    },
    {
        nome: 'cleiton',
        numero: 15
    }];

    teste = 'o';

    console.log(aaaa);
    console.log(teste);

    //document.write(teste);
    //document.getElementById(teste);
    const meuElemento = document.getElementById("myText");
    if (meuElemento) {
        meuElemento.innerHTML = teste;
    }
    //document.getElementById("obj").innerHTML = aaaa.nome;
    

    for (const {nome, numero} of aaaa) {
        console.log({nome, numero});
        const meuHtml = `<p id="obj">Nome: ${nome}</p>
        <p id="obj">Nome: ${numero}</p>`;

        const meuElemento = document.createElement("div");
        meuElemento.innerHTML = meuHtml;

        document.getElementById('obj')?.appendChild(meuElemento);
    }



    /*<div class="grocery_item">
        <div class="item">${currKey}</div>
        <div class="category">${grocery_list[currKey].category}</div>
        <div class="price">${grocery_list[currKey].price}</div>
    </div>*/

    /*
    1 mostrar o valor de uma variavel na tela (o valor vai ser um primitivo) - ok
    2 mostrar o valor de um campo de um objeto javascript - ok
    3 carregar um arquivo json e mostrar ele no console.log
    4 mostrar os valores do json na tela
    */
})