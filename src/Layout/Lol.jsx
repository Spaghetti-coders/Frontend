import React, { Component } from "react";

export class Lol extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row  boxed" style={{ width: "100%" }}>
            <div className="col-md-2 jj">
              <input
                type="radio"
                id="android"
                name="Communication"
                value="Android Development"
              />

              <label htmlFor="android">Communication</label>
            </div>

            <div className="col-md-2 jj">
              <input type="radio" id="ios" name="skills" value="Space" />
              <label htmlFor="ios">Space </label>
            </div>

            <div className="col-md-2 jj">
              <input type="radio" id="timing" name="timing" value="Space" />
              <label htmlFor="timing">Timing </label>
            </div>
            <div className="col-md-2 jj">
              <input type="radio" id="quantity" name="Quantity" value="Space" />
              <label htmlFor="quantity">Quantity </label>
            </div>

            <div className="col-md-2 jj">
              <input type="radio" id="other" name="Other" value="Space" />
              <label htmlFor="other">Other </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lol;
