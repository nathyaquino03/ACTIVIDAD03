function checkDivisibility() {
    // Obtener el número ingresado por el usuario
    let number = parseInt(document.getElementById('number').value, 10);

    // Obtener los elementos para mostrar el resultado
    let result = document.getElementById('result');
    let divisibleList = document.getElementById('divisibleList');

    // Limpiar cualquier contenido previo
    result.textContent = '';
    divisibleList.innerHTML = '';

    // Verificar la divisibilidad del número ingresado
    if (number % 3 === 0 && number % 5 === 0) {
        result.textContent = 'El número es divisible entre 3 y 5.';
    } else if (number % 3 === 0) {
        result.textContent = 'El número es divisible entre 3.';
    } else if (number % 5 === 0) {
        result.textContent = 'El número es divisible entre 5.';
    } else {
        result.textContent = 'El número no es divisible ni entre 3 ni entre 5.';
    }

    // Crear una lista de números divisibles entre 3 o 5
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            let listItem = document.createElement('li');
            listItem.textContent = i;
            divisibleList.appendChild(listItem);
        }
    }
}
