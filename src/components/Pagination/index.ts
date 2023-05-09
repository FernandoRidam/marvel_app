import styled from 'styled-components';

import ReactPaginate from 'react-paginate';

export const Pagination = styled( ReactPaginate )`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  border: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400 };
  border-radius: 8px;
  list-style-type: none;

  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  font-size: ${({ theme }) => theme.FONT.SIZE.SM };
  color: ${({ theme }) => theme.COLORS.BLUE_200 };

  user-select: none;
  -ms-user-select: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 100%;
    border: solid;
    border-width: 0;
    border-left-width: 1px;
    border-right-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_400 };
  }

  li > a {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0px 16px;
  }

  li.previous, li.next {
    color: ${({ theme }) => theme.COLORS.BLUE_600 };

    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_200 };
    }
  }

  li.previous {
    color: ${({ theme }) => theme.COLORS.BLUE_600 };

    svg {
      margin-right: 8px;
    }
  }

  li.next {
    color: ${({ theme }) => theme.COLORS.BLUE_600 };

    svg {
      margin-left: 8px;
    }
  }

  li.selected {
    color: ${({ theme }) => theme.COLORS.BLUE_600 };
    background-color: ${({ theme }) => theme.COLORS.GRAY_100 };

    svg {
      margin-left: 8px;
    }
  }

  & li:first-child {
    border-left-width: 0px;
  }

  & li:last-child {
    border-right-width: 0px;
  }
`;
