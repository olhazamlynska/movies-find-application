import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, List } from './SharedLayout.styled';

export const SharedLayout = () => {

  return (
    <Container>
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
      <Box as={'main'}>
        <Outlet />
      </Box>
      <Box as={'footer'}></Box>
    </Container>
  );
};
