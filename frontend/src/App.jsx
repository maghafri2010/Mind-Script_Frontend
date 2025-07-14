import './App.css'
import Home from './pages/home'
import Account from './pages/account'
import {Routes, Route} from "react-router"
import Register from './components/account/register'
import Reset from './components/account/reset'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <>
    <Dashboard />
    {/*<Routes>
      <Route path="/" element= {<Home />}></Route>
      <Route path='/account' element={<Account />}></Route>
      <Route path='/account/register' element={<Register />}> </Route>
      <Route path='/account/reset' element={<Reset />}></Route>

    </Routes> */}
      
    </>
  )
}

export default App
