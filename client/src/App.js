import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import LoginPage from './users/login/LoginPage';
import Error404 from './pages/error/Error404';
import ContactPage from './pages/contact/ContactPage';
import GalleryPage from './pages/gallery/GalleryPage';
import AdminPage from './pages/admin/AdminPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/contact' index element={<ContactPage />} />
      <Route path='/gallery' index element={<GalleryPage />} />
      <Route path='/admin' index element={<AdminPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
