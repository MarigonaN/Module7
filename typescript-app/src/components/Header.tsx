import React from 'react'
import { HeaderProps } from '../types/types'

interface HeaderState {
  count: number
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state: HeaderState = {
    count: 0,
  }

  componentDidMount = () => {
    console.log('hello')
  }

  increaseState = () => this.setState({ count: this.state.count + 1 })

  render() {
    return (
      <>
        <h1 style={{fontSize:'20px', color: '#fff' }}>{this.props.title}</h1>
        {/* {this.props.subTitle ? <h2>{this.props.subTitle}</h2> : <div></div>}
        <div>{this.state.count}</div> */}
      </>
    )
  }
}

export default Header