import React, { useState } from 'react';
import ThemeToggle from "./ThemeToggle";


const Config = ({ onAddBrewingMethod, onAddCoffeeType }) => {
    const [newMethod, setNewMethod] = useState('');
    const [newCoffeeType, setNewCoffeeType] = useState('');

    const handleAddMethod = () => {
        onAddBrewingMethod(newMethod);
        setNewMethod('');
    };

    const handleAddCoffeeType = () => {
        onAddCoffeeType(newCoffeeType);
        setNewCoffeeType('');
    };

    return (
        <div>
            <h2>Configuration</h2>
            <div>
                <h3>Add Brewing Method</h3>
                <input 
                    type="text" 
                    value={newMethod} 
                    onChange={(e) => setNewMethod(e.target.value)} 
                    placeholder="Enter new brewing method"
                />
                <button onClick={handleAddMethod}>Add Method</button>
            </div>
            <div>
                <h3>Add Coffee Type</h3>
                <input 
                    type="text" 
                    value={newCoffeeType} 
                    onChange={(e) => setNewCoffeeType(e.target.value)} 
                    placeholder="Enter new coffee type"
                />
                <button onClick={handleAddCoffeeType}>Add Coffee Type</button>
            </div>
            <ThemeToggle />

        </div>
    );
};

export default Config;
