import { plantList } from "../datas/plantList";
import { useState } from "react";

function Categories() {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        )
        return (
            <div>
                <select name="categories" id="category-select">
                    <option value="">--Please choose an option--</option>
                    {categories.map((cat) => (
                        <option 
                            value={cat} 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        )
}
export default Categories;