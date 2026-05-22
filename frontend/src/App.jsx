import logo from './logo.svg';
import './App.css';
import KategoriaSelect from './components/KategoriaSelect'
import EgyEsemeny from './components/EgyEsemeny';

function App() {
  return (
    <div className="container-mt-4">
      <h1 className="mb-3">Események neked</h1>
      <KategoriaSelect/>
      <EgyEsemeny/>
    </div>
  );
}

export default App;
