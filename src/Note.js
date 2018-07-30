import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactFontFace from 'react-font-face';
import BadScriptRegular from './BadScript-Regular.ttf';
import {styles} from './const/StyleConst.js'

class Note extends React.Component {

  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

  handleClick() {
    this.props.onDeleteNoteButton(
      this.props.id
    )
  }

  render() {

    return (
      <Grid container
            direction='column'
            style={styles.note}
            alignItems='flex-start'
            justify='space-between'>

          <Grid item xs>
            <Typography variant='Headline' style={styles.word}>{this.props.title}</Typography>
          </Grid>

          <Grid container
                direction='row'
                justify= 'space-between'
                alignItems='flex-end'>

            <Button onClick={this.handleClick} variant="fab" mini color="secondary">
               X
             </Button>

             <Typography variant='caption' align='right'>
                Create date: {this.props.createDate}<br/>Time passed: {this.props.passedTime}
             </Typography>

          </Grid>
    </Grid>

    )
  }
};

export default connect(
  state => ({
    propsToStore: state
  }),
  dispatch => (
    {
    onDeleteNoteButton: (note) => {
      dispatch ({type: 'DELETE_NOTE', payload: note})
    }
  }
)
)(Note);
