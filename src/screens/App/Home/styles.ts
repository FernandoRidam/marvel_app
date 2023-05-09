import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 71px;
  padding-left: 36px;
  color: ${({ theme }) => theme.COLORS.BLUE_200 };
`;

export const Search = styled.input`
  width: 35%;
  padding: 16px 0px;
  margin: 16px;
  border: none;

  font-size: ${({ theme }) => theme.FONT.SIZE.SM };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  color: ${({ theme }) => theme.COLORS.GRAY_800 };
  letter-spacing: -0.03em;

  &::placeholder {
    font-size: ${({ theme }) => theme.FONT.SIZE.XS };
    font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
    color: ${({ theme }) => theme.COLORS.GRAY_600 };
  }
`;

export const GridView = styled.ul`
  display: grid;
  grid-template-columns: repeat( 4, 1fr );
  grid-gap: 8px;
  width: 100%;
  height: 635px;
  list-style: none;
  overflow-y: auto;
  padding: 16px 24px;

  li:nth-child( 9 ), li:nth-child( 10 ) {
    grid-column: auto / span 2;
  };
`;

export const PaginationView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  border: solid;
  border-width: 0px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500 };
`;
