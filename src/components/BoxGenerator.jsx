import React, { Component } from 'react';
import './bgenerator.css'; 


class BoxGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      boxes: [],
    };
  }

  ColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  Submit = (e) => {
    e.preventDefault();
    const { color } = this.state;
    if (color) {
      this.setState((prevState) => ({
        color: '',
        boxes: [...prevState.boxes, color],
      }));
    }
  };

  render() {
    const { color, boxes } = this.state;

    return (
      <div className="box-generator">
        <form onSubmit={this.Submit}>
          <label htmlFor="colorInput">Enter Color:</label>
          <input
            type="text"
            id="colorInput"
            value={color}
            onChange={this.ColorChange}
          />
          <button type="submit">Add Box</button>
        </form>
        <div className="box-container">
          {boxes.map((boxColor, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: boxColor }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default BoxGenerator;
