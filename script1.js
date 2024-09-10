function checkEligibility() {
    // Obtener los valores de los campos usando let
    let age = parseInt(document.getElementById('age').value, 10);
    let salary = parseFloat(document.getElementById('salary').value);

    // Obtener el elemento para mostrar el resultado
    let result = document.getElementById('result');

    // Verificar los criterios
    if (age > 25 && salary > 3000) {
        result.textContent = '¡Puedes aplicar a un crédito bancario!';
        result.style.color = 'green';
    } else {
        result.textContent = 'No cumples con los requisitos para aplicar a un crédito bancario.';
        result.style.color = 'red';
    }
}




