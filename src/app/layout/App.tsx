import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

import { Activity } from '../models/activity';
import { Response } from '../models/response';
import { NavBar } from './components/navbar/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(
    undefined,
  );

  useEffect(() => {
    axios
      .get<Response<Activity[]>>('http://localhost:5000/api/v1/activities')
      .then(({ data: { data } }) => {
        setActivities(data);
      });
  }, []);

  const handleSelectActivity = (id: string) => {
    const activity = activities.find((item) => item.id === id);

    if (activity) {
      setSelectedActivity(activity);
    }
  };

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  };

  return (
    <Fragment>
      <NavBar />

      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectedActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
