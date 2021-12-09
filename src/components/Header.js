import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-Slice';

const Header = () => {
  const islogin = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const logoutHandler =() =>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {islogin &&<a href='/'>My Products</a>}
          </li>
          <li>
           {islogin &&<a href='/'>My Sales</a>} 
          </li>
          <li>
            {islogin && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
