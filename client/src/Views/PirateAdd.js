import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";
import { Button, InputGroup } from "../Utils/Utils";

const PirateAdd = (props) => {
  const [pirateName, setPirateName] = useState("");
  const [errs, setErrs] = useState({})
  const { refresh, setRefresh } = props;
  
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pirates", {
        pirateName: pirateName,
      })
      .then((res) => {
        if(res.data.errors) {
          setErrs(res.data.errors);
        } else {
          setRefresh(refresh + 1)
          navigate("/");
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Pirates</h1>
      <Link to="/">Home</Link>
      <p className="instruction">Add a new Pirate:</p>
      <div className="addInput">
        <form onSubmit={submitForm}>
          <div>
            <InputGroup
              label="Pirates's Name:"
              value={pirateName}
              type="text"
              handleChange={setPirateName}
              name="Author's Name"
            />
            {errs.authorName ? (
              <span style={{ color: "red" }}>{errs.pirateName.message}</span>
            ) : null }
          </div>
          <Button>
            <Link to="/">Cancel</Link>
          </Button>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default PirateAdd;
