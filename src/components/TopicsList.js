import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import starIcon from '../resource/star.svg'


class TopicsList extends PureComponent {
    static propTypes = {
        topics: PropTypes.arrayOf(PropTypes.shape({
          topic: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired
        })).isRequired
    }

    render() {
        const {topics} = this.props
        if (!topics) return null


    return (
        <div className='topList'>
            <div className='title'>
                Most popular
                <img src={starIcon} />
            </div>

            <div>
                {topics.map(topic => {
                    return(
                        <div className="item">
                            {topic.index} {topic.topic} {topic.count}
                        </div>)
                    })
                }
            </div>

          </div>
    )
  }
}

const mapStateToProps = ({ topics }) => ({ topics })
export default connect(mapStateToProps)(TopicsList)
