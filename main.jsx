import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RollingBanner.css';

function RollingBanner({ quotes }) {
  return (
    <div className="rolling-banner">
      <div className="banner-inner">
        {quotes.map((quote, index) => (
          <div key={index} className="banner-item">{quote}</div>
        ))}
      </div>
    </div>
  );
}

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [heightCm, setHeightCm] = useState('');

  const motivationalQuotes = [
    "Health is not about the weight you lose, but about the life you gain.",
    "A healthy outside starts from the inside.",
    "It’s not about being the best, it’s about being better than you were yesterday."
  ];

  function calculateBMI(e) {
    e.preventDefault(); // Prevent form submission from reloading the page
    const height = heightCm / 100;

    if (!isValidInput(weight, height)) {
      toast.error('Please ensure the height is at least 50 cm and the weight is at least 10 kg.');
      return;
    }

    const bmiValue = (weight / (height ** 2)).toFixed(2);
    displayBMIResult(bmiValue, height);
  }

  function calculateIdealWeightRange(height, lowerBMI, upperBMI) {
    const lower = (lowerBMI * (height ** 2)).toFixed(1);
    const upper = (upperBMI * (height ** 2)).toFixed(1);
    return { lower, upper };
  }

  function displayBMIResult(bmiValue, height) {
    const [lowerHealthyBMI, upperHealthyBMI] = [18.5, 24.9];
    let message = `Your BMI is ${bmiValue}.`;

    if (bmiValue < lowerHealthyBMI || bmiValue > upperHealthyBMI) {
      const idealWeight = calculateIdealWeightRange(height, lowerHealthyBMI, upperHealthyBMI);
      message += ` The healthy weight range for your height is between ${idealWeight.lower} kg and ${idealWeight.upper} kg.`;
    }

    toast.info(message);
  }

  function isValidInput(weight, height) {
    return weight >= 10 && height >= 0.5;
  }

  return (
    <div id="app">
      <RollingBanner quotes={motivationalQuotes} />
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <input
          type="number"
          id="weight"
          placeholder="Weight in kilograms"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          id="heightCm"
          placeholder="Height in centimeters"
          value={heightCm}
          onChange={(e) => setHeightCm(e.target.value)}
        />
        <button type="submit">
          Calculate BMI
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

ReactDOM.render(<BMICalculator />, document.getElementById('root'));
