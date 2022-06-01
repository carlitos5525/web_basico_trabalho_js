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