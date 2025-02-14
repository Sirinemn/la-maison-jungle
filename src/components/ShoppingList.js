import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({cart, updateCart, activeCategory}) {
    let filter = false
    if (activeCategory) {
        filter = true
    }
	return filter ? (
        <div className='lmj-shopping-list'>
            
            <ul className='lmj-plant-list'>
                {plantList.filter((plant)=> plant.category === activeCategory).map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    ) : (
        <div className='lmj-shopping-list'>

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList