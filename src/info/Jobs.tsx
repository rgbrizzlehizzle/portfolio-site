import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Chip, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }),
);

export default function Jobs() {
  const classes = useStyles();
  const justify = "space-between"

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}