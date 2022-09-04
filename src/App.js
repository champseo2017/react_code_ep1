import logo from './logo.svg';
import data from './data'
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
      <h1>Animals</h1>
      {
        data.map(animal => (
          <AnimalCard 
            key={animal.name}
            name={animal.name}
            additional={animal.additional}
            scientificName={animal.scientificName}
            diet={animal.diet}
            size={animal.size}
            showAdditional={showAdditional}
          />
        ))
      }
    </div>
  );
}

export default App;
