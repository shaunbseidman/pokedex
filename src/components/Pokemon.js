import React from 'react';
import List from './List';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Pokemon({title, image, name, number}) {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <h2>Pokemon Name: {name}</h2>
        <p>Number: {number}</p>
        <img src={image} alt={title} />
    </Card>
  );
}
