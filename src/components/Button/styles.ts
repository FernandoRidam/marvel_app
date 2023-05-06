import styled from 'styled-components';

export const Action = styled.button`
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  height: 56px;
  border-radius: 8px;
  background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.GRAY_300 : theme.COLORS.BLUE_700 };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-size: ${({ theme }) => theme.FONT.SIZE.LG };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  color: ${({ theme }) => theme.COLORS.WHITE };
  transition: all 200ms;

  &:active {
    background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.GRAY_300 : theme.COLORS.BLUE_500 };
  }
`;

export const IconView = styled.div`
  margin-left: 8px;
`;
