import React, { Component } from 'react'

export default Original => class ToggleOpen extends Component{
    state = {
        active: false
    }
    toggle = () => {
        this.setState({ active: !this.state.active })
    }
    render(){
        return(
            <Original {...this.props} 
                active={this.state.active} 
                toggle={this.toggle} />
        )
    }
}