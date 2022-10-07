import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Question from './Pages/Question';
import Score from './Pages/Score';
import Settings from './Pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* cambiar ruta  */}
        <Route index path='/' element={<Settings />} />
        <Route path='/question' element={<Question />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
