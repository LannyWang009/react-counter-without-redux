// import { prependOnceListener } from 'cluster'

// let MyComponent = (props) => {
//   return <div>Hello {props.name}</div>
// }

// ReactDOM.render(<MyComponent name={'banana'} />, document.getElementById('root'))
class MyComponent extends React.Component {
  constructor (props) {
    console.log('this is the constructor running.')
    super(props)
    this.state = {
      value: 0
    }
  }
  componentDidMount () {
    console.log('My component has landed!')
  }
  componentDidUpdate () {
    console.log('This component has changes in props or state')
  }
  componentWillUnmount () {
    console.log('Component is being removed from the DOM')
  }

  handleClick = () => {
    console.log('hi, i am just clicked', 'this', this)
    this.setState({
      value: this.state.value + 1
    })
  }

  render () {
    console.log('this render has been called', 'this.props', this.props)
    return <div>
        Hello, {this.props.name}
      <br />
      {this.state.value}
      <button onClick={this.handleClick} value={this.state.value}>Button</button>

    </div>
  }
}

ReactDOM.render(<MyComponent name={'banana'} />, document.getElementById('root'))
