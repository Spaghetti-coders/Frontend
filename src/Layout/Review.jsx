import React, { Component } from "react";
import "./Review.css";

export class Review extends Component {
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
      <div class="" style={{ marginTop: "20px", margin: "0 auto" }}>
        <div className="here justify-content-md-center text-center">
          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="1"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r1"
          />
          <label
            id="p"
            htmlFor="r1"
            class="btn btn-circle btn-xl"
            style={{ background: "#CCFF00", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>1</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="2"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r2"
          />
          <label
            id="p"
            htmlFor="r2"
            class="btn btn-circle btn-xl"
            style={{ background: "#FF3300", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>2</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="3"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r3"
          />
          <label
            id="p"
            htmlFor="r3"
            class="btn btn-circle btn-xl"
            style={{ background: "#FF6600", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>3</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="4"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r4"
          />
          <label
            id="p"
            htmlFor="r4"
            class="btn btn-circle btn-xl"
            style={{ background: "#FF6600", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>4</span>
          </label>
          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="5"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r5"
          />
          <label
            id="p"
            htmlFor="r5"
            class="btn btn-circle btn-xl"
            style={{ background: "#FFCC00", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>5</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="6"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r6"
          />
          <label
            id="p"
            htmlFor="r6"
            class="btn btn-circle btn-xl"
            style={{ background: "#FFFF00", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>6</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="7"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r7"
          />
          <label
            id="p"
            htmlFor="r7"
            class="btn btn-circle btn-xl"
            style={{ background: "#CCFF00", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>7</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="8"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r8"
          />
          <label
            id="p"
            htmlFor="r8"
            class="btn btn-circle btn-xl"
            style={{ background: "#99FF00", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>8</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="9"
            hidden
            onChange={this.onChange.bind(this)}
            class="form-check-input"
            id="r9"
          />
          <label
            id="p"
            htmlFor="r9"
            class="btn btn-circle btn-xl"
            style={{ background: "#33FF00", margin: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>9</span>
          </label>

          <input
            type="radio"
            placeholder="A Short Description"
            name="rating"
            value="10"
            onChange={this.onChange.bind(this)}
            hidden
            class="form-check-input"
            id="r10"
          />
          <label
            id="p"
            htmlFor="r10"
            class="btn btn-circle btn-xl text-center"
            style={{ background: "#00FF00", marginTop: "5px" }}
          >
            <span style={{ position: "relative", top: "7px" }}>10</span>
          </label>
        </div>

        {this.state.rating === "1" ||
        this.state.rating === "2" ||
        this.state.rating === "3" ||
        this.state.rating === "4" ||
        this.state.rating === "5" ||
        this.state.rating === "6" ||
        this.state.rating === "7" ||
        this.state.rating === "8" ||
        this.state.rating === "9" ? (
          <div class="summayr  justify-content-md-center text-center">
            <h3 style={{ marginBottom: "20px", marginTop: "30px" }}>
              Question
            </h3>
            <div className="row" style={{ width: "100%", marginTop: "30px" }}>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <h5>Theere is pur first question is this</h5>
              </div>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <div className="row gond">
                  <label className="rick">
                    <input type="radio" name="select" />
                    <span>5</span>
                  </label>
                  <label className="rick">
                    <input type="radio" name="select" />
                    <span>4</span>
                  </label>
                  <label className="rick">
                    <input type="radio" name="select" />
                    <span>3</span>
                  </label>
                  <label className="rick">
                    <input type="radio" name="select" />
                    <span>2</span>
                  </label>
                  <label className="rick">
                    <input type="radio" name="select" />
                    <span>1</span>
                  </label>
                </div>
              </div>

              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <h5>Theere is pur first question is this</h5>
              </div>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <div className="row gond">
                  <label className>
                    <input type="radio" name="select" />
                    <span>5</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>4</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>3</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>2</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>1</span>
                  </label>
                </div>
              </div>

              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <h5>Theere is pur first question is this</h5>
              </div>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <div className="row gond">
                  <label className>
                    <input type="radio" name="select" />
                    <span>5</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>4</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>3</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>2</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>1</span>
                  </label>
                </div>
              </div>

              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <h5>Theere is pur first question is this</h5>
              </div>
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <div className="row gond">
                  <label className>
                    <input type="radio" name="select" />
                    <span>5</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>4</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>3</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>2</span>
                  </label>
                  <label>
                    <input type="radio" name="select" />
                    <span>1</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.state.rating === "1" ||
        this.state.rating === "2" ||
        this.state.rating === "3" ||
        this.state.rating === "4" ||
        this.state.rating === "5" ||
        this.state.rating === "6" ? (
          <div>
            <div
              className="row  boxed justify-content-md-center text-center"
              style={{ width: "100%", marginTop: "40px" }}
            >
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
                <input
                  type="radio"
                  id="quantity"
                  name="Quantity"
                  value="Space"
                  style={{ padding: "30px" }}
                />
                <label htmlFor="quantity">Quantity </label>
              </div>

              <div className="col-md-2 jj">
                <input type="radio" id="other" name="Other" value="Space" />
                <label htmlFor="other">Other </label>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Review;
