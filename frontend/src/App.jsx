import './App.css'
import Home from './pages/home'
import Account from './pages/account'
import {HashRouter , Routes, Route} from "react-router-dom"
import Register from './components/account/register'
import Reset from './components/account/reset'
import Dashboard from './pages/dashboard'
import PrivateRoute from './Route/privateRoute'

function App() {
  return (
    <> 
    <HashRouter basename={'/Mind-Script_Frontend'}>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/account/register' element={<Register />}></Route>
        <Route path='/account/reset' element={<Reset />}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
