import React from "react";
import { Form } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const OnlyFlagPhoneInput = ({ label = "Contact Number" }) => {
  return (
    <div className="form-group flag-phone-sec">
      <Form.Label>{label}</Form.Label>

      <PhoneInput
        defaultCountry="in"
        className="w-100 d-flex position-relative align-items-center gap-2"
      />
    </div>
  );
};

export default OnlyFlagPhoneInput;