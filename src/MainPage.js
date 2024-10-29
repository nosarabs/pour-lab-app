import React, { useState } from 'react';
import Dropdown from './Dropdown';
import RangeInput from './RangeInput';
import Recipe from './Recipe'
import ThemeToggle from "./ThemeToggle";


const MainPage = () => {
    const brewingMethods = ['Aeropress', 'V60', 'Origami w/ Flat Filter', 'Origami w/ Cone Filter', 'Kalita'];
    const [method, setMethod] = useState(brewingMethods[0]);

    const coffeeTypes = ['Red Catuai Natural', 'Marsellesa Termico', 'Geisha Red Honey', 'Pacamara Honey'];
    const [coffee, setCoffee] = useState(coffeeTypes[0]);


    const minGrams = 12;
    const maxGrams = 30;
    const [grams, setGrams] = useState(minGrams);

    const minRatio = 10;
    const maxRatio = 20;
    const [ratio, setRatio] = useState(minRatio);

    const recipeName = '4:6';

    // Handle selection change
    const handleBrewingMethodSelect = (method) => {
        setMethod(method)
        console.log("Selected Brewing Method:", method);
    };

    const handleCoffeeTypeSelect = (type) => {
        setCoffee(type)
        console.log("Selected Coffee Type:", type);
    };

    const handleGramsChange = (value) => {
        setGrams(value);
        console.log("Range value:", value);
    };

    const handleRatioChange = (value) => {
        setRatio(value)
        console.log("Range value:", value);
    };

    return (
        <div className="container">

            <br></br>

            <h1>Pourly</h1>

            <br></br>

            <div className="container">
                <div>
                    <Dropdown label={"Brewing Method"} options={brewingMethods} initialSelected={method} onSelect={handleBrewingMethodSelect}/>

                    {/* <br></br> */}

                    <Dropdown label={"Variety & Process"} options={coffeeTypes} onSelect={handleCoffeeTypeSelect} />
                </div>
            </div>

            <br></br>

            <div className="container">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h6>Grams</h6>
                        <h6>{grams}g</h6>
                    </div>
                    <RangeInput min={minGrams} max={maxGrams} step={1} initialValue={12} onChange={handleGramsChange} />
                </div>

                <br></br>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h6>Ratio</h6>
                        <h6>1:{ratio}</h6>
                    </div>
                    <RangeInput min={minRatio} max={maxRatio} step={1} initialValue={10} onChange={handleRatioChange} />
                </div>
            </div>

            <br></br>

            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5> Recipe </h5>
                    <h5> <span className="badge text-bg-warning">{recipeName}</span> </h5>
                </div>
                <Recipe recipeName={recipeName} method={method} coffee={coffee} grams={grams} ratio={ratio} />
                
            </div>
            <ThemeToggle />
        </div>
    );
};

export default MainPage;
