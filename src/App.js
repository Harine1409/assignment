import React from "react";
import "./styles.css";
import logo from "./images/Group 114.png";
import play from "./images/Group 117.png";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./images/ILLUSTRATION.png";
import user2 from "./images/Group.png";

import user from "./images/ILLUSTRATION 03  1.png";
import user3 from "./images/Group-2.png";
import user4 from "./images/Group-1.png";
import eclipse1 from "./images/Ellipse 17.png";
import eclipse2 from "./images/Ellipse 26.png";
import eclipse3 from "./images/Ellipse 27.png";
import vector1 from "./images/Vector-1.png";
import vector2 from "./images/Vector-2.png";
import vector4 from "./images/Vector-4.png";
import Footer from "./Footer/Footer";
import crown from "./images/dungeon.png";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/* navbar */}
        <div class="topnav">
          <a class="active" href="#home">
            <img src={logo}></img>
          </a>
          <img src={eclipse2}></img>
          <div class="topnav-right">
            <a href="#search">Home</a>
            <a href="#about">Services</a>
            <a href="#about">Pricing</a>
            <a href="#about"> About Us</a>
            <button class="topbtn">Start a Company</button>
          </div>
          {/* serach box */}
          <div class="form">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="form-control form-input"
              placeholder="Search a term a term | topic"
            />
            <span class="left-pan">
              <i class="fa fa-microphone"></i>
            </span>
          </div>
        </div>
        {/* profile img div */}
        <div className="main-div">
          <div className="child1">
            <h5 className="subhead1">Claim a free Quote</h5>
            <p className="parahead">
              <span className="spanhead">Get started</span> on fulfilling your
              Dubai or UAE dream.
            </p>
            <h5 className="subhead2">UAE or Offshore company</h5>
            <p>
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas
            </p>
          </div>
          <div className="child2">
            <img className="imgdiv" src={profile}></img>
          </div>
        </div>

        <div className="btnmain">
          <div>
            <button className="btnchild1">Start a Company</button>
          </div>
          <div>
            <button className="btnchild2">Renew a Company</button>
          </div>
        </div>

        <div className="centertextmain">
          <p className="centertext">
            Watch the video about UAE or Offshore Company Registration
          </p>
          <img className="playimg" src={play}></img>
        </div>

        <div className="centertextmain1">
          <p>Dedicated to our mission we are</p>
        </div>
        <div className="centertextmain2">
          <p>
            Our services include Company Formation & Renewals, Trust &
            Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
            Management, Stock Trading Platforms, Ownership Solutions.
          </p>
        </div>
        <img src={eclipse2}></img>

        <div className="main-div">
          <div className="card1">
            <div class="card cards">
              <img className="cardimmg1" src={crown}></img>
              <div class="card-body">
                <h5 class="card-title">UAE Free Zone Company</h5>
                <p class="card-text">
                  Your registration agent, will answer all of your questions and
                  help you to reach a conclusion that meets your objectives of
                  investing in the UAE.
                </p>
                <a href="#">Get Started</a>
              </div>
            </div>
            <img src={eclipse3}></img>
          </div>
          <div className="card2">
            <div class="card cards">
              <img className="cardimmg2" src={vector1}></img>

              <div class="card-body">
                <h5 class="card-title">Dubai Local Companies</h5>
                <p class="card-text">
                  The Dubai LLC formation documents are actually articles of
                  organization or a certificate of organization. You can get
                  yours today.
                </p>
                <a href="#">Get Started</a>
              </div>
            </div>
          </div>
          <div className="card3">
            <div class="card cards">
              <img className="cardimmg3" src={vector2}></img>

              <div class="card-body">
                <h5 class="card-title">Offshore Compamies</h5>
                <p class="card-text">
                  You can register an offshore company and open its bank account
                  in Dubai. Your agent will help you along all the process
                </p>
                <a href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-div2">
          <div className="childdiv1">
            <p className="paraheaddiv">
              Learn the ways in which you can benefit from a UAE/Offshore
              Company. Then get started on fulfilling your UAE dream.
            </p>
            <p>Claim a Free Quote</p>
            <div class="card cardsuser">
              <img
                class="card-img-top cardsuimgser"
                src={user}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Bank Account Setup</h5>
                <p class="card-text">
                  There are many banks in the United Arab Emirates [UAE]. Both
                  locally owned and branches of multinational ones. Foreign
                  banks adjust according to their parent s strategies and have
                  changed local requirements overnight in the past. But we are
                  here to help you.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
            <img src={eclipse3}></img>

            <div className="childdiv2">
              <div class="card cardsuser">
                <img
                  class="card-img-top cardsuimgser"
                  src={user3}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title"> UAE Company Visas</h5>
                  <p class="card-text">
                    Your application for visas is critical especially if you
                    intend to move to Dubai. This becomes even more urgent if
                    your family will also move with you. All the paperwork is
                    done on your behalf smoothly so that you may only focus on
                    doing what matters most to you.
                  </p>
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="childdiv3">
            <div class="card cardsuser">
              <img
                class="card-img-top cardsuimgser"
                src={user2}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Advice & Guidance</h5>
                <p class="card-text">
                  All activities in the UAE are licensed. Whether manufacturing,
                  finance, trading, marketing, consultancy or restaurants. In
                  some countries only manufacturing is licensed. In others there
                  is a threshold below which business are encouraged. Get our
                  insightfull guidance today.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
            <div class="card cardsuser">
              <img
                class="card-img-top cardsuimgser"
                src={user4}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Advice & Guidance</h5>
                <p class="card-text">
                  Registration Document Perparation Several documents must be
                  prepared to start the process of registering a new company in
                  the United Arab Emirates. Be it a Dubai local company, a free
                  zone one or an offshore entity. Your registered agent is
                  dedicated to get this done for you for a seamless process.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
            <p>
              We have gathered a team of professionals to craft adequate
              services you can rely on for a friction free setup in UAE.
            </p>
            <h5>More about our services</h5>
          </div>
        </div>
        <div className="middletext4">
          <p>
            Most popular affordable pricing per jurisdictions are brought to you
            to kick off your adventure.
          </p>
        </div>

        <div className="main-div">
          <div className="card1">
            <div class="card cardss">
              <div class="card-body">
                <h5 class="card-title">AJMAN OFFSHORE</h5>
                <p class="card-text">
                  <p class="card-text">Attestation Charges</p>
                  <p>Registered Agent</p>
                  <p>Registered Office</p>
                  <p>Varal Administrative</p>
                  <p>Preparing Statutory File</p>
                  <p>Liasing with Registration Authorities</p>
                  <p>Due Diligence Appraisal</p>
                  <p>Keeping The Register</p>
                  <p>Seal Charges</p>
                  <p>Certificate of Good Standing</p>
                </p>
                <a href="#" class="btn btn-primary">
                  Continue
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div class="card cardbg">
              <div class="card-body">
                <h5 class="card-title">RAK ICC</h5>
                <p class="card-text">Attestation Charges</p>
                <p>Registered Agent</p>
                <p>Registered Office</p>
                <p>Varal Administrative</p>
                <p>Preparing Statutory File</p>
                <p>Liasing with Registration Authorities</p>
                <p>Due Diligence Appraisal</p>
                <p>Keeping The Register</p>
                <p>Seal Charges</p>
                <p>Certificate of Good Standing</p>
                <a href="#" class="btn btn-primary">
                  Continue
                </a>
              </div>
            </div>
          </div>
          <div className="card3">
            <div class="card cardsss">
              <div class="card-body">
                <h5 class="card-title">SHARJAH MEDIA CITY</h5>
                <p class="card-text">Attestation Charges</p>
                <p>Registered Agent</p>
                <p>Registered Office</p>
                <p>Varal Administrative</p>
                <p>Preparing Statutory File</p>
                <p>Liasing with Registration Authorities</p>
                <p>Due Diligence Appraisal</p>
                <p>Keeping The Register</p>
                <p>Seal Charges</p>
                <p>Certificate of Good Standing</p>
                <a href="#" class="btn btn-primary">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Homepage;
