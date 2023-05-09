import styled from 'styled-components';

interface AvatarProps {
  url: string;
};

export const Card = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  padding: 16px 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300 };
  border-radius: 16px;
  transition: all .2s;

  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  };

  &:active {
    opacity: .8;
  };
`;

export const Avatar = styled.div<AvatarProps>`
  width: 85px;
  height: 120px;
  border-radius: 8px;

  background-image: url(${({ url }) => url });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-left: 16px;
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD };
  font-size: ${({ theme }) => theme.FONT.SIZE.MD };
  color: ${({ theme }) => theme.COLORS.BLACK };
  margin-bottom: 8px;
  letter-spacing: -0.03em;
`;

export const Description = styled.span`
  flex: 1;
  font-family: ${({ theme }) => theme.FONT.FAMILY.EPILOGUE };
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.LIGHT };
  font-size: ${({ theme }) => theme.FONT.SIZE.XS };
  color: ${({ theme }) => theme.COLORS.BLACK };
  line-height: 12px;
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
`;
