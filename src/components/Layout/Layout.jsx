import { NavLink, Outlet } from 'react-router-dom';
import  css  from './Layout.module.css';
const Layout = () => {
    
    return<>
    <nav className={css.Nav}>
        <NavLink className={css.NavLink} to="/">Home</NavLink>
        <NavLink className={css.NavLink} to="/movies">Movies</NavLink>
        </nav>
        <Outlet/>
        </>
}

export default Layout