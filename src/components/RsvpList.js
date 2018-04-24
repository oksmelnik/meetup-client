import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import { connect } from 'react-redux'


class RsvpList extends PureComponent {
  static propTypes = {
  }

  render() {
    return (
    <div>
    { this.props.rsvp.map(one => {
          return  <RsvpItem rsvpi={one} />
          })}

      </div>
    )
  }
}

const mapStateToProps = ({ rsvp }) => ({ rsvp })
export default connect(mapStateToProps)(RsvpList)
