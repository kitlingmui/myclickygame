import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
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
  picture:{
    height: '70vh',
    width: '100%',
    objectFit: 'cover'
  }
});

class Home extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <>
      <Grid container spacing= {0}>
      <Grid item xs={12}>
        <img className={classes.picture} src="https://stmed.net/sites/default/files/pokemon-wallpapers-26050-4111685.jpg" alt="PokePic'" />
      </Grid>
      </Grid>
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>What is this?</Typography>
            <Typography className={classes.secondaryHeading}>Name of the Game</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Pokemon Clicky Game
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>How to play?</Typography>
            <Typography className={classes.secondaryHeading}>
              Game Instruction
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            User needs to click on different image on the screen. 
            Each image should listen for click events.
            Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
            The application should keep track of the user's score. 
            The user's score will be incremented when clicking an image for the first time. 
            The user's score will be reset to 0 if they click the same image more than once.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

