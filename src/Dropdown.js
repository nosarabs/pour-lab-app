import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = ({ options, initialSelected, label, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(initialSelected || options[0]);

    // Handle dropdown selection
    const handleSelect = (option) => {
        setSelectedOption(option);
        if (onSelect) {
            onSelect(option); // Pass selected option to the parent component
        }
    };

    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle dropdown-button"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span className="dropdown-label">{label}</span>
                <span className="dropdown-selection">{selectedOption}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                {options.map((option, index) => (
                    <li key={index}>
                        <button
                            className="dropdown-item"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
