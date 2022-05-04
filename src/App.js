import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import Alert from './component/layout/Alert'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFoundPage from './Pages/NotFoundPage'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import User from './Pages/User'





function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />


        <main className='container mx-auto px-3 pb-12'>
         <Alert />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfoundpage' element={<NotFoundPage />} />
              <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
    </AlertProvider>
    </GithubProvider>
  )
}

export default App


     
      
