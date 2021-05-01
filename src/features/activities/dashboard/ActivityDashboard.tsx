import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Activity } from '../../../app/models/activity';
import { ActivityDetails } from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';
import { ActivityList } from './ActivityList';

interface ActivityDashboardProps {
  activities: Activity[];
}

export const ActivityDashboard = ({ activities }: ActivityDashboardProps) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} />
      </Grid.Column>

      <Grid.Column width="6">
        {activities[0] && <ActivityDetails activity={activities[0]} />}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
};
