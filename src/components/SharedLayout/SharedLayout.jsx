import { NavLink, Outlet } from 'react-router-dom';
import { Header, Link, List, Container } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
