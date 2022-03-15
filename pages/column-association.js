import React, { useRef } from 'react'
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button
} from '@material-ui/core'
import useStyles from '../styles/pages/column-association'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container as DnDContainer } from '../components/dnd/Container'

export default function ColumnAssociation() {
  const classes = useStyles()

  return (
    <Container>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" align="center">
            Column Association
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.formContainer}>
          <DndProvider backend={HTML5Backend}>
            <DnDContainer />
          </DndProvider>
        </Grid>

        <Grid item xs={12} className={classes.buttonsContainer}>
          <Button variant="contained" color="secondary">
            Clear Form
          </Button>
          <Button variant="contained" color="primary">
            Browse Description Ancillary File
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
