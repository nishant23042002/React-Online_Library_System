import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { bookStore } from './utils/bookStore'


function App() {

  return (
    <Provider store={ bookStore }>
      <Navbar />
      <Outlet />
    </Provider>
  )
}

export default App
