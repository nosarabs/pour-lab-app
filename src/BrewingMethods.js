import React, { useState } from 'react';

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const BrewingMethods = () => {
    // Define options and selected method state
    const methods = ['Aeropress', 'V60', 'Origami w/ Flat Filter', 'Origami w/ Cone Filter', 'Kalita'];
    const [selectedMethod, setSelectedMethod] = useState(methods[0]); // Default to the first method

    // Update selected method when an option is clicked
    const handleSelect = (option) => {
        setSelectedMethod(option === "Random" ? methods[getRandomNum(0, methods.length - 1)] : option);
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="brewingMethodDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {selectedMethod}
            </button>

            <ul className="dropdown-menu" aria-labelledby="brewingMethodDropdown">
                {methods.map((methods, index) => (
                    <li key={index}>
                        <button
                            className="dropdown-item"
                            onClick={() => handleSelect(methods)}
                        >
                            {methods}
                        </button>
                    </li>
                ))}
                <li>
                    <hr class="dropdown-divider"></hr>
                </li>
                <li>
                <button
                    className="dropdown-item"
                    onClick={() => handleSelect("Random")}
                >
                    Random
                </button>
                </li>
            </ul>
        </div>
    );
};

export default BrewingMethods;
