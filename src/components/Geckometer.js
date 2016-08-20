import React, { PropTypes as T } from "react";
import "./Geckometer.css";

const Geckometer = ({ max, min, value }) => {
    return (
        <div className="Geckometer">

        </div>
    );
};

Geckometer.propTypes = {
    max   : T.number.isRequired,
    min   : T.number.isRequired,
    value : T.number.isRequired
};

export default Geckometer;