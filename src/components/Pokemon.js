import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import  '../styles/list.scss';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginLeft: '2rem',
      marginRight: '2rem',
      marginBottom: '2rem'
    },
    title: {
      fontSize: 14,
    },
  });

export default function Pokemon({weaknesses, title, image, name, number, type}) {
    const classes = useStyles();

  return (
      <div>
        <Card className={classes.root}>
            <h2>Name: {name}</h2>
            <img src={image} alt={title} />
            <h5>Number: {number}</h5>
            <div className="types">
                <h4 className="types-header">Type:</h4>
                <div className="types-type">
                {type.map(pokeType => (
                        <div>{pokeType}</div>
                    ))}
                </div>
            </div>
            <div className="weaknesses">
                <h4 className="weaknesses-header">Weakness:</h4>
                <div className="weaknesses-weakness">
                {weaknesses.map(weakness => (
                        <div>{weakness}</div>
                    ))}
                </div>
            </div>
        </Card>
      </div>

  );
}
