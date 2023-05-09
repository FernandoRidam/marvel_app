import {
  Agent,
} from '../../@types/agent';

import {
  Card,
  Avatar,
  Info,
  Name,
  Description,
} from './styles';

interface CardAgentProps {
  agent: Agent;
  onClick?: () => void;
};

export const CardAgent: React.FC<CardAgentProps> = ({
  agent,
  onClick = () => {},
}) => {
  return (
    <Card
      onClick={ onClick }
    >
      <Avatar
        url={`${ agent.thumbnail.path }/landscape_large.${ agent.thumbnail.extension }`}
      />

      <Info>
        <Name>{ agent.name }</Name>

        <Description>{ agent.description }</Description>
      </Info>
    </Card>
  );
};
