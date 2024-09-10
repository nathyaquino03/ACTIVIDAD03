function calculateFactorial() {
    // Obtener el número ingresado por el usuario
    let number = parseInt(document.getElementById('number').value, 10);
    
    // Validar si el número es no negativo
    if (number < 0) {
        document.getElementById('result').textContent = 'El número debe ser no negativo.';
        return;
    }
    
    // Calcular el factorial
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    // Mostrar el resultado
    document.getElementById('result').textContent = `El factorial de ${number} es ${factorial}.`;
}
