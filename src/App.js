import Header from './components/Header'
import AutoComplete from './components/AutoComplete';
import './App.css';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <Header />
      <AutoComplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />
      <Listing />
    </div>
  );
}

export default App;
