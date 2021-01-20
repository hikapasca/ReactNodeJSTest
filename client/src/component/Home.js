import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { getJobs, getJobsByFilter } from "../store/action/jobsAction";

const HomeComponent = ({ data }) => {
  const [fullTime, setFullTime] = useState(false);
  const [contract, setContract] = useState(false);
  const fullTimeHandler = () => setFullTime(!fullTime);
  const contractHandler = () => setContract(!contract);
  const dispatch = useDispatch();
  const filterData = (e) => {
    e.preventDefault();

    if (fullTime && !contract) {
      dispatch(getJobsByFilter("Full+Time"));
    }
    if (contract && !fullTime) {
      dispatch(getJobsByFilter("Contract"));
    }
    if (fullTime && contract) {
      dispatch(getJobs());
    }
  };
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Form onSubmit={(e) => filterData(e)}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Full Time"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={fullTimeHandler}
                  checked={fullTime}
                />
                <Form.Check
                  inline
                  label="Contract"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={contractHandler}
                  checked={contract}
                />
              </div>
            ))}
            <Button type="submit" variant="info">
              Search
            </Button>
          </div>
        </Form>
      </div>

      <Container
        className="shadow-lg"
        style={{ marginTop: "40px", padding: "20px" }}
      >
        <div>
          <h3 style={{ textAlign: "left", fontWeight: "bold" }}>Job List</h3>
          <hr />
          {data.map((res, idx) => (
            <div key={idx} stye={{ margin: "0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0",
                }}
              >
                <a href={`/detail/${res.id}`}>{res.title}</a>
                <p>{res.location}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0",
                }}
              >
                <div
                  style={{
                    margin: "0",
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <p style={{ color: "#787878" }}>{res.company}</p>
                  <p> - </p>
                  <p style={{ color: "#3BA722" }}>{res.type}</p>
                </div>
                <p>{res.created_at}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeComponent;
