import styled from 'styled-components';

import {
  motion,
} from 'framer-motion';

interface OpenProps {
  open: boolean;
  error: boolean;
};

interface OptionProps {
  selected: boolean;
};

export const FieldView = styled.div`
  position: relative;
  margin-bottom: 16px;

  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  font-family: ${({ theme }) => theme.FONT.FAMILY.INTER };

  user-select: none;
  -ms-user-select: none;
`;

export const Field = styled.div<OpenProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme, open, error }) =>
    open
      ? theme.COLORS.BLUE_500
      : error
          ? theme.COLORS.ORANGE_400
          : theme.COLORS.GRAY_600
  };
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: ${({ open }) =>
    open
      ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(8, 27, 78, 0.08)'
      : 'none'
  };
  transition: all .4s;

  color: ${({ theme }) => theme.COLORS.GRAY_700 };
`;

export const Placeholder = styled.span`
  flex: 1;
`;

export const OptionsView = styled( motion.div ).attrs({
  initial: { height: 0 },
  animate: { height: 'auto'},
  exit: { height: 0 },
  transition: { duration: .2 },
})`
  position: absolute;
  top: 52px;
  right: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 240px;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
  border-radius: 8px;border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200 };

  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`;

export const Options = styled.div`
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const IconView = styled.div<OpenProps>`
  rotate: ${({ open }) => open ? '180deg' : '0deg'};
  transition: all .4s;
`;

export const SearchView = styled.div`
  padding: 8px;
`;

export const Search = styled.input`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-style: solid;
  border-width: 0.1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600 };
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 400ms;
  background-color: transparent;

  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  color: ${({ theme }) => theme.COLORS.BLUE_500 };

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.BLUE_500 };
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.FONT.SIZE.SM };
    font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR };
    color: ${({ theme }) => theme.COLORS.GRAY_600 };
  }
`;

export const Option = styled.div<OptionProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 16px;
  transition: all .2s;
  background-color: ${({ theme, selected }) => selected ? theme.COLORS.GRAY_100 : 'transparent' };

  &:active {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100 };
  }
`;

export const Label = styled.span`
  flex: 1;
  margin-left: 8px;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  color: ${({ theme }) => theme.COLORS.BLUE_900 };
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Loading = styled( motion.div ).attrs({
  initial: { rotate: '0deg'},
  animate: { rotate: '360deg'},
  transition: {
    duration: 1.6,
    repeatType: 'loop',
    repeat: Infinity,
  },
})`
  display: flex;
  align-self: center;
  padding: 8px;
  color: ${({ theme }) => theme.COLORS.BLUE_500 };
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.FONT.SIZE.XS };
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM };
  color: ${({ theme }) => theme.COLORS.ORANGE_400 };
  margin-left: 8px;
`;
