import styled from "styled-components";

export const Title = styled.span`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  font-size: ${({ theme }) => theme.FONT.SIZE.XL };
  margin-bottom: 16px;

  span:first-child {
    color: ${({ theme }) => theme.COLORS.BLUE_700 };
  };

  span:last-child {
    color: ${({ theme }) => theme.COLORS.ORANGE_400 };
  };
`;
