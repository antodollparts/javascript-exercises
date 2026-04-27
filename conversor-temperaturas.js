function celsiusAFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;

}

function fahrenheitACelsius(fahrenheit) {

    return (fahrenheit - 32) * 5 / 9;

}


// Llamadas a las funciones

console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));

console.log("68°F en Celsius es: " + fahrenheitACelsius(68));
