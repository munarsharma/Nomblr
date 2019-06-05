import React from "react";
import { connect } from "react-redux";

import { goFetchUserPosts } from "../actions/postActions";
import UserPosts from "../components/posts/userPosts";

const mapStateToProps = state => {
  return {
    fetching: state.postsReducers.fetching,
    userPosts: state.postsReducers.userPosts,
    currentUser: state.userReducers.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => {
      dispatch(goFetchUserPosts(id));
    }
  };
};

class UserPostsContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.props.fetchUserPosts(this.props.currentUser.id);
    }
  }

  render() {
    return (
      <>
        <ul>
          {" "}
          <UserPosts posts={this.props.userPosts} />{" "}
        </ul>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostsContainer);