import React from 'react'
export default (OriginalComponent) => class ToggleComponent extends React.Component{

	state={
		isOpenSelect: false,
		isOpenAdd: false
	}

	toggleOpenSelect = ()=> {
		this.setState({
		  isOpenSelect: !this.state.isOpenSelect
		})
	}
	toggleOpenAdd = () =>{
		this.setState({
		  isOpenAdd: !this.state.isOpenAdd
		})
	}


  render(){
    return <OriginalComponent
      isOpenSelect = {this.state.isOpenSelect}
  	  isOpenAdd = {this.state.isOpenAdd}
  	  toggleOpenSelect = {this.toggleOpenSelect}
  	  toggleOpenAdd = {this.toggleOpenAdd}

    />
  }
}
