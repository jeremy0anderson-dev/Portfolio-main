import React from 'react';

export class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isOpen: this.props.isOpen
        }
    }
    toggleMenu = ()=>{
        const {isOpen} = this.state;
        this.setState({
            ...this.state,
            isOpen: !isOpen
        })
    }
}


export default function Navbar(props) {
    return (<div className="Navbar">

    </div>);
}
