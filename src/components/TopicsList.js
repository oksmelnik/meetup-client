import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
<div>
    Topics Top 10
    <ol>
    {topics.map(topic => {
      return(
        <li>
        {topic.topic} ({topic.count})
        </li>)
    }
    )}
    </ol>
    </div>
    )
  }
}

const mapStateToProps = ({ topics }) => ({ topics })
export default connect(mapStateToProps)(TopicsList)
