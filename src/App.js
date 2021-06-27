import "./App.css";
import Painting from "./components/Painting";
import paintings from "./paintings.json";

function App() {
  return (
    <div>
      <Painting
        // imageUrl={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.url}
        name={paintings[0].author.tag}
        price={paintings[0].price}
      />
      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.url}
        name={paintings[1].author.tag}
        price={paintings[1].price}
      />
      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author.url}
        name={paintings[2].author.tag}
        price={paintings[2].price}
      />
    </div>
  );
}

export default App;

// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//       </Section>

//       <Section title="Лучшее"></Section>
//     </div>
//   );
// }
