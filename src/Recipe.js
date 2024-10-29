import React from 'react';
import styles from './Recipe.module.css'

function getPourSchedule(recipeName, method, coffee, grams, ratio) {
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
        for (let i = 0; i < 3; i++) {
            const thirds = (totalWater * 0.6) / 3;
            pours.push(pours[pours.length-1]+thirds);
        }
    }

    return pours;
}

function seconds2Minutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

const Recipe = ({ recipeName, method, coffee, grams, ratio }) => {

    // const [selectedRecipe, setRecipe] = useState(recipeName);
    const pours = getPourSchedule(recipeName, method, coffee, grams, ratio) 
    console.log(recipeName, method, coffee, grams, ratio, pours);

    return (
        <div>
            <ul className="list-group">
                {pours.map((step, index) => (
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                        <span className={styles.leftContent}>{step}g</span>
                        <span className={styles.rightContent}>{seconds2Minutes((index+1)*35)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;
