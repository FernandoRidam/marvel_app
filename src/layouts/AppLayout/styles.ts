import styled from 'styled-components';

interface ItemMenuProps {
  selected?: boolean;
};

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.WHITE };

  #left-menu-app-layout-id {
    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.SM }) {
      width: 155px;
    };
  }

  #agent-grid-view-id {
    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.LG }) {
      grid-template-columns: repeat( 3, 1fr );

      li:nth-child( 9 ) {
        grid-column: auto;
      };

      li:nth-child( 10 ) {
        grid-column: auto / span 3;
      };
    };

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.MD }) {
      grid-template-columns: repeat( 2, 1fr );

      li:nth-child( 10 ) {
        grid-column: auto;
      };
    };

    @media (max-width: ${({ theme }) => theme.BREAKPOINTS.XS }) {
      grid-template-columns: 1fr;

      li {
        grid-column: auto;
      }
    };
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 100%;
  transition: all .2s;

  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;

export const TopMenu = styled.div`
  padding-top: 24px;
  padding-bottom: 16px;
`;

export const ItemMenu = styled.button<ItemMenuProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px;
  border: none;
  background-color: transparent;
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  font-size: ${({ theme }) => theme.FONT.SIZE.SM };
  color: ${({ theme, selected }) => selected ? theme.COLORS.ORANGE_500 : theme.COLORS.BLACK };
  transition: all .2s;

  &:active {
    opacity: .6;
  }
`;
