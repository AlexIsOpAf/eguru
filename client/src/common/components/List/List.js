import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function CheckboxListSecondary(props) {
  const [checked, setChecked] = React.useState([]);

  console.log(props.data)


  return (
    <List dense sx={{ width: '100%',bgcolor: 'background.paper' }}>
      {props.data.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value.name}
          >
            <ListItemButton>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.name} />
              
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
