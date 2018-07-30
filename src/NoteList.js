import React from 'react'
import Note from './Note'
import formatDate from './Utils/Time'
import timePass from './Utils/Time2'
import Grid from '@material-ui/core/Grid';

export default class NoteList extends React.Component {

  render() {

    return (
      <Grid container
            spacing={0}
            alignItems='center'
            direction='row-reverse'
            wrap="wrap-reverse"
            justify='center'>

                {this.props.noteList.map((note, index) => {
                    return (
                        <Note key={index}
                              id={index}
                              title={note.title}
                              createDate={formatDate(note.time)}
                              passedTime={timePass(note.time)}>
                        </Note>)
                        }
                    )
                }

      </Grid>

        )
    }
}
