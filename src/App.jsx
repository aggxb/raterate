import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import About from './pages/About';
import UserArea from './pages/UserArea';
import TitleDetails from './pages/TitleDetails';
import List from './pages/List';
import NotFound from './pages/NotFound';
import MainLayout from './pages/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="user/:id" element={<UserArea />} />
          <Route path="title/:id" element={<TitleDetails />} />
          <Route path="list/:id" element={<List />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
