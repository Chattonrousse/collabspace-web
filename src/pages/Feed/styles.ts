import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--zinc-900);
`;

export const Content = styled.main`
  display: flex;
  gap: 2rem;
  padding: calc(5rem + 1.5rem) 2rem 1.5rem 2rem;
`;

export const Posts = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
