import React, { useState } from 'react';

const RangeInput = ({ min, max, step, initialValue, onChange }) => {
    const [value, setValue] = useState(initialValue || min);

    // Handle range input change
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue); // Pass the new value to the parent component
        }
    };

    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
            />
            {/* <span>{value}</span> Display the current value */}
        </div>
    );
};

export default RangeInput;
