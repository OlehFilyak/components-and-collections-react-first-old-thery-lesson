// import paintings from "../paintings.json";
import defaultImage from "../default.jpg";
import PropTypes from "prop-types";
function Painting({
  imageUrl = defaultImage,
  title,
  author,
  name = "невідомий художник",
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author}>{name}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступність: {quantity < 10 ? "закінчується" : "є в наявності"}</p>
      <button type="button">Додати в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Painting;
