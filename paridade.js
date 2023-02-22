function paridade(){
    var num = document.getElementById('number').value
    var number = Number(num)

    if(number % 2 == 0){
        alert(`O número ${number} é PAR!`);
    }
    else {
        alert(`O número ${number} é ÍMPAR!`);
    }
}

