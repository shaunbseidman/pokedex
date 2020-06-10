import React, {useEffect, useState} from 'react';
import List from './List';
import Card from '@material-ui/core/Card';
import {TextField} from "@material-ui/core";
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

export default function Pokemon({weaknesses, title, image, name, number, type}) {
    const classes = useStyles();

  return (
      <div>
        <Card className={classes.root}>
            <h2>Name: {name}</h2>
            <p>Number: {number}</p>
            <div>
               Type: {type.map(pokeType => (
                    <p>{pokeType}</p>
                ))}
            </div>
            <div>
            Weaknesses: {weaknesses.map(weakness => (
                    <p>{weakness}</p>
                ))}
            </div>
            <img src={image} alt={title} />
        </Card>
      </div>

  );
}
