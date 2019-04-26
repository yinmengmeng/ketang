import React, { Component } from "react";

export default class HomeList extends Component {
    render() {
        return (
            <div className="home-list">
                <ul>
                    {this.props.lists.map((item, index) => {
                        let { url, title, price } = item;
                        return (
                            <li key={index}>
                                <img src={url} alt={url} />
                                <p>{title}</p>
                                <strong>{price}</strong>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
