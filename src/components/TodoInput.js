import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            value={item}
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}
