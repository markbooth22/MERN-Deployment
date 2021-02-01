import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const PirateDisplay = (props) => {
  const { pirates } = props;
  const { refresh, setRefresh } = props;

  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/pirates/${id}`)
      .then((res) => {
        setRefresh(refresh + 1);
        console.log("Response: ", res);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div>
      <h1>Pirates</h1>
      <Link to="/pirate/add">Add a Pirate</Link>
      <table>
        <thead>
          <tr>
            <th>Pirate</th>
            <th>Actions Available</th>
          </tr>
        </thead>

        {pirates.map((pirate, idx) => {
          return (
            <tbody>
              <tr key={idx}>
                <td>{pirate.pirateName}</td>
                <td>
                  <button className="editButton">
                    <Link to={`/${pirate._id}/edit`}>Edit</Link>
                  </button>{" "}
                  <button
                    className="deleteButton"
                    onClick={(e) => {
                      deleteAuthor(pirate._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default PirateDisplay;
