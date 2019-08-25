import RsvpList from './RsvpList'
import TopicsList from './TopicsList'
import React, { useState, useStyles, PureComponent } from 'react'
import { changeCountry } from '../actions/actions'
import {connect} from 'react-redux'
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from "@material-ui/core/styles";
import * as request from 'superagent'



const baseUrl = 'http://localhost:3002'


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

      const [country, setCountry] = useState('nl');
      const [disabled, setDisabled] = useState(false)

      function handleChange(event) {

          setCountry(event.target.value);

          request
            .get(`${baseUrl}/country/${event.target.value}`)
            .then(() => {
                setDisabled(true)
            })
            .catch(err => alert(err))
      }

    const columnState = disabled ? 'column--disabled' :'column'

    return (
        <div>
            <div className='choose-city'>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="id-simple">Location</InputLabel>
                        <Select
                            value={country}
                            onChange={handleChange}
                        >
                            <MenuItem value={'nl'}>Netherlands</MenuItem>
                            <MenuItem value={'de'}>Germany</MenuItem>
                            <MenuItem value={'gb'}>UK</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </div>

            <div className={columnState}>
                <RsvpList />
            </div>

            <div className='column'>
                <TopicsList />
            </div>
        </div>
    )
}

export default LocationPicker
