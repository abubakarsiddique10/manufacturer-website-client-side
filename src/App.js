import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </Layout>
  );
}

export default App;
