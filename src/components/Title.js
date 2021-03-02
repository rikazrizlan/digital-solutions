import React, { Component } from 'react'

export default class Title extends Component {
    state = {
        isView: false
    }

    handleScroll = () => {
        this.setState({
            isView: !this.state.isView
        });
    }

    render(props) {
        return (
            <div className="title">
                <h2 style={props} className="title-text">{this.props.title}</h2>
                <div onScroll={this.handleScroll} className={this.state.isView?"line expanded":"line"}></div>
            </div>
        )
    }
}