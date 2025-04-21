import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<UserDetails />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/photos" element={<Photos />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

