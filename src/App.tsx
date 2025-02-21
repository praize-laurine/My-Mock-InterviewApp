import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/public-layout';
import HomePage from '@/components/routes/home';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<PublicLayout/>}>
        <Route index element={<HomePage/>} />
      </Route>

      {/* authentication layout */}





      </Routes>
    </Router>
  )
}

export default App