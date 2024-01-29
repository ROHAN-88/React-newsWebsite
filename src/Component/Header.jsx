import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./header.css";
import axios from "axios";
const Header = () => {
  const [data, setData] = useState([]);
  const apiData = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-12-29&sortBy=publishedAt&apiKey=9304245108cb48588e10ace982990285"
      );
      return res.data;
    } catch (e) {
      return console.log(e.message);
    }
  };

  useEffect(() => {
    apiData().then((res) => setData(res.articles));
  }, []);

  return (
    <Container>
      <Row>
        {/* //?Column 1 */}
        <Col>
          {data.slice(3, 6).map((item, index) => {
            return (
              <a
                href={item.url}
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
              >
                <div className="column-1-header">
                  <h6>{item.title}</h6>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "13px" }}>
                      {item.description.slice(0, 150) + "..."}
                    </p>
                    <img src={item.urlToImage} />
                  </div>
                  <hr />
                </div>
              </a>
            );
          })}
        </Col>
        {/* //?coloumn 2  */}
        <Col xs={5}>
          {data.slice(8, 9).map((item, index) => {
            return (
              <a
                href={item.url}
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
              >
                <div className="column-2-header">
                  <img src={item.urlToImage} alt="dsds" />
                  <h3 className="mt-3">{item.title}</h3>
                  <h5 className="mt-3">{item.description}</h5>
                </div>
              </a>
            );
          })}
        </Col>
        {/* //?coloumn 3  */}
        <Col>
          {data.slice(22, 25).map((item, index) => {
            return (
              <a
                href={item.url}
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                key={index}
              >
                <div className="column-1-header">
                  <h6>{item.title}</h6>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "13px" }}>
                      {item.description.slice(0, 150) + "..."}
                    </p>
                    <img src={item.urlToImage} />
                  </div>
                  <hr />
                </div>
              </a>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
