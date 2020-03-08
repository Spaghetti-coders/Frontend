import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Review.css";

export class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      problem: "",

      // questions5: null,
      rating: null,
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      isHidden: true
    });
  }

  toggle1() {
    this.setState({
      isHidden: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const data = {
      question1: this.state.question1,
      question2: this.state.question2,
      question3: this.state.question3,
      question4: this.state.question4,
      rating: this.state.rating,
      value: this.state.rating
    };

    axios({
      method: "post",
      url: `http://localhost:8000/api/1/answer/overall/`,

      data
    })
      .then(res => {
        this.setState({
          question1: null,
          question2: null,
          question3: null,
          question4: null,
          problem: "",
          rating: null,
          value: ""
        });
        this.props.history.push("/survey//");
        Swal.fire({
          title: "Survey Submitted",
          icon: "success",
          text: "Thank you for your valuable time!!",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Survey Submitted",
          icon: "error",
          text: "Error while submitting survey!",
          timer: 2000
        });
      });
  }

  async onChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="Review_main" style={{ marginTop: "20px" }}>
        <div className="box" style={{ paddingBottom: "40px" }}>
          <form style={{ width: "100%" }} onSubmit={this.handleSubmit}>
            <div>
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
                  1
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
                  2
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
                  3
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
                  4
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
                  5
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
                  6
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
                  7
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
                  8
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
                  9
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
                  10
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
                  <div
                    className="row"
                    style={{ width: "100%", marginTop: "30px" }}
                  >
                    <div className="col-md-6" style={{ marginTop: "10px" }}>
                      <h5>Theere is pur first question is this</h5>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "10px" }}>
                      <div className="row gond">
                        <label className="rick">
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            value="5"
                            name="question1"
                          />
                          <span>5</span>
                        </label>
                        <label className="rick">
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            value="4"
                            name="question1"
                          />
                          <span>4</span>
                        </label>
                        <label className="rick">
                          <input
                            type="radio"
                            value="3"
                            onChange={this.onChange.bind(this)}
                            name="question1"
                          />
                          <span>3</span>
                        </label>
                        <label className="rick">
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            value="2"
                            name="question1"
                          />
                          <span>2</span>
                        </label>
                        <label className="rick">
                          <input
                            type="radio"
                            value="1"
                            onChange={this.onChange.bind(this)}
                            name="question1"
                          />
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
                          <input
                            type="radio"
                            value="5"
                            onChange={this.onChange.bind(this)}
                            name="select"
                          />
                          <span>5</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question2"
                            value="4"
                          />
                          <span>4</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question2"
                            value="3"
                          />
                          <span>3</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question2"
                            value="2"
                          />
                          <span>2</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question2"
                            value="1"
                          />
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
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question3"
                            value="5"
                          />
                          <span>5</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="4"
                            onChange={this.onChange.bind(this)}
                            name="question3"
                          />
                          <span>4</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question3"
                            value="3"
                          />
                          <span>3</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question3"
                            value="2"
                          />
                          <span>2</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question3"
                            value="1"
                          />
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
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question4"
                            value="5"
                          />
                          <span>5</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question4"
                            value="4"
                          />
                          <span>4</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            name="question4"
                            value="3"
                          />
                          <span>3</span>
                        </label>
                        <label htmlFor="id">
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this)}
                            id="id"
                            name="question4"
                            value="2"
                          />
                          <span>2</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="1"
                            name="question4"
                            onChange={this.onChange.bind(this)}
                          />
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
                <div className="boxed">
                  <div
                    className="row text-center"
                    style={{
                      width: "100%",
                      marginTop: "40px",
                      paddingLeft: "50px"
                    }}
                  >
                    <div className="col-sm-2 jj">
                      <input
                        type="radio"
                        id="android"
                        name="problem"
                        onChange={this.onChange.bind(this)}
                        value="Android Development"
                      />

                      <label htmlFor="android">Communication</label>
                    </div>

                    <div className="col-sm-2 jj">
                      <input
                        type="radio"
                        id="ios"
                        name="problem"
                        onChange={this.onChange.bind(this)}
                        value="Space"
                      />
                      <label htmlFor="ios">Space </label>
                    </div>

                    <div className="col-md-2 jj">
                      <input
                        type="radio"
                        id="timing"
                        name="problem"
                        onChange={this.onChange.bind(this)}
                        value="Timing"
                      />
                      <label htmlFor="timing">Timing </label>
                    </div>
                    <div className="col-md-2 jj">
                      <input
                        type="radio"
                        id="quantity"
                        name="problem"
                        onChange={this.onChange.bind(this)}
                        value="Quantity"
                        style={{ padding: "30px" }}
                      />
                      <label htmlFor="quantity">Quantity </label>
                    </div>

                    <div className="col-md-2 jj">
                      <input
                        type="radio"
                        id="other"
                        name="Other"
                        value="Space"
                        onClick={this.toggle.bind(this)}
                      />
                      <label htmlFor="other">Other </label>
                      {this.state.isHidden && (
                        <input
                          type="text"
                          id="other"
                          onChange={this.onChange.bind(this)}
                          name="problem"
                          placeholder="Other Problem"
                          style={{ width: "140px" }}
                          className="form-control"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {this.state.rating === "1" ||
            this.state.rating === "2" ||
            this.state.rating === "3" ||
            this.state.rating === "4" ||
            this.state.rating === "5" ||
            this.state.rating === "6" ||
            this.state.rating === "7" ||
            this.state.rating === "8" ||
            this.state.rating === "9" ||
            this.state.rating === "10" ? (
              <center>
                <button
                  className="btn submit text-white font-weight-bold"
                  style={{ marginTop: "40px" }}
                >
                  SUBMIT SURVEY
                </button>
              </center>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Review;
