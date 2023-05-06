import styled from 'styled-components';

export const SubTitle = styled.span`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR };
  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  color: ${({ theme }) => theme.COLORS.GRAY_500 };
`;
