import React, { PropTypes as T } from "react";
import { getPercentage, formatCurrencyString } from "../utils";
import Doughnut from "./Doughnut";
import "./Geckometer.css";

const Geckometer = ({max, min, value, currencyCode}) => {
    const percent = getPercentage(min, max, value);

    return (
        <div className="Geckometer">
            <Doughnut
                className="Geckometer__doughnut"
                percent={percent}
            />
            <div className="Geckometer__center">
                <span className="Geckometer__value">
                    {formatCurrencyString(value, currencyCode)}
                </span>
                <span className="Geckometer__percentage">
                    {percent.toString()}%
                </span>
            </div>
            <div className="Geckometer__target">
                Your target is {formatCurrencyString(max, currencyCode)}
            </div>
        </div>
    );
};

Geckometer.propTypes = {
    currencyCode : T.string,
    max          : T.number.isRequired,
    min          : T.number.isRequired,
    value        : T.number.isRequired
};

export default Geckometer;