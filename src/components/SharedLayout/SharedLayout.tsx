import Box from '../Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, List } from './SharedLayout.styled';

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
      <Box as={'main'}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
      <Box as={'footer'}></Box>
    </Container>
  );
};
