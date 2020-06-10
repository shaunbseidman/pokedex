import React, {useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Pokemon from './Pokemon';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles({

  });

const List = ({pokemon}) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    setFilteredPokemon(
    pokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
  );
}, [search, pokemon]);

    return(
        <div>
            <TextField
                type="text"
                className={classes.searchForm}
                variant="outlined"
                placeholder="Search For A Pokemon"
                onChange={e => setSearch(e.target.value)}
            />
            <GridList cellHeight={180} className={classes.gridList}>
                {filteredPokemon.map(pokemon => (
                    <Pokemon
                    key={pokemon.id}
                    name={pokemon.name}
                    number={pokemon.num}
                    type={pokemon.type}
                    weakness={pokemon.weakness}
                    image={pokemon.img} />
                ))}
            </GridList>
        </div>
    )
}

export default List;