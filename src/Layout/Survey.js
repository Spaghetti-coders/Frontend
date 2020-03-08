import React, { Component } from "react";

export class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: ""
    };
  }

  async onChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <input
          type="radio"
          placeholder="A Short Description"
          name="rating"
          value="7"
          onChange={this.onChange.bind(this)}
          class="form-check-input"
          id="r5"
        />
        <label
          id="p"
          htmlFor="r5"
          class="btn btn-circle btn-xl"
          style={{ background: "#CCFF00" }}
        >
          7
        </label>
        {/* <input type="text" name="rating" onChange={this.onChange.bind(this)} /> */}
      </div>
    );
  }
}

export default Survey;
