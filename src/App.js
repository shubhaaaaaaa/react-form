import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx'
import Error from './components/Error.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Login from './authentication/Login.tsx';
import Signup from './authentication/Signup.tsx';
import Success from './components/Success.tsx';

import ProtectedRoute from './routes/ProtectedRoute.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
