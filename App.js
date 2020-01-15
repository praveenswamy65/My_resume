import React, {Component} from 'react'
import "./App.css";
import Navbar from './components/navbar/Navbar';
import GlobalStyle from './styles/Global';
import ScrollArea from 'react-scrollbar';
import Skills from "./components/navbar/Skills";
import Languages from "./components/navbar/Languages";
import {SocialIcon} from 'react-social-icons';
import Text from 'react-text';

class App extends Component {

    state = {
        navbarOpen: false,
        hovered: false
    }

    handleNavbar = () => {
        this.setState({navbarOpen: !this.state.navbarOpen});
    }

    render() {
        var background = {
            backgroundColor: 'transparent',
            fontSize: '25px',
            color: '#f7f7f7'
        };
        var textStyle = {
            position: 'absolute',
            top: '5%',
            left: '50%',
            fontSize: '50px',
            color: '#FDFEFE'
        };
        return (
            < ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
            >
                <>
                    < Navbar
                        navbarState={this.state.navbarOpen}
                        handleNavbar={this.handleNavbar}
                    />
                    <div className="bgimg-1">
                        <div className="caption">
                            <span className="quote">
                                <strong>“Breathe out the fear when you are scared”</strong>
                            </span>
                            <br></br>
                            <br></br>
                            <span className="quote">
                                <strong>- Praveen Swamy</strong>
                            </span>
                        </div>
                    </div>
                    <div id="section1" style={{
                        background: '#FFFFFF', display: 'block'
                    }}>
                        <div id="profile" className="container">
                            <h3 style={{textAlign: "center", color: "#CD853F"}}>Profile</h3>
                            <p className="lead">Application Developer</p>
                            <hr style={{borderColor: "#E9AB17"}}></hr>
                        </div>
                        <div className="row" style={{justifyContent: 'center', alignItems: 'center'}}>
                            <div className="col-md-3">
                                <h2 style={{fontSize: '25px', textAlign: "left", color: "#CD853F"}}>About me</h2>
                                <p style={{fontSize: '15px', color: "#333333", textAlign: "justify"}}>


                                    I am an iterative learner and an application developer with
                                    very keen interest
                                    in developing android and web applications.
                                    I like working on innovative ideas involving
                                    cutting edge technologies like AI and ML.
                                    I like building productive solutions which broadens
                                    my skill-set and make people's life easier. </p>
                            </div>

                            <div className="col-md-4">
                                <h2 style={{fontSize: '25px', textAlign: "left", color: "#CD853F"}}>Details</h2>
                                <p style={{fontSize: '15px', textAlign: "justify", color: "#333333"}}>
                                    <strong
                                        style={{font: '905px'}}>Name:</strong>
                                    <br/>
                                    Praveen Swamy<br/><br/>
                                    <strong>Age:</strong><br/>
                                    25 years<br/><br/>
                                    <strong>Location:</strong><br/>
                                    Uppsala, Sweden - 75261
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="section2" className="bgimg-2">
                        <div className="container">
                            <h3 style={{textAlign: "center", color: "#CD853F"}}>Projects</h3>
                            <hr style={{borderColor: "#E9AB17"}}></hr>
                        </div>
                        <div className="Projects">
                            <div className="Title">
                                <p style={{fontSize: '18px', textAlign: "justify"}}>
                                    <strong>Smart E-Grocer</strong></p>
                                <p style={{fontSize: '15px', marginTop: "-15px"}}> 01/2016 - 04/2016</p>
                            </div>
                            <div className="Content">
                                <p style={{fontSize: '15px', marginTop: '19px', textAlign: "justify"}}>
                                    <ul type={'circle'}>
                                        <li>
                                            An IoT implementation wherein we emulated the smart containers
                                            capable of monitoring its grocery levels. Based on the threshold level,
                                            the containers manage to notify the users regarding the grocery status.
                                        </li>
                                        <li>
                                            GSM module interfaced with Arduino board was used to send messages to user’s
                                            mobile phone.
                                        </li>
                                        <li>
                                            An android app was developed which runs in background to decode the
                                            message received from the GSM module.
                                        </li>
                                    </ul>
                                    <br/>
                                    Tools: Arduino UNO and IR sensors.
                                </p>
                            </div>
                        </div>
                        <br/>
                        <div className="Projects">
                            <div className="Title">
                                <p style={{fontSize: '18px', textAlign: "justify"}}>
                                    <strong>Small Basket</strong></p>
                                <p style={{fontSize: '15px', marginTop: "-15px"}}> 01/2016 - 04/2016</p>
                            </div>
                            <div className="Content">
                                <p style={{fontSize: '15px', marginTop: '19px', textAlign: "justify"}}>
                                    A web application using which the hostelers can order the food and daily need
                                    items from the hostel pantry remotely during study and exam hours.<br/><br/>
                                    Tools: HTML, CSS, Bootstrap, PHP and MySQL.
                                </p>
                            </div>
                        </div>
                        <br/>
                        <div className="Projects">
                            <div className="Title">
                                <p style={{fontSize: '18px', textAlign: "justify"}}>
                                    <strong> PES Food Court</strong></p>
                                <p style={{fontSize: '15px', marginTop: "-15px"}}> 09/2014 - 10/2014</p>
                            </div>
                            <div className="Content">
                                <p style={{fontSize: '15px', marginTop: '19px', textAlign: "justify"}}>
                                    An android application which notifies the hostelers about the daily food menu from
                                    the
                                    canteen according to breakfast, lunch and dinner.<br/><br/>
                                    Tools: Android studio and SQLite database.
                                </p>
                            </div>
                        </div>
                        <br/><br/>
                    </div>

                    <div id="section3" className="bgimg-3">
                        <div id="profile" className="container">
                            <h3 style={{textAlign: "center", color: "#CD853F"}}>Experiences</h3>
                            <hr style={{borderColor: "#E9AB17"}}></hr>
                        </div>
                        <div className="row" style={{justifyContent: 'center', alignItems: 'center'}}>
                            <div className="col-md-3">
                                <h2 style={{
                                    fontSize: '25px',
                                    textAlign: "left",
                                    color: "#CD853F",
                                    marginBottom: "20px"
                                }}>Educations</h2>
                                <div className="Projects">
                                    <div className="Title" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', color: "#333333"}}>
                                            <strong>Uppsala University</strong></p>
                                        <p style={{fontSize: '15px', marginTop: "-15px", color: "#333333"}}> 09/2019 -
                                            Present</p>
                                    </div>
                                    <div className="Content" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', textAlign: "justify", color: "#333333"}}>
                                            <strong> Master's in Computer Science</strong>
                                        </p>
                                        <p style={{
                                            fontSize: '15px',
                                            marginTop: "-15px",
                                            color: "#333333",
                                            textAlign: "justify"
                                        }}>
                                            My master's program covers courses such as Human computer interaction,
                                            Artificial Intelligence,
                                            Image Analysis, Machine Learning etc.
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div className="Projects">
                                    <div className="Title" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', color: "#333333"}}>
                                            <strong>PES Institute of Technology</strong></p>
                                        <p style={{fontSize: '15px', marginTop: "-15px", color: "#333333"}}> 07/2012 -
                                            05/2016</p>
                                    </div>
                                    <div className="Content" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', textAlign: "justify", color: "#333333"}}>
                                            <strong>Bachelor's in Computer Science</strong>
                                        </p>
                                        <p style={{
                                            fontSize: '15px',
                                            marginTop: "-15px",
                                            color: "#333333",
                                            textAlign: "justify"
                                        }}>
                                            My bachelor's studies included courses such as Algroithms and Data
                                            Structures,
                                            OOPS with C++, Pattern Recognition, Computer Architecture, WEB technologies
                                            etc.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <h2 style={{
                                    fontSize: '25px',
                                    textAlign: "left",
                                    color: "#CD853F",
                                    marginBottom: "20px"
                                }}>Career</h2>
                                <div className="Projects">
                                    <div className="Title" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', color: "#333333"}}>
                                            <strong>SAP India Pvt. Ltd.</strong></p>
                                        <p style={{fontSize: '15px', marginTop: "-15px", color: "#333333"}}> 07/2016 -
                                            07/2019</p>
                                    </div>
                                    <div className="Content" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', textAlign: "justify", color: "#333333"}}>
                                            <strong>ABAP Development Associate Consultant</strong>
                                        </p>
                                        <p style={{
                                            fontSize: '15px',
                                            marginTop: "-15px",
                                            color: "#333333",
                                            textAlign: "justify"
                                        }}>
                                            <ul type={'circle'}>
                                                <li>Certified SAP ABAP Consultant
                                                    with 5+ On-premise S/4HANA implementations and achieved successful
                                                    project
                                                    go-lives.
                                                </li>
                                                <li>Worked as a standalone developer and developed multiple reports for
                                                    a
                                                    ledger account involving credit, debit memos and historical cash
                                                    analysis.
                                                </li>
                                                <li>Worked on multiple RICEF factory model implementations i.e.
                                                    developed reports,
                                                    smart forms, adobe forms, interfaces, enhancements and BADI
                                                    implementations in
                                                    multiple ERP implementation projects.
                                                </li>
                                                <li>
                                                    Developed python applications to automate SPDD and SPAU upgrade
                                                    assessments
                                                    which reduced the effort of 1 day to 30 seconds of execution.
                                                </li>
                                                <li>
                                                    Developed an UI5 application using CDS views and OData services for
                                                    part
                                                    search in sales order and handled the part characteristics using
                                                    BRFplus configuration.
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                <div className="Projects">
                                    <div className="Title" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', color: "#333333"}}>
                                            <strong>GE Capital India</strong></p>
                                        <p style={{fontSize: '15px', marginTop: "-15px", color: "#333333"}}> 04/2015 -
                                            07/2015</p>
                                    </div>
                                    <div className="Content" style={{flex: '1'}}>
                                        <p style={{fontSize: '18px', textAlign: "justify", color: "#333333"}}>
                                            <strong>Summer Internship</strong>
                                        </p>
                                        <p style={{
                                            fontSize: '15px',
                                            marginTop: "-15px",
                                            color: "#333333",
                                            textAlign: "justify"
                                        }}>
                                            As an intern, I trained in some of the technical courses like XHTML, Java,
                                            MySQL,
                                            Presentation skills and How to be a better programmer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="section4" className="bgimg-4">
                        <div id="profile" className="container">
                            <h3 style={{textAlign: "center", color: "#CD853F"}}>Abilities</h3>
                            <hr style={{borderColor: "#E9AB17"}}></hr>
                        </div>
                        <div className="row" style={{justifyContent: 'center', alignItems: 'center'}}>
                            <div className="col-md-3">
                                <h2 style={{
                                    fontSize: '25px',
                                    textAlign: "left",
                                    color: "#CD853F",
                                    marginBottom: "20px"
                                }}>Skills</h2>
                                <Skills></Skills>
                            </div>
                            <div className="col-md-3" style={{marginTop: '20px'}}>
                                <h2 style={{
                                    fontSize: '25px',
                                    textAlign: "left",
                                    color: "#CD853F",
                                    marginBottom: "20px"
                                }}>Languages</h2>
                                <Languages></Languages>
                            </div>
                            <div className="col-md-3" style={{marginTop: '20px'}}>
                                <h2 style={{
                                    fontSize: '25px',
                                    textAlign: "left",
                                    color: "#CD853F",
                                    marginBottom: "20px"
                                }}>Interests</h2>
                                <div style={{
                                    color: '#727878',
                                    fontFamily: 'Open Sans',
                                    fontSize: '18px'
                                }}>
                                    <span style={{border: '1px solid #727878', borderRadius: '5px'}}>
                                        &nbsp;&nbsp;Cooking&nbsp;&nbsp;</span>
                                    <span
                                        style={{border: '1px solid #727878', borderRadius: '5px', marginLeft: '20px'}}>
                                        &nbsp;&nbsp;Badminton&nbsp;&nbsp;</span>
                                    <span
                                        style={{border: '1px solid #727878', borderRadius: '5px', marginLeft: '20px'}}>
                                        &nbsp;&nbsp;Travelling&nbsp;&nbsp;</span>
                                    <span
                                        style={{border: '1px solid #727878', borderRadius: '5px', marginLeft: '20px'}}>
                                        &nbsp;&nbsp;Biking&nbsp;&nbsp;</span>
                                    <span
                                        style={{border: '1px solid #727878', borderRadius: '5px', marginLeft: '20px'}}>
                                        &nbsp;&nbsp;Table-Tennis&nbsp;&nbsp;</span>
                                    <span
                                        style={{border: '1px solid #727878', borderRadius: '5px', marginLeft: '20px'}}>
                                        &nbsp;&nbsp;Trekking&nbsp;&nbsp;</span>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <div id="section5" className="bgimg-3">
                        <div id="profile" className="container">
                            <h3 style={{textAlign: "center", color: "#CD853F"}}>Contact</h3>
                            <hr style={{borderColor: "#E9AB17"}}></hr>
                        </div>
                        <div className="row" style={{justifyContent: 'center', textAlign: 'center'}}>
                            <div style={{marginLeft: '-160px'}}>
                                <ul type={'None'}>
                                    <li style={{display: 'flex'}}>
                                            <span style={{flex: 1}}>
                                                <SocialIcon className={'Icon'}
                                                            url="http://linkedin.com/in/swamypraveen"
                                                /></span>
                                        <span style={{flex: 1, marginLeft: '-550px', marginTop: '10px'}}>
                                            <a className={'linked'}
                                               href={"http://linkedin.com/in/swamypraveen"} target="_blank">
                                                <strong>http://linkedin.com/in/swamypraveen</strong>
                                            </a></span>
                                    </li>
                                </ul>
                                <ul type={'None'}>
                                    <li style={{display: 'flex', marginTop: '20px'}}>
                                            <span style={{flex: 1}}><SocialIcon
                                                url="mailto:praveenswamy65@gmail.com"
                                            /></span>
                                        <span style={{flex: 1, marginLeft: '-550px', marginTop: '8px'}}><a
                                            className={'mailto'}
                                            href={"mailto:praveenswamy65@gmail.com"}>
                                                <strong>praveenswamy65@gmail.com</strong>
                                            </a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <GlobalStyle/>
                </>
            </ScrollArea>
        )
    }
}

export default App