import React, {useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Pokemon from './Pokemon';
import {BREAKPOINTS} from './Styles'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        margin: '6rem',
        [BREAKPOINTS.down('sm')]: {
            margin: '0',
        },
    },
    gridList: {
        margin: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        [BREAKPOINTS.down('sm')]: {
            display: 'block',
        },
    },
    searchForm: {
        margin: '0 auto',
        width: '50%',
    }
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
// pokemon.filter(poke=>poke.weaknesses.includes("Fire")).forEach(poke=>poke.name)


    return(
        <div>
            <TextField
                type="text"
                className={classes.searchForm}
                variant="outlined"
                placeholder="Search For A Pokemon"
                onChange={e => setSearch(e.target.value)}
            />
            <div className={classes.root}>
                <div className={classes.gridList}>
                    {filteredPokemon.map(pokemon => (
                        <Pokemon
                        key={pokemon.id}
                        name={pokemon.name}
                        number={pokemon.num}
                        type={pokemon.type}
                        weaknesses={pokemon.weaknesses}
                        image={pokemon.img} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List;