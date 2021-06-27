import Painting from "./Painting";

function PaintingList({ paintings }) {
  return (
    <ul>
      {paintings.map((painting) => (
        <li key={painting.id}>
          <Painting
            imageUrl={painting.url}
            title={painting.title}
            author={painting.author.url}
            name={painting.author.tag}
            price={painting.price}
            quantity={painting.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;
