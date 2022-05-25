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