import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface NavBarProps {
  openForm: () => void;
}

export const NavBar = ({ openForm }: NavBarProps) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="reactivities application logo"
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </Menu.Item>

        <Menu.Item name="Activivites" />

        <Menu.Item>
          <Button onClick={openForm} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
