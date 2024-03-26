document.getElementById('calculate').addEventListener('click', function() {
  const weight = getInputElementValue('weight');
  const heightCm = getInputElementValue('heightCm');
  const height = heightCm / 100;

  if (!isValidInput(weight, height)) {
      displayMessage('Height must be at least 50 cm and weight at least 10 kg.');
      return;
  }

  const bmi = calculateBMI(weight, height);
  displayBMIResult(bmi, height);
});

function getInputElementValue(elementId) {
  return parseFloat(document.getElementById(elementId).value);
}

function calculateBMI(weight, height) {
  return (weight / (height ** 2)).toFixed(2);
}

function displayBMIResult(bmi, height) {
  let message = `Your BMI is ${bmi}.`;
  
  const [lowerHealthyBMI, upperHealthyBMI] = [18.5, 24.9];

  if (bmi < lowerHealthyBMI || bmi > upperHealthyBMI) {
      const idealWeight = calculateIdealWeightRange(height, lowerHealthyBMI, upperHealthyBMI);
      message += ` The healthy weight range for your height is between ${idealWeight.lower} kg and ${idealWeight.upper} kg.`;
  }

  displayMessage(message);
}

function calculateIdealWeightRange(height, lowerBMI, upperBMI) {
  const lower = (lowerBMI * (height ** 2)).toFixed(1);
  const upper = (upperBMI * (height ** 2)).toFixed(1);
  return { lower, upper };
}

function isValidInput(weight, height) {
  const minHeight = 0.5; // Minimum height in meters (50 cm)
  const minWeight = 10; // Minimum weight in kg
  return weight >= minWeight && height >= minHeight;
}

function displayMessage(message) {
  document.getElementById('result').textContent = message;
}
