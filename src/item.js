import React from 'react';
import './App.css';
import { deleteTodo } from './actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    margin: "3vh"
  },
}));

function Item(props) {
  var classes = useStyle();
  var text = props.text;
  var key=props.id
  return(
    <Paper className={classes.paper} onClick={props.click}>
      <Typography variant="h5" component="h3">
        {text}
      </Typography>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteTodo
  }, dispatch);
}

export default connect (null, mapDispatchToProps)(Item);
