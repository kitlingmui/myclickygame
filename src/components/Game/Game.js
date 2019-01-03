import React, { Component } from 'react'
import Pokemon from './pokemon.json'
import PokemonCard from './gameComponents/PokemonCard'
import shuffle from 'shuffle-array'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    maxwidth: '100%',
    backgroundColor: 'khaki'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  mygrid: {
    marginLeft: '5%',
  }
});

class Game extends Component {
  state = {
    pokemon: [],
    clicked: []
  }

  componentDidMount =() => {
  this.setState({ pokemon: shuffle(Pokemon)})
  }

  // When on click each pokemon image 
  handleClick = name => {
    if (this.state.clicked.indexOf(name) !== -1){
      alert ('You lose! Please click "New Game" to restart')
      this.state.clicked = []
    }
    else {
      let clickedArr = this.state.clicked
      clickedArr.push(name)
      this.setState({ pokemon: shuffle(Pokemon), clicked: clickedArr})
    }
  }

  render () {
    const { classes } = this.props; 
    return (
      <>
      <div className={classes.root}>
      <h1>Your Score:{this.state.clicked.length}</h1>
      <Grid className={classes.mygrid} container spacing = {32}>
      {
        this.state.pokemon.map((pokemon, index) => index < 16 
        ? 
        <Grid onClick={ () => this.handleClick(pokemon.name)} item xs={3}>
        <PokemonCard name={pokemon.name} image={pokemon.image} />
        </Grid> 
        : null )
      }
      </Grid>
      </div>
      </>
    )
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);




