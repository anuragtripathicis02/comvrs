import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";

const CountryName = ({ label = "Country" }) => {
  const [selected, setSelected] = useState("IN");

  return (
    <div className="form-group flag-name-sec">
      <Form.Label>{label}</Form.Label>

      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        searchable
        fullWidth
        placeholder="Select Country"
        showSelectedLabel={true}
        showOptionLabel={true}
      />
    </div>
  );
};

export default CountryName;