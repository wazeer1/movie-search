import './App.css';
import Header from './screens/Header';
import New from './screens/New'
import Spotlight from './screens/Spotlight';
import Daynavig from './screens/Daynavig';
import Search from './screens/Search'

function App() {
  return (
    <div className="App">
      <Spotlight />
      <New />
      <Daynavig />
      <Search />
    </div>
  );
}

export default App;
