export function fetchUser(username) {

  return (dispatch) => {
    dispatch({
      type: 'USER_FETCH',
      payload: null
    });
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(user => {
        dispatch({
          type: 'USER_FULFILLED',
          payload: user
        });
      })
      .catch(err => console.error(err));
  };

}