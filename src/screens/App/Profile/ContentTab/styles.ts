import styled from "styled-components";

import {
  motion,
} from 'framer-motion';

interface TabProps {
  selected?: boolean;
};

export const TabView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  padding-left: 36px;
`;

export const Tabs = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 1px;
`;

export const Tab = styled.button<TabProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4px 16px 4px;
  margin-right: 16px;
  background-color: transparent;
  border: none;
  box-shadow: 0 ${({ theme, selected }) => selected ? '2px' : '0px' } 0 0;
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  font-size: ${({ theme }) => theme.FONT.SIZE.SM };
  color: ${({ theme, selected }) => selected ? theme.COLORS.BLUE_700 : theme.COLORS.GRAY_500 };
  transition: all .4s;

  &:active {
    opacity: .6;
  }
`;

export const Content = styled( motion.div ).attrs({
  initial: {
    y: 2000,
  },
  animate: {
    y: 0,
  },
  transition: {
    bounce: .15,
    duration: .6,
    type: 'spring',
  },
})`
  flex: 1;
  width: 100%;
  padding: 24px 56px 0px 0px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 32px 72px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 24px;
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  font-size: ${({ theme }) => theme.FONT.SIZE.LG };
  color: ${({ theme }) => theme.COLORS.BLUE_700 };
  margin-bottom: 16px;
  letter-spacing: -0.03em;
`;

export const Description = styled.span`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD };
  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  color: ${({ theme }) => theme.COLORS.GRAY_600 };
  line-height: 24px;
  letter-spacing: -0.03em;
`;

export const ListItem = styled.li`
  font-family: ${({ theme }) => theme.FONT.FAMILY.INTER };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD };
  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  color: ${({ theme }) => theme.COLORS.GRAY_400 };
  line-height: 24px;
  letter-spacing: 0;
`;
