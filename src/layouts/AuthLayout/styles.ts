import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BLUE_800 };
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 48px 0 0 104px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.LG }px) {
    #bg-img {
      display: none;
    }

    #auth-content {
      margin-left: 0;
    }
  }
`;

export const Content = styled.div`
  padding: 40px 36px;
  border-radius: 24px;
  margin-left: 140px;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
`;
