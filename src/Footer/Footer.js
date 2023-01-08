import React from "react";
import vector4 from "../images/Vector-4.png";
import vector3 from "../images/Vector-3.png";
import "./Footer.css";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="Commonftr">
          <div className="left">
            <div className="bottom-main">
              <div className="bottom-child1">
                <p className="Para">
                  Read about our blogs for more information on our processes{" "}
                </p>
                <div className="footer1">
                  <img className="vector4" src={vector4}></img>
                  <div className="innerright">
                    <p className="CommanFooterpara">
                      How to start a company formation in Dubai
                    </p>
                    <p>5 minutes</p>
                  </div>
                </div>
                <div className="footer2">
                  <img className="vector4" src={vector4}></img>
                  <div className="innerright">
                    <p className="CommanFooterpara">
                      How to start a company formation in Dubai
                    </p>
                    <p>5 minutes</p>
                  </div>
                </div>
                <div className="footer3">
                  <img className="vector4" src={vector4}></img>
                  <div className="innerright">
                    <p className="CommanFooterpara">
                      SEO Dubai: Who benefits the most ?
                    </p>
                    <p>5 minutes</p>
                  </div>
                </div>
              </div>
              <div className="bottom-child2">
                <p className="weightansrightborder">
                  Satidfied We are When Our Customers Are Happy
                </p>
              </div>
              <div>
                <div className="leftbottom">
                  <div className="displyflex">
                    <div>
                      <div>
                        <img src={vector3}></img>
                        <br />
                        <br />
                        <p className="bottomborder"></p>
                      </div>
                    </div>
                    <div>
                      <p className="margin">
                        {" "}
                        "I am very happy with them.I'll continue to use their
                        services in future & highly recommend then to anyone,"
                        <br />
                        <p className="adjustment"> - "Muhib Abrar"</p>
                      </p>
                    </div>
                  </div>

                  <div className="displyflex">
                    <div>
                      <div>
                        <img src={vector3}></img>
                        <br />
                        <br />
                        <p className="bottomborder"></p>
                      </div>
                    </div>
                    <div>
                      <p className="margin">
                        {" "}
                        "I am very happy with them.I'll continue to use their
                        services in future & highly recommend then to anyone,"
                        <br />
                        <p className="adjustment"> - "Muhib Abrar"</p>
                      </p>
                    </div>
                  </div>
                  <div className="displyflex">
                    <div>
                      <div>
                        <img src={vector3}></img>
                        <br />
                        <br />
                        <p className="bottomborder"></p>
                      </div>
                    </div>
                    <div>
                      <p className="margin">
                        {" "}
                        "I am very happy with them.I'll continue to use their
                        services in future & highly recommend then to anyone,"
                        <br />
                        <p className="adjustment"> - "Muhib Abrar"</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="bottom-child2">
              <p className="weightansrightborder">
                Get to know the whole us and more of our service
              </p>
            </div>
            <div className="marginadjust">
              <span className="highlighter"> Services</span>
              <br />
              Products
              <br />
              Solutions
              <br />
              Assurance
              <br />
              FAQ
              <br />
              Working at Varal-singhania
            </div>
            <div className="marginadjust">
              <span className="highlighter"> Policies</span>
              <br />
              Privacy Policy
              <br />
              Terms & Conditions
              <br />
            </div>
            <div className="marginadjust">
              <span className="highlighter"> About</span>
              <br />
              About Us
              <br />
              Contact US
            </div>
            <div className="marginadjust">
              <span className="highlighter">Address</span>
              <br />
              608 One Lake Plaza,Cluster, T
              <br />
              Al Saraya Street,Jumeirah
              <br />
              Lake Towers
              <br />
              Dubai
              <br />
              United Arab Emirates
            </div>
            <div className="marginadjust">
              <span className="highlighter"> Services</span>
              <br />
              Products
              <br />
              Solutions
              <br />
              Assurance
              <br />
              FAQ
              <br />
              Working at Varal-singhania
            </div>
          </div>
        </div>
        <p className="Alignitems">Varaluae 2021 © All rights Reserved</p>
      </>
    );
  }
}
export default Footer;
