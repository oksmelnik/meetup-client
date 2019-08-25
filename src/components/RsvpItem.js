import React, { PureComponent} from 'react'

import RsvpList from './RsvpList'
import icon from './../resource/icon.svg'
import './rsvp.css';


class RsvpItem extends PureComponent {

  getImage() {
    if (this.props.rsvpi.member.photo) {
      return this.props.rsvpi.member.photo
    }
    return icon
  }
  render() {
      const userImage = this.getImage()
      return (
          <div className="flex-item">
              <div className="flex-image">
                  <img src={userImage}/>
                  <span>{this.props.rsvpi.member.member_name}</span>
              </div>

              <div className="item-name">
                  <a href={this.props.rsvpi.event.event_url}>
                      {this.props.rsvpi.event.event_name}
                  </a>
                  <div>
                      {this.props.rsvpi.group.group_city}
                  </div>
              </div>



          </div>

    )
  }
}

export default RsvpItem
