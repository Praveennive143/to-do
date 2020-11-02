import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2" onClick={handleDelete}>
        <h6 className="changeColor">{title}</h6>
      </li>
    );
  }
}
