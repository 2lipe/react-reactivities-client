import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

import { Activity } from '../models/activity';
import { Response } from '../models/response';
import { NavBar } from './components/navbar/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Response<Activity[]>>('http://localhost:5000/api/v1/activities')
      .then(({ data: { data } }) => {
        setActivities(data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />

      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
}

export default App;
