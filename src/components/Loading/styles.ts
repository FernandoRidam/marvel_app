import styled from 'styled-components';

import {
  motion,
} from 'framer-motion';

export const LoadView = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Spin = styled( motion.div ).attrs({
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
