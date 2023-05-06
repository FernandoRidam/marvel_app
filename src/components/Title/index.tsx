import styled from "styled-components";

export const Title = styled.span`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  font-size: ${({ theme }) => theme.FONT.SIZE.XL };
  color: ${({ theme }) => theme.COLORS.BLUE_700 };
  margin-bottom: 16px;

  &::after {
    content: '.';
    color: ${({ theme, }) => theme.COLORS.ORANGE_400 };
  }
`;
