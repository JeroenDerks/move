import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 1;
  display: flex;
  justify-content: space-between;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
  display: flex;
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 1.5rem;
  text-decoration: none;
`;
