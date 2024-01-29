import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const NewsCard = () => {
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
      <h4 className="m-5 " style={{ color: "red" }}>
        Top News
      </h4>
      <Container className="mt-5">
        <Row>
          {data.slice(50, 54).map((item, index) => {
            return (
              <Col key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  key={index}
                >
                  <div>
                    <img
                      src={item.urlToImage}
                      alt=""
                      style={{ width: "300px", height: "200px" }}
                    />

                    <p>{item.description.slice(0, 100) + "..."}</p>
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default NewsCard;
