import React from "react";

export default function input({ label, name, value, onChange, type, error }) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
