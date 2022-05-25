import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Authentication/RequireAuth';
import NotFound from './components/NotFound';
import Purchase from './components/Purchase';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
