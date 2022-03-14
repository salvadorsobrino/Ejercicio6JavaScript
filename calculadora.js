
function calcular(){
    let elementoSelect = document.getElementById("select");
    //let value = elementoSelect.options[elementoSelect.selectedIndex].value; //The value of the selected option
    let textOperador = elementoSelect.options[elementoSelect.selectedIndex].text;  // The text content of the selected option
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2= parseInt(document.getElementById("numero2").value);
    if (isNaN(n1)||isNaN(n2)){
        alert("Escriba primero los operandos y después seleccione el operador")
    } else {
        switch (textOperador) {
        case "+":
            solucion.value = n1+n2;
            break;
        case "-":
            solucion.value = n1-n2;
            break;
        case "*":
            solucion.value = n1*n2;
            break;
        case "/":
            solucion.value = n1/n2;
            break;
        }
    }
    
}