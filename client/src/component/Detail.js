import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "react-bootstrap";
const Detail = ({ data }) => {
  return (
    <div>
      <Container style={{ marginTop: "20px", padding: "20px", width: "70%" }}>
        <div
          style={{ textAlign: "left", fontWeight: "bold", fontSize: "14px" }}
        >
          <a href="/">
            <AiOutlineArrowLeft />
            See All Positions
          </a>
        </div>
        <div className="shadow" style={{ marginTop: "20px" }}>
          <div style={{ textAlign: "left", margin: "0", padding: "20px" }}>
            <p style={{ margin: "0", color: "#787878", fontSize: "12px" }}>
              {data.type} / {data.location}
            </p>
            <h3 style={{ margin: "0", fontWeight: "bold" }}> {data.company}</h3>
            <hr />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{ textAlign: "left", maxWidth: "500px" }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div>
              <div
                className="shadow"
                style={{
                  width: "300px",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#DDDDDD",
                }}
              >
                <div style={{ backgroundColor: "white" }}>
                  <p
                    style={{
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    {data.company}
                  </p>
                  <hr />
                  <img src={data.company_logo} style={{ maxWidth: "150px" }} />
                  <br />
                  <a
                    style={{
                      textAlign: "left",
                      justifyContent: "left",
                      fontSize: "12px",
                    }}
                    href={data.company_url}
                  >
                    {data.company_url}
                  </a>
                </div>
              </div>
              <div
                className="shadow"
                style={{
                  width: "300px",
                  marginTop: "20px",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#DDDDDD",
                }}
              >
                <div style={{ backgroundColor: "white" }}>
                  <p
                    style={{
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    How To Apply
                  </p>
                  <hr />
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      padding: "10px 8px",
                    }}
                    dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
