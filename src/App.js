import { Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path='/' component={<Home />} />
      </Router>
    </>
  );
}

export default App;
