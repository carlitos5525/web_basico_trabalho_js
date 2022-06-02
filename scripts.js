function exerc_1(){
    num_1 = document.getElementById('numero_1').value;
    num_2 = document.getElementById('numero_2').value;

    if(num_1 > num_2){
        var texto = num_1 + ", " + num_2;
    }
    else{
        var texto = num_2 + ", " + num_1;
    }

    document.getElementById("resultado").innerHTML = texto;
}

function exerc_2(){
    genero_escolhido = document.getElementById('genero');
    var genero = genero_escolhido.options[genero_escolhido.selectedIndex].value;
    
    altura_cm = document.getElementById('altura').value;
    altura = altura_cm / 100;

    var peso_ideal = 0;

    if(genero == "masc"){
        peso_ideal = (72.7 * altura) - 58;
    }
    else{
        peso_ideal = (62.1 * altura) - 44.7;
    }

    var texto = "O peso ideal é " + peso_ideal + "kg.";
    document.getElementById("resultado").innerHTML = texto;
}

function exerc_3(){
    num_1 = document.getElementById('numero_1').value;
    num_2 = document.getElementById('numero_2').value;
    num_3 = document.getElementById('numero_3').value;

    var menor_numero = 0;

    if(num_1 < num_2 && num_1 < num_3){
        menor_numero = num_1;
    }
    else if(num_2 < num_1 && num_2 < num_3){
        menor_numero = num_2;
    }
    else if(num_3 < num_1 && num_3 < num_2){
        menor_numero = num_3;
    }
    var texto = "O menor número é " + menor_numero;
    document.getElementById("resultado").innerHTML = texto;
}

function exerc_4(){
    numero = document.getElementById('numero').value;

    if(numero > 0){
        if(numero % 2 == 0){
            var texto = "O número é par.";
        }
        else{
            var texto = "O número é ímpar.";
        }
    }
    else{
        valor_absoluto = Math.abs(numero);
        var texto = "O valor absoluto é " + valor_absoluto;
    }
    
    document.getElementById("resultado").innerHTML = texto;
}

function exerc_5(){
    numero = document.getElementById('numero').value;

    if(numero % 2 == 0 && numero % 3 == 0){
        var texto = "O número é divisível por 2 e por 3.";
    }
    else{
        var texto = "O número NÃO é divisível por 2 e por 3";
    }

    document.getElementById("resultado").innerHTML = texto;

}

function exerc_6(){
    numero = document.getElementById('numero').value;

    if(numero % 2 == 0 || numero % 7 == 0){
        var texto = "O número é divisível por 2 ou por 7.";

    }
    else{
        var texto = "O número NÃO é divisível por 2 ou por 7";
    }

    document.getElementById("resultado").innerHTML = texto;
}

function exerc_7(){
    numero = document.getElementById('numero').value;

    switch(numero){
        case '1':
            texto = "Domingo";
            break;
        case '2':
            texto = "Segunda-feira";
            break;
        case '3':
            texto = "Terça-feira";
            break;
        case '4':
            texto = "Quarta-feira";
            break;
        case '5':
            texto = "Quinta-feira";
            break;
        case '6':
            texto = "Sexta-feira";
            break;
        case '7':
            texto = "Sábado";
            break;
        default:
            texto = "Escolha um número no intervalo correto";
    }

    document.getElementById("resultado").innerHTML = texto;

}

function exerc_8(){
    var soma = 0;
    for(i = 1; i <= 20; i++){
        if(i % 2 == 0){
            soma = soma + i;
        }
    }
    var texto = "A soma é " + soma;

    document.getElementById("resultado").innerHTML = texto;

}

function exerc_9(){
    numero = document.getElementById('numero').value;
    var texto = '';

    for(i = 1; i <= 10; i++){
        resultado = numero * i;
        var tabuada = numero + "x" + i + "=" + resultado + ", ";
        texto =  texto + tabuada;
    }

    document.getElementById("resultado").innerHTML = texto;

}