import React, { useEffect, useState } from "react";
import "./Button.css";

import "./Button.css";
const localURL = "http://localhost:3000";

function Button({ onClick }) {
  return <button className="btn" onClick= {onClick}>Random Name</button>;
}

export default Button;
