import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'

import { connect } from 'react-redux'


const RsvpList = (rsvp) => {

    return (

        <div className='flex-container'>
            {
              rsvp.rsvp.map(one => {
                return  <RsvpItem key={one.rsvp_id} rsvpi={one} />
                  })
            }
            </div>
    )

}

const mapStateToProps =  state  => {

  return { rsvp: state.rsvp.reverse() }
}
export default connect(mapStateToProps)(RsvpList)
