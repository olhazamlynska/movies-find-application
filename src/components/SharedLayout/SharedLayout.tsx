import Box from '../Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, List } from './SharedLayout.styled';
import Loader from '../Loader';

export const SharedLayout: React.FC = () => {
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

      <Suspense fallback={<Loader />}>
        <Box as={'main'} flex={1}>
          <Outlet />
        </Box>
      </Suspense>

      <Box as={'footer'}></Box>
    </Container>
  );
};
