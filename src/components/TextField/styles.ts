import styled from 'styled-components';

interface InputProps {
  focused: boolean;
  error?: boolean;
};

export const FormFieldView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
`;

export const InputView = styled.div<InputProps>`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 0.1px;
  border-color: ${({ theme, focused, error }) =>
    focused
      ? theme.COLORS.BLUE_500
      : error
          ? theme.COLORS.ORANGE_400
          : theme.COLORS.GRAY_600
  };
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 400ms;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  height: 56px;
  border: none;
  background-color: transparent;

  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  color: ${({ theme }) => theme.COLORS.BLUE_500 };

  &::placeholder {
    font-size: ${({ theme }) => theme.FONT.SIZE.SM };
    font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR };
    color: ${({ theme }) => theme.COLORS.GRAY_600 };
  }
`;

export const IconView = styled.div<InputProps>`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  color: ${({ theme, focused, error }) =>
    focused
      ? theme.COLORS.BLUE_500
      : error
          ? theme.COLORS.ORANGE_400
          : theme.COLORS.GRAY_600
  };
  transition: all 400ms;
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.FONT.SIZE.XS };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  color: ${({ theme }) => theme.COLORS.ORANGE_400 };
  margin-left: 8px;
`;
