import React, { Component } from 'react'
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img8 from "../img/8.png"
import img9 from "../img/9.png"
import img10 from "../img/10.png"
import img11 from "../img/11.png"
import img12 from "../img/12.png"
import img13 from "../img/13.png"
import img14 from "../img/14.png"
import img15 from "../img/15.png"
import img16 from "../img/16.png"
import img17 from "../img/17.png"
import img18 from "../img/18.png"
import img19 from "../img/19.png"
import img20 from "../img/20.png"
import img21 from "../img/21.png"

export class Create extends Component {
    render() {
        return (

            <div>
                <div class="container-fluid" style={{ padding: "0 100px" }}>

                    <section id="survey" style={{ padding: "50px 0" }} >
                        <h2>Create a new survey</h2>
                        <div class="row">

                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card square box">
                                    <div class="card-img-top center" >
                                        <i class="fas fa-plus fa-6x"></i>
                                    </div>
                                </div>
                                <h4 class="card-title titleBlank" style={{ padding: "20px 0" }}>Blank</h4>
                            </div>


                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card  box">
                                    <img class="card-img-top" src={img1} alt="" />
                                </div>
                                <h4 class="card-title" style={{ padding: "20px 0" }}>Templates</h4>
                            </div>
                        </div>
                    </section>
                    <hr></hr>

                    <section id="Drafts" style={{ padding: "50px 0" }}>
                        <h2>Drafts</h2>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img2} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Untitled 2</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img3} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Haters</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img4} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">PicabooCompany</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img5} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">What!?</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>


                    <section id="Recent" style={{ padding: "50px 0" }}>
                        <h2>Recent surveys</h2>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">
                                    <img class="card-img-top" src={img6} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Why you left!?</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img7} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">How can we be better?</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img8} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Blabala bla</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img9} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">We don't know</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img10} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Would you recommend</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100 box">

                                    <img class="card-img-top" src={img11} alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">We want to improve</h4>
                                        {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>


                </div>

            </div >










        )
    }
}

export default Create