import './App.css'
import Home from './pages/home'
import Account from './pages/account'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Register from './components/account/register'
import Reset from './components/account/reset'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <> 
    <BrowserRouter basename={"" ? '/' : '/Mind-Script_Frontend'}>
      <Routes>
        <Route path="/" element= {<Dashboard />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/account/register' element={<Register />}></Route>
        <Route path='/account/reset' element={<Reset />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
