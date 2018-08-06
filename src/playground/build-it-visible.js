// let app = {
//   toggle: false
// };
//
// const toggleVisibility = () => {
//   app.toggle = !app.toggle
//   render();
// };
//
//
// const appRoot = document.querySelector('#app');
//
// const render = () => {
//   const application = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{app.toggle ? "Hide" : "Show"} Details</button>
//       <p>{app.toggle && "Hey. These are some details you can now see!"}</p>
//     </div>
//   );
//
//   ReactDOM.render(application, appRoot);
// };
//
//
//
// render();


class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      toggle: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.toggle ? 'Hide' : 'Show'} Details</button>
        <p>{this.state.toggle && "Hey. These are some details you can now see!"}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
