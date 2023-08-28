import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.beige};
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;
