import "./App.css";
import paintings from "./paintings.json";
import PaintingList from "./components/PaintingList";

function App() {
  return <div>{<PaintingList paintings={paintings} />}</div>;
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
