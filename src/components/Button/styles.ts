import styled from 'styled-components';

export interface ActionProps {
  fullWidth?: boolean;
  size?: 'large' | 'small';
};

export const Action = styled.button<ActionProps>`
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  ${({ fullWidth }) => !fullWidth && `
    align-self: flex-end;
    padding-left: 20px;
    padding-right: 20px;
  `}
  ${({ theme, size }) => {
    switch ( size ) {
      case 'large':
        return `
          height: 56px;
          font-size: ${ theme.FONT.SIZE.LG };
          font-weight: ${ theme.FONT.WEIGHT.BOLD };
        `;

      case 'small':
        return `
          height: 48px;
          font-size: ${ theme.FONT.SIZE.MD };
          font-weight: ${ theme.FONT.WEIGHT.SEMI_BOLD };
        `;

      default:
        return `
          height: 56px;
          font-size: ${ theme.FONT.SIZE.LG };
          font-weight: ${ theme.FONT.WEIGHT.BOLD };
        `;
    }
  }}
  border-radius: 8px;
  background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.GRAY_500 : theme.COLORS.BLUE_700 };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  color: ${({ theme }) => theme.COLORS.WHITE };
  transition: all 200ms;

  &:active {
    background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.GRAY_500 : theme.COLORS.BLUE_500 };
  }
`;

export const IconView = styled.div`
  margin-left: 8px;
`;
