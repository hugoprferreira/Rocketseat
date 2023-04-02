import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  color: ${(props) => props.theme["gray-100"]};
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme["gray-100"]};

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme["gray-700"]};
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme["green-500"]};
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  gap: 0.5rem;
  cursor: pointer;

  color: ${(props) => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-700"]};
  }
`;
