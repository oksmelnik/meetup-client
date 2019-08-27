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


const LocationPicker = ({changeCountry, loading}) => {

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
      console.log(loading)
      const classes = useStyles();

      const [country, setCountry] = useState('nl');
      const [disabled, setDisabled] = useState(false)

      function handleChange(event) {
          setCountry(event.target.value);
          changeCountry(event.target.value)
      }

    const columnState = loading ? 'column--disabled' :'column'

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
                            <MenuItem value={'us'}>US</MenuItem>
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

const mapStateToProps = (state) => ({
  loading: state.loading
})

 export default connect(mapStateToProps, { changeCountry })(LocationPicker)
