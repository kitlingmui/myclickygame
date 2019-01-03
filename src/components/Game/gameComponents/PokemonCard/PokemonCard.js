import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 200,
    textAlign: 'center'
  },
  media: {
    margin: 'auto',
    width: '70px',
    height: '60px',
    objectFit: 'fixed'
  }
}

const PokemonCard = (props) => {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={props.name}
          className={classes.media}
          height='50'
          src={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PokemonCard)