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

  handlePlusClick = () => {
    console.log('+1 button just clicked', 'this', this)
    this.setState({
      value: this.state.value + 1
    })
  }

  handleMinusClick = () => {
    console.log('-1 button just clicked', 'this', this)
    this.setState({
      value: this.state.value - 1
    })
  }
  
  handleChange = (event) => {
      this.setState({value: event.target.value})
  }


  handleSubmit = () => {
      console.log('The user submit the form', this.state.value)
      event.preventDefault();
    //   let formData = new FormData(valueForm)
    //   console.log('formData', formData)
    //   let newValue = formData.get('newValue')
    //   console.log('newValue', newValue)
    //   this.setState({
    //       value:newValue
    //   })
  }



  render () {
    console.log('this render has been called', 'this.props', this.props)
    return <div>
        Hello, {this.props.name}
      <br />
      {this.state.value}
      <button onClick={this.handlePlusClick} value={this.state.value} >Plus One</button>
      <button onClick={this.handleMinusClick} value={this.state.value}>Minus One</button>
      <form id='valueForm' name='valueForm' onSubmit={this.handleSubmit}>
        <label htmlFor='newValue'>Set a new value:</label>
        <input type="number" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value ="Submit" />
      </form>
    </div>
  }
}

ReactDOM.render(<MyComponent name={'banana'} />, document.getElementById('root'))
