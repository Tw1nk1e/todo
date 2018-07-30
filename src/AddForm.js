import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReactFontFace from 'react-font-face';
import BadScriptRegular from './BadScript-Regular.ttf';
import {styles} from './const/StyleConst.js'
import Grid from '@material-ui/core/Grid';

class AddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        value: '',
        open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.onAddNoteButton(this.state.value)
    this.setState({value: '', open: false});
  }

render() {
  return (
    <div>
      <Button onClick={this.handleClickOpen} style={{marginTop: 20}} variant="contained" size="large" color="primary">ADD</Button>
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogContent style={styles.addform}>
          <Grid container
                direction='column'
                alignItems='center'
                justify='space-between'
                style={styles.addFormGrid}>
              <Grid item>
                <TextField onChange={this.handleChange}
                           multiline
                           style={styles.fontAddForm}
                           autoFocus="autoFocus"
                           margin="dense"
                           id="addform"
                           type="text"/>
              </Grid>
              <Grid item>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleSubmit} color="primary" disabled={!this.state.value ? true : false}>
                    Add
                  </Button>
                </DialogActions>
              </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
    )
  }
}

export default connect(
  state => ({
  propsToStore: state
}),
  dispatch => ({
    onAddNoteButton: (note) => {
      dispatch ({type: 'ADD_NOTE', payload: note})
      }
    }
  )
)(AddForm);
