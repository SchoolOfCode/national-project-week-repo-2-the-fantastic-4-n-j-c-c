import React, { useEffect, useState } from "react";

const localURL = "http://localhost:3000";

function Button({ onClick }) {
  return <button onClick={onClick}>Random Name</button>;
}

export default Button;
