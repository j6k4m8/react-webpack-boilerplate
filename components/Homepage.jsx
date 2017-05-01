import React, { Component } from 'react';

export default Homepage extends Component {
    constructor(opts) {
        super(opts);
        
        this.state = {
            name: "Jordan"
        };
        
        this.setName = this.setName.bind(this);
    }
    
    setName(name) {
        this.setState({ name: name });
    }
    
    render() {
        return (
            <div>
                <h1>Hello { this.state.name }! This is Homepage</h1>
            </div>
        );
    }
}
               
