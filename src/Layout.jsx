import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/counter"}>Counter</NavLink></li>
        <li><NavLink to={"/quizz"}>Quizz</NavLink></li>
      </ul>
      <Outlet/>
    </>
  )
}

export default Layout
