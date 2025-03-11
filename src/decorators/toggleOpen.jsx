import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen : false
    }
    
    componentDidMount(){
        console.log('---', 'mounting')
    }

    componentDidUpdate(){
        console.log('---', 'updating')
    }

    componentWillUnmount(){
        console.log('---', 'unmounting')
    }

    render() {
        return <OriginalComponent {...this.props}{...this.state} toggleOpen = {this.toggleOpen} />
    }//{this.state.isOpen} можно записать как {...this.state}


    toggleOpen = (ev) =>{
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getref = (ref) => {
        console.log('---', ref)
    }
}