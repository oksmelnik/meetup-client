import React, { useState, useStyles, PureComponent } from 'react'
import { changeCountry } from '../actions/actions'
import {connect} from 'react-redux'
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/core/styles";


const LocationPicker = ({state, changeCountry}) => {
    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

      const classes = useStyles();
      const [values, setValues] = useState({
          id: 'nl',
          name: 'nl',
      });

      function handleChange(event) {

        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        changeCountry(event.target.value)
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="id-simple">Location</InputLabel>
                <Select
                    value={values.id}
                    onChange={handleChange}
                    inputProps={{
                      name: 'id',
                      id: 'id-simple',
                    }}
                >
                    <MenuItem value={'nl'}>Netherlands</MenuItem>
                    <MenuItem value={'de'}>Germany</MenuItem>
                    <MenuItem value={'gb'}>UK</MenuItem>
                </Select>
            </FormControl>
        </form>
    )
}

const mapStateToProps = ({state}) => {
  state
}

export default connect(mapStateToProps, { changeCountry })(LocationPicker)
