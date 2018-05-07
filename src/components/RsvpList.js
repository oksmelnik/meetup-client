import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import { connect } from 'react-redux'


class RsvpList extends PureComponent {
  static propTypes = {
  }

  render() {

    const array = this.props.rsvp.slice(0, 5)
    
    return (
    <div>
    { array.map(one => {
        return  <RsvpItem key={one.rsvp_id} rsvpi={one} />
          })}

      </div>
    )
  }
}

const mapStateToProps = ({ rsvp }) => ({ rsvp })
export default connect(mapStateToProps)(RsvpList)
