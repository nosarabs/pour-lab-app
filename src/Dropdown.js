import React, { useState } from 'react';

const Dropdown = ({ options, initialSelected, onSelect }) => {
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
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {selectedOption}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
