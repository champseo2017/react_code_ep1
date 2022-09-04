import logo from './logo.svg';
import animal from './data'
import AnimalCard from './components/AnimalCard/AnimalCard'
import './App.css';

const showAdditional = (additional) => {
  if (additional) {
    const alertInformation = Object.entries(additional)
  .map((information) => {
    return `${information[0]}: ${information[1]}`
  })
  .join('\n');
  
  alert(alertInformation)
  }
}

function App() {
  return (
    <div className="wrapper">
      {animal.map(animal => <AnimalCard
        diet={animal.diet}
        key={animal.name}
        name={animal.name}
        size={animal.size}
      />)}
    </div>
  );
}

export default App;
