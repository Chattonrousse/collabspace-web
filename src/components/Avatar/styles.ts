import { styled, css } from "styled-components";

interface ContainerProps {
  borderEffect?: boolean;
}

export const Container = styled.img<ContainerProps>`
  width: 56px;
  height: 56px;
  min-width: 56px;
  min-height: 56px;
  background-color: white;
  border-radius: 6px;
  object-fit: cover;

  ${({ borderEffect }) =>
    borderEffect &&
    css`
      border: 3px solid var(--zinc-800);
      box-shadow: 0 0 1px 2px var(--emerald-500);
    `}
`;
