import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const LatestNews = () => {
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
    <div>
      <h3 className="m-5 text-danger"> Latest News</h3>
      <Container className="mt-5">
        {data.slice(2, 7).map((item, index) => {
          return (
            <a
              href={item.url}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
              key={index}
            >
              <Row className="mt-4">
                <Col>
                  <Col className="d-flex">
                    <div>
                      <h4>{item.title}</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, non molestiae consequuntur, facere illo
                        harum accusantium nesciunt aliquam dignissimos
                        blanditiis voluptatum libero soluta laudantium ipsa
                        facilis neque! Debitis, sint sequi.
                      </p>
                    </div>
                    <div style={{ width: "200px", height: "150px" }}>
                      <img
                        src={item.urlToImage}
                        alt=""
                        style={{ width: "200px", height: "150px" }}
                      />
                    </div>
                  </Col>
                </Col>
                <Col xs lg="2">
                  <p>ads</p>
                </Col>
              </Row>
            </a>
          );
        })}
      </Container>
    </div>
  );
};

export default LatestNews;
