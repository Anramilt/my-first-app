import React, { Component } from 'react'

export default Component => class Accordion extends React.Component {
    state ={
        openItemId : null
    }

    render(){
        return <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
    }

    toggleOpenItem = openItemId => ev =>{
        this.setState({
            openItemId: openItemId === this.openItemId ? null : openItemId
        })
    }
}