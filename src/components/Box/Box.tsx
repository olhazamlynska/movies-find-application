import styled from 'styled-components';
import {
  typography,
  layout,
  space,
  flexbox,
  background,
  border,
  color,
  position,
} from 'styled-system';
import { Props } from '../../interfaces/AllCommonItefaces';

const Box = styled.div<Props>`
  ${typography};
  ${layout};
  ${space};
  ${flexbox};
  ${background};
  ${border};
  ${color};
  ${position}
`;
export default Box;
