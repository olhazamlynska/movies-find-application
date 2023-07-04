import styled from 'styled-components';

const Text = styled.p`
  color: red;
`;

const RequestError = () => {
  return <Text>Something went wrong. Try again...</Text>;
};
export default RequestError;
