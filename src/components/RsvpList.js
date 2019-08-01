import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import LocationPicker from './../components/LocationPicker'
import { connect } from 'react-redux'


class RsvpList extends PureComponent {

  render() {

    const array = this.props.rsvp

    return (


        <div className='flex-container'>
              <LocationPicker />
            {
              array.map(one => {
                return  <RsvpItem key={one.rsvp_id} rsvpi={one} />
                  })
            }

            </div>
    )
  }
}

const mapStateToProps = ({ rsvp }) => ({ rsvp })
export default connect(mapStateToProps)(RsvpList)
