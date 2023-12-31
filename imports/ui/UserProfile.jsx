import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import { DrawerMenu } from "./DrawerMenu";

export const UserProfile = ({ user }) => {

  return (
    <div className="user-profile">
      <DrawerMenu user={user} />
      <img src={user.profile.photo} />

      <List>
        <ListItem>
          <Typography>Nome: {user.username}</Typography>
        </ListItem>

        <ListItem>
          <Typography>Email: {user.emails[0].address}</Typography>
        </ListItem>

        <ListItem>
          <Typography>Data de Nascimento: {user.profile.birth}</Typography>
        </ListItem>

        <ListItem>
          <Typography>Sexo: {user.profile.sex} </Typography>
        </ListItem>

        <ListItem>
          <Typography>Empresa: {user.profile.company}</Typography>
        </ListItem>
      </List>
    </div>
  );
};
