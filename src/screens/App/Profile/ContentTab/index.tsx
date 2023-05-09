import {
  useState,
} from 'react';

import {
  AnimatePresence,
} from 'framer-motion';

import {
  Card,
  Content,
  Description,
  Info,
  ListItem,
  Name,
  Tab,
  TabView,
  Tabs,
} from './styles';

import {
  Divider,
  Avatar,
} from '../../../../components';

import {
  Agent,
} from '../../../../@types/agent';

interface ContentTabProps {
  agent: Agent;
};

export const ContentTab: React.FC<ContentTabProps> = ({
  agent,
}) => {
  const tabs = [
    'Overview',
    'Teams',
    'Powers',
    'Species',
    'Authors',
  ];

  const teams = [
    'Team 1',
    'Team 2',
    'Team 3',
    'Team 4',
  ];

  const powers = [
    'Power 1',
    'Power 2',
    'Power 3',
    'Power 4',
  ];

  const species = [
    'Specie 1',
    'Specie 2',
    'Specie 3',
    'Specie 4',
  ];

  const authors = [
    'Author 1',
    'Author 2',
    'Author 3',
    'Author 4',
  ];

  const [ selectedTab, setSelectedTab ] = useState<string>('Overview');

  const getContentTab = ( tab: string ) => {
    switch ( tab ) {
      case 'Overview':
        return (
          <Content key="profile-agent-overview">
            <Card>
              <Avatar
                url={`${ agent.thumbnail.path }/standard_medium.${ agent.thumbnail.extension }`}
                size={ 90 }
              />

              <Info>
                <Name>{ agent.name }</Name>

                <Description>{ agent.description }</Description>
              </Info>
            </Card>
          </Content>
        );
      case 'Teams':
        return (
          <Content key="profile-agent-teams">
            {
              teams.map(( team ) => <ListItem key={ team }>{ team }</ListItem>)
            }
          </Content>
        );
      case 'Powers':
        return (
          <Content key="profile-agent-powers">
            {
              powers.map(( power ) => <ListItem key={ power }>{ power }</ListItem>)
            }
          </Content>
        );
      case 'Species':
        return (
          <Content key="profile-agent-species">
            {
              species.map(( specie ) => <ListItem key={ specie }>{ specie }</ListItem>)
            }
          </Content>
        );
      case 'Authors':
        return (
          <Content key="profile-agent-authors">
            {
              authors.map(( author ) => <ListItem key={ author }>{ author }</ListItem>)
            }
          </Content>
        );
      default:
        return (
          <Content key="profile-agent-default" />
        );
    }
  };

  return (
    <TabView>
      <Tabs>
        {
          tabs.map(( tab ) =>
            <Tab
              key={ tab }
              onClick={() => setSelectedTab( tab )}
              selected={ selectedTab === tab }
            >
              { tab }
            </Tab>
          )
        }
      </Tabs>

      <Divider />

      <AnimatePresence>
        { getContentTab( selectedTab )}
      </AnimatePresence>
    </TabView>
  );
};
