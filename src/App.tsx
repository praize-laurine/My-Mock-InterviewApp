import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/public-layout';
import HomePage from '@/components/routes/home';
import AuthenticationLayout from '@/layouts/auth-layout';
import { SignInPage } from '@/components/routes/sign-in';
import { SignUpPage } from '@/components/routes/sign-up';
import ProtectedRoutes from './layouts/protected-routes';
import MainLayout from './layouts/main-layout';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/sign-in/*" element={<SignInPage/>} />
          <Route path="/sign-up/*" element={<SignUpPage/>} />
        </Route>

        {/* protected route setup */}

        <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>

        {/* add all the protected routes */}
        
        </Route>
      
      </Routes>
    </Router>
  );
};

export default App;