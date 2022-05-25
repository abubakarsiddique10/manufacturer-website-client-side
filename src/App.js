import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RequireAuth from './Authentication/RequireAuth';
import NotFound from './components/NotFound';
import Purchase from './components/Purchase';
import Dasbborad from './Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders';
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
        <Route path='/dashboard' element={<RequireAuth><Dasbborad /></RequireAuth>} >
          <Route index element={<MyOrders />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
