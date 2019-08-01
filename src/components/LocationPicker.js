import React, { useState, PureComponent } from 'react'
import { changeCountry } from '../actions/actions'
import {connect} from 'react-redux'


class LocationPicker extends PureComponent {

    onChange = (e) => {
        this.props.changeCountry(e.target.value)
    }

    render() {

    const {country} = this.props

    const options = [
      {id: 'nl', label: 'Netherlands'},
      {id: 'de', label: 'Germany'},
      {id: 'gb', label: 'UK'
    }]

    return (
        <div className='choose-city'>
            <label>
                Choose location:
                <select
                    id='city'
                    value={country}
                    onChange={this.onChange}
                >

                {options.map(item => (
                    <option value={item.id} x>
                        {item.label}
                    </option>
                ))}
                </select>

            </label>
        </div>
    )
    }
}

const mapStateToProps = function (state) {
  return {
    country: state.country
  }
}

export default connect(mapStateToProps, { changeCountry })(LocationPicker)
