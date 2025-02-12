function PlantItem({ plant }) {
  return (
    <div className="plant-item">
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
    </div>
  );
}