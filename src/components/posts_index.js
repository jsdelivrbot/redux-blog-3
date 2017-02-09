import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux' //replaced by {fetchPosts} in connect
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router'


class PostsIndex extends Component {
  // the component is about to be called for the first time ...
  componentWillMount() {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    )
  }
}

// replaced by {fetchPosts: fetchPosts} in connect
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch)
// }

// first is null because it's expecting mapStateToProps
export default connect (null, {fetchPosts})(PostsIndex)
