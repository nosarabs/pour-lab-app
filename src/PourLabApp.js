import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Groq from "groq-sdk";


// Options for methods and process (similar to your Python script)
const methods = ['Aeropress', 'V60', 'Origami w/ Flat Filter', 'Origami w/ Cone Filter', 'Kalita', 'Random'];
const coffees = ['Red Catuai Natural', 'Marsellesa Termico', 'Geisha Red Honey', 'Pacamara Honey','Random'];

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PourLabApp() {
  const [method, setMethod] = useState(null);
  const [coffee, setCoffee] = useState(null);
  const [grams, setGrams] = useState(null);
  const [ratio, setRatio] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [aiRecipe, setAiRecipe] = useState(null);

  const handleMethodSelect = (option) => {
    setMethod(option === "Random" ? methods[getRandomNum(0, methods.length - 1)] : option);
  };

  const handleCoffeeSelect = (option) => {
    setCoffee(option === "Random" ? coffees[getRandomNum(0, coffees.length - 1)] : option);
  };
  

  const generateRecipe = () => {
    const gramsValue = getRandomNum(12, 30);
    const ratioValue = getRandomNum(10, 20);
    setGrams(gramsValue);
    setRatio(ratioValue);

    const pours = getRecipe(method, coffee, ratioValue, gramsValue);
    setRecipe(pours);
  };

  const getAiRecipe = async () => {
    // Construct the prompt string
    const prompt = `Suggest a grind size in Comandante C40 clicks for a ${method} ${coffee} coffee with a ratio of 1:${ratio}`;

    try {
        // Initialize the Groq client
        const client = new Groq({
            apiKey: process.env.REACT_APP_GROQ_KEY,
            dangerouslyAllowBrowser: true,
        });

        // Make the API call to get the AI recipe
        const response = await client.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a coffee expert assistant.' },
                { role: 'user', content: prompt },
            ],
            model: 'gemma-7b-it',
        });

        // Set the AI recipe or handle the response
        setAiRecipe(response.choices[0].message.content);
    } catch (error) {
        console.error('Error fetching AI recipe:', error);
    }
  };

  return (
    <div className="container">
      <h1>Pour Lab</h1>
      <div>
        <h3>Select a Brewing Method</h3>
        {methods.map((methodOption) => (
          <button
            key={methodOption}
            className="btn btn-primary me-2"
            onClick={() => handleMethodSelect(methodOption)}
          >
            {methodOption}
          </button>
        ))}
      </div>

      <div>
        <h3>Select a Coffee Process</h3>
        {coffees.map((coffeeOption) => (
          <button
            key={coffeeOption}
            className="btn btn-primary me-2"
            onClick={() => handleCoffeeSelect(coffeeOption)}
          >
            {coffeeOption}
          </button>
        ))}
      </div>

      {method && coffee && (
        <div>
          <p>Method: {method}</p>
          <p>Process: {coffee}</p>
          <p>Grams: {grams}</p>
          <p>Ratio: {ratio}</p>

          <button className="btn btn-success" onClick={generateRecipe}>
            Generate Recipe
          </button>

          {recipe && (
            <div>
              <h4>Recipe Steps:</h4>
              <ul>
                {recipe.map((step, index) => (
                  <li key={index}>{step}g</li>
                ))}
              </ul>

              <button className="btn btn-secondary" onClick={getAiRecipe}>
                Get AI Recipe
              </button>

              {aiRecipe && <p>AI Recipe Suggestion: {aiRecipe}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function getRecipe(method, coffee, ratio, grams) {
  const totalWater = ratio * grams;
  const bloom = 3 * grams;
  let pours = [];

  pours.push(bloom);
  pours.push(totalWater * 0.4);

  if (coffee === "Red Catuai Natural" || coffee === "Marsellesa Termico") {
    for (let i = 0; i < 2; i++) {
      const halfs = (totalWater * 0.6) / 2;
      pours.push(pours[pours.length-1]+halfs);
    }
    
  } else if (coffee === "Geisha Red Honey" || coffee === "Pacamara Honey") {
    for (let i = 0; i < 2; i++) {
      const thirds = (totalWater * 0.6) / 3;
      pours.push(pours[pours.length-1]+thirds);
    }
  }

  return pours;
}

export default PourLabApp;
