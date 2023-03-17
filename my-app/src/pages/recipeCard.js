function RecipeCard({ name, img, id }) {
  return (
    <>
      <a href={`http://localhost:3000/Recipes/${id}`}>
        <div className="box">
          <div>
            <div className="imgDiv">
              <img src={img} alt="image" />
            </div>
            <h2>{name}</h2>
          </div>
        </div>
      </a>
    </>
  );
}

export default RecipeCard;
