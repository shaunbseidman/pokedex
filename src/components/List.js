import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
        width: '120px',
        height: '120px',
        margin: '10px',
        backgroundColor: 'blue',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.16)'
    }
  });

const List = ({title, image, name, num}) => {
  const classes = useStyles();

    return(
        <Card className={classes.root}>
 
        </Card>
    )
}

export default List;