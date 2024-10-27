import React, { useState } from 'react';
import styles from './Recipe.module.css'

const Recipe = ({ recipeName, pouringSchedule }) => {
    const [selectedRecipe, setRecipe] = useState(recipeName);

    // Handle dropdown selection
    // const handleSelect = (option) => {
    //     setSelectedOption(option);
    //     if (onSelect) {
    //         onSelect(option); // Pass selected option to the parent component
    //     }
    // };

    return (
        <div>
            {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
            </ul> */}
            <ul class="list-group">
                <li className="list-group-item d-flex justify-content-between">
                    <span className={styles.leftContent}>Left Content</span>
                    <span className={styles.rightContent}>Right Content</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className={styles.leftContent}>Left Content</span>
                    <span className={styles.rightContent}>Right Content</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className={styles.leftContent}>Left Content</span>
                    <span className={styles.rightContent}>Right Content</span>
                </li>

            </ul>
        </div>
    );
};

export default Recipe;
