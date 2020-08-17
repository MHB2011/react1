import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle px-2" style={{ padding: "5px" }}></i>
        {alert.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default Alert;
