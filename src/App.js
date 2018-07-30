import React from 'react';
import {connect} from 'react-redux'
import AddForm from './AddForm'
import NoteList from './NoteList'
import Grid from '@material-ui/core/Grid';

class App extends React.Component {

  render() {
    return (
        <Grid container
          spacing={0}
              alignItems='center'
              direction='column'
              justify='flex-start'>
                <AddForm/>
                <NoteList noteList={this.props.STORE}/>
        </Grid>

    )
  }
};

export default connect(state => ({STORE: state}))(App);
