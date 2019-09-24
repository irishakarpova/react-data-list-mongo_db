import React from 'react'
export default (OriginalComponent) => class AccordionComponent extends React.Component{
  state={
    openItemId: null,
    cssColor: true
  }
  toggleOpenItem = (id) => (ev) => {
    this.setState((state) =>({
      openItemId: state.openItemId === id ? null : id,
      cssColor: state.cssColor === id ? true : id
    }))
  }

  render(){
    return <OriginalComponent
      {...this.props}
      openItemId = {this.state.openItemId}
      cssColor = {this.state.cssColor}
      toggleOpenItem = {this.toggleOpenItem}
    />
  }
}
