import styled from "styled-components";

interface TitleProps {
  size?: 'large' | 'small';
};

export const Title = styled.span<TitleProps>`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  font-size: ${({ theme, size = 'large'}) => {
    switch ( size ) {
      case 'large':
        return theme.FONT.SIZE.XL;

      case 'small':
        return theme.FONT.SIZE.LG;

      default:
        return theme.FONT.SIZE.XL;
    }
  }};
  margin-bottom: 16px;

  span:nth-child( 1 ) {
    color: ${({ theme }) => theme.COLORS.BLUE_700 };
  };

  span:nth-child( 2 ) {
    color: ${({ theme }) => theme.COLORS.ORANGE_400 };
  };

span:nth-child( 3 ) {
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.LIGHT };
  color: ${({ theme }) => theme.COLORS.GRAY_800 };
};
`;
