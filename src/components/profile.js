import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { fetchUser } from './actions';
import User from './user';

export class Profile extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.user);
  }

  render({loading, user}) {
    return (
      <div class="app">
        {loading
          ? <p>Fetching...</p>
          : <User image={user.avatar_url} name={user.name}/>
        }
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser : (username) => dispatch(fetchUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
