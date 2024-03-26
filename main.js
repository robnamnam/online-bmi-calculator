document.getElementById('calculate').addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('heightCm').value);
  const height = heightCm / 100;
  const bmi = (weight / (height * height)).toFixed(2);
  const resultElement = document.getElementById('result');
  let message = `Your BMI is ${bmi}.`;

  // A healthy BMI range is typically considered to be from 18.5 to 24.9
  const lowerHealthyBMI = 18.5;
  const upperHealthyBMI = 24.9;

  if (bmi < lowerHealthyBMI || bmi > upperHealthyBMI) {
      const idealWeightLower = (lowerHealthyBMI * (height * height)).toFixed(1);
      const idealWeightUpper = (upperHealthyBMI * (height * height)).toFixed(1);
      message += ` The healthy weight range for your height is between ${idealWeightLower} kg and ${idealWeightUpper} kg.`;
  }

  resultElement.textContent = message;
});
