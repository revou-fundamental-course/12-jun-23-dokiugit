document.getElementById('temperatureForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get user input
  var temperatureInput = document.getElementById('temperatureInput').value;
  var scaleSelect = document.getElementById('scaleSelect').value;
  
  // Validate input
  if (isNaN(temperatureInput)) {
    alert('Please enter a valid temperature!');
    return;
  }
  
  // Perform temperature conversion
  var convertedTemperature;
  var conversionExplanation;
  
  if (scaleSelect === 'celsius') {
    convertedTemperature = (temperatureInput - 32) * 5/9;
    conversionExplanation = temperatureInput + '°F is equal to ' + convertedTemperature.toFixed(2) + '°C.';
  } else if (scaleSelect === 'fahrenheit') {
    convertedTemperature = (temperatureInput * 9/5) + 32;
    conversionExplanation = temperatureInput + '°C is equal to ' + convertedTemperature.toFixed(2) + '°F.';
  }
  
  // Display the conversion result
  document.getElementById('conversionResult').innerHTML = conversionExplanation;
});
