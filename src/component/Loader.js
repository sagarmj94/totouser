import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="light" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </Spinner>
    </div>
  );
};

export default Loader;
