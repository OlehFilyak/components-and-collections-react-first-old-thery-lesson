import defaultImage from "../default.jpg";
function Painting({
  imageUrl = defaultImage,
  title,
  author,
  name = "невідомий художник",
  price,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author}>{name}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступність: закінчується, або є в наявності</p>
      <button type="button">Додати в корзину</button>
    </div>
  );
}

export default Painting;
