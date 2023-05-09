import styled from 'styled-components';

interface AvatarProps {
  url: string;
  size: number;
};

export const Avatar = styled.div<AvatarProps>`
  ${({ size }) => `
    width: ${ size }px;
    height: ${ size }px;
    border-radius: ${ size }px;
  `}

  background-image: url(${({ url }) => url });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
`;
