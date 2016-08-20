import React, { PropTypes as T } from "react";
import { getPercentage } from "../utils";
import Doughnut from "./Doughnut";
import "./Geckometer.css";

const Geckometer = ({ max, min, value }) => {
    const percent = getPercentage(min, max, value);

    return (
        <div className="Geckometer">
            <Doughnut
                className="Geckometer__doughnut"
                percent={percent}
            />
            <div className="Geckometer__center">
                <span className="Geckometer__value">
                    {value.toString()}
                </span>
                <span className="Geckometer__percentage">
                    {percent.toString()}%
                </span>
            </div>
            <div className="Geckometer__target">
                Your target is {max.toString()}
            </div>
        </div>
    );
};

Geckometer.propTypes = {
    max   : T.number.isRequired,
    min   : T.number.isRequired,
    value : T.number.isRequired
};

export default Geckometer;