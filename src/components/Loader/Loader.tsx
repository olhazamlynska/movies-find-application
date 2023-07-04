import PacmanLoader from 'react-spinners/PacmanLoader';
import { Backdrop } from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <Backdrop>
      <PacmanLoader
        color="#45d2f6"
        cssOverride={{ display: 'block', margin: '0 auto', height: '30px' }}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Backdrop>
  );
};

export default Loader;
