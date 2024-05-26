import React from "react";
import "./style.scss";

function Add() {
  return (
    <form className="row g-3 mx-1">
      <div className="col-12">
        <label for="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-12">
        <label for="inputAddress2" className="form-label">
          Address 2
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Add;
