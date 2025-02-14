import { plantList } from "../datas/plantList";

function Categories({activeCategory, setActiveCategory}) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        )
        return (
            <div className='lmj-categories'>
                <select name="categories" id="category-select" onChange={(e) => setActiveCategory(e.target.value)}>
                    <option value="">--Please choose an option--</option>
                    {categories.map((cat) => (
                        <option 
                            value={cat} 
                            key={cat}
                            
                            className='lmj-categories-select'
                        >
                            {cat}
                        </option>
                    ))}
                </select>
                <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
            </div>
        )
}
export default Categories;