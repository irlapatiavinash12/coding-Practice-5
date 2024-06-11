// Write your code here

import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLightTheme: false}

  onLightMode = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  getButtonTextContent = () => {
    const {isLightTheme } = this.state
    return isLightTheme ? 'Dark Mode' : 'Light Mode'
  }

  getThemeStyling = () => {
    const {isLightTheme } = this.state
    return isLightTheme ? 'light-theme' : 'dark-theme'
  }

  render() {
  
    const getButtonTextContent = this.getButtonTextContent()

    const getThemeStyling = this.getThemeStyling()

    return (
      <div className="main-bg">
        <div className={getThemeStyling}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button-styling"  type="button" onClick = {this.onLightMode}>
            {getButtonTextContent}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
