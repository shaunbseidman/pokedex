import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import  '../styles/list.scss';

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
            <div className="types">
                <h4 className="types-header">Type: </h4>
                <div className="types-type">
                {type.map(pokeType => (
                        <div>{pokeType}</div>
                    ))}
                </div>
            </div>
            <div className="weaknesses">
                <h4 className="weaknesses-header">Type: </h4>
                <div className="weaknesses-weakness">
                {weaknesses.map(weakness => (
                        <div>{weakness}</div>
                    ))}
                </div>
            </div>
            <img src={image} alt={title} />
        </Card>
      </div>

  );
}
