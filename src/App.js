import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
