import React from 'react'
export default (OriginalComponent) => class ToggleIconComponent extends React.Component{

  state={
	opacity: 1,
	transformL: 'rotate(0deg)',
	transformR: 'rotate(0deg)',
	padding:'0 0 0 0'
  }

  toggleAnimation=()=>{
    this.setState({
      padding: this.state.padding === '0 0 0 0' ? '0 0 0 50%' : '0 0 0 0',
      transformL: this.state.transformL === 'rotate(0deg)' ? 'rotate(-45deg)': 'rotate(0deg)',
      transformR: this.state.transformR === 'rotate(0deg)' ? 'rotate(45deg)': 'rotate(0deg)',
	    opacity: this.state.opacity === 0 ? 1 : 0
    })
  }

  render(){
    return <OriginalComponent
      opacity = {this.state.opacity}
  	  transformL = {this.state.transformL}
  	  transformR = {this.state.transformR}
  	  padding = {this.state.padding}
  	  toggleAnimation = {this.toggleAnimation}
    />
  }
}
