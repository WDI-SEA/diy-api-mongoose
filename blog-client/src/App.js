import Home from './components/pages/Home'
import Bounty from './components/pages/Bounty'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <main>
        <Routes>

            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/blog/:id"
              element={<Blog />}
            />
            

        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
