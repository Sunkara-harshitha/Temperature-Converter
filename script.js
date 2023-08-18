document.getElementById("convert").addEventListener("click", function() {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = celsiusInput * 9/5 + 32;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${celsiusInput.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
  });
  