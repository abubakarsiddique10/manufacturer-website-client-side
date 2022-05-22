import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
