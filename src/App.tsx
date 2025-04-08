import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/public-layout';
import HomePage from '@/components/routes/home';
import AuthenticationLayout from '@/layouts/auth-layout';
import { SignInPage } from '@/components/routes/sign-in';
import { SignUpPage } from '@/components/routes/sign-up';
import ProtectedRoutes from './layouts/protected-routes';
import MainLayout from './layouts/main-layout';
import { Generate } from './components/generate';
import { Dashboard } from './components/routes/dashboard';
import { CreateEditPage } from './components/routes/create-edit-page';
import { MockLoadPage } from './components/routes/mock-load-page';
import { MockInterviewPage } from './components/routes/mock-interview-page';
import { Feedback } from './components/routes/feedback';
import About from './components/routes/about';
import Service from './components/routes/services';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Service/>} />

        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/sign-in/*" element={<SignInPage/>} />
          <Route path="/sign-up/*" element={<SignUpPage/>} />
        </Route>

        {/* protected route setup */}

        <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>

        {/* add all the protected routes */}
        <Route element={<Generate />} path="/generate"> 
          <Route index element={<Dashboard />}/>
          <Route path=":interviewId" element={<CreateEditPage />} />
          <Route path="interview/:interviewId" element={<MockLoadPage />} />
          <Route path="interview/:interviewId/start" element={<MockInterviewPage />}/>
          <Route path="feedback/:interviewId" element={<Feedback />} />
        </Route>
        
        </Route>
      
      </Routes>
    </Router>
  );
};

export default App;