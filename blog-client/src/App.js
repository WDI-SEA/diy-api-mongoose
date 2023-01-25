import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import NewBlog from './components/pages/NewBlog';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-blog' element={<NewBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
