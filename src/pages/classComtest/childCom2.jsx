import React, { PureComponent } from 'react'

class ChildRight extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log('child2 mount')
  }

  componentDidUpdate() {
    console.log('child2 update')
  }

  handleCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1,
    })
  }

  render() {
    return (
      <div className="child2">
        <div onClick={this.handleCount}>
          <span>{this.props?.name}</span>--{this.state.count}
        </div>
        <div>
          <button onClick={() => this.props.onChange(`cc${Math.random()}`)}>
            click
          </button>
        </div>
      </div>
    )
  }
}

export default ChildRight
