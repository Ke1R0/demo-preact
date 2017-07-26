import { h, Component } from 'preact';
import { Router } from 'preact-router';
import linkState from 'linkstate';
import User from './user';
import Home from './home';
import Profile from './profile';
import Error from './error';

const users = [
  {
    name: "Artem Bozhko 0",
    image: "https://avatars1.githubusercontent.com/u/13179371?v=3&s=460"
  },
  {
    name: "Artem Bozhko 1",
    image: "https://avatars1.githubusercontent.com/u/13179371?v=3&s=460"
  }
]

export class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <Profile path="/profile/:user" />
          <Error default />
        </Router>
      </div>
    );
  };
}

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       text: ''
//     };
//     this.submit = this.submit.bind(this);
//   }

//   submit() {
//     console.log(this.state);
//   }

//   render(props, { text = '' }) {
//     return (
//       <div>
//         <form onSubmit={this.submit} action="javascript:">
//           <input type="text" value={text} onInput={linkState(this, 'text')}/>
//         </form>
//         <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
//       </div>
//     );
//   }
// }

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       user: null,
//       loading: true
//     }
//   };

//   componentDidMount() {
//     fetch(this.props.config.urls.user)
//       .then(resp => resp.json())
//       .then(user => {
//         setTimeout(() => {
//           this.setState({
//             user,
//             loading: false
//           });
//         }, 2000);
//       })
//       .catch(err => console.error(err));
//   }

//   render({config}, {loading, user}) {
//     return (
//       <div class="app">
//         {loading
//           ? <p>Fetching {config.urls.user}</p>
//           : <User image={user.avatar_url} name={user.name}/>
//         }
//       </div>
//     )
//   };
// }

export default App;
