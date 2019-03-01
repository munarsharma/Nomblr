import React from "react";
import { connect } from "react-redux";

import { goFetchPosts } from "../actions/postActions";

const mapStateToProps = state => {
  return {
    fetching: state.postsReducers.fetching,
    posts: state.postsReducers.posts
  };
};

const mapDispatchToProps = dispatch => {
  console.log("meow fetch is a go");
  return {
    fetchPosts: posts => {
      dispatch(goFetchPosts(posts));
    }
  };
};

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <>
        <h1> nahnu huna </h1>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
