import styled from 'styled-components';

interface SlimButtonProps {
  align: 'left' | 'right';
};

export const SlimButton = styled.a<SlimButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  align-self: ${({ align }) => {
    switch ( align ) {
      case 'left':
        return 'flex-start';

      case 'right':
          return 'flex-end';

      default:
        return 'flex-start';
    }
  }};
  margin-top: 24px;

  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-size: ${({ theme }) => theme.FONT.SIZE.XS };
  color: ${({ theme }) => theme.COLORS.ORANGE_400 };
  transition: all 200ms;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: .8;
  }
`;

export const IconView = styled.div`
  margin-right: 8px;
`;
