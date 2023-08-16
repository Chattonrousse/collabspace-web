import { styled, css } from "styled-components";

interface AreaEmailProps {
  $areaEmail: boolean;
}

interface AreaPasswordProps {
  $areaPassword: boolean;
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--zinc-900);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  min-width: 320px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;

  h1 {
    color: var(--zinc-100);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  input[type="date"] {
    color: var(--zinc-300);
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(66.66%);
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  color: var(--zinc-100);
  font-weight: 300;
`;

export const Input = styled.input`
  height: 48px;
  background: var(--zinc-800);
  color: var(--zinc-300);
  font-size: 1rem;
  padding: 1.25rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: ar(--zinc-500);
  }
`;

export const AreaEmail = styled(Group)<AreaEmailProps>`
  max-height: 150px;
  transition: 0.3s ease;
  overflow: hidden;

  ${({ $areaEmail }) =>
    !$areaEmail &&
    css`
      max-height: 0;
    `}
`;

export const AreaPassword = styled(Group)<AreaPasswordProps>`
  max-height: 150px;
  transition: 0.3s ease;
  overflow: hidden;

  ${({ $areaPassword }) =>
    !$areaPassword &&
    css`
      max-height: 0;
    `}
`;

export const Button = styled.button`
  height: 48px;
  background: var(--emerald-600);
  color: var(--zinc-100);
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 1rem;
  border: 0;
  outline: 0;
  border-radius: 4px;
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    background: var(--emerald-800);
  }

  &:disabled {
    background: var(--zinc-600);
    cursor: not-allowed;
  }
`;