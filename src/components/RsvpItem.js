import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpList from './RsvpList'
import './rsvp.css';



class RsvpItem extends PureComponent {

  static propTypes = {
  }

  render() {

    return (
      <ul class='flex-container'>
      <li class="flex-item">{this.props.rsvpi.event.event_name}</li>
      <li class="flex-item"><img src={this.props.rsvpi.member.photo}/></li>
      <li class="flex-item">{this.props.rsvpi.member.member_name}</li>
      </ul>
    )
  }
}

export default RsvpItem
