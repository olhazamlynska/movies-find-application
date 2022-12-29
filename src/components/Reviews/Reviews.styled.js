import styled from 'styled-components';
export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
`;

export const Item = styled.li`
  width: 100%;
  height: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: 2px solid ${p => p.theme.colors.accentColor};
`;

export const Name = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Text = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
`;
