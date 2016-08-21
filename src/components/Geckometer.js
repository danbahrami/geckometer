import React, { PropTypes as T } from "react";
import { getPercentage, formatCurrencyString } from "../utils";
import Doughnut from "./Doughnut";
import "./Geckometer.css";

/**
 * Geckometer
 *
 * A chart that visualises a value within a given range. It displays
 * the value, the target value and the percentage ratio between 
 * the two. All emphasized with a yummy Doughnut graph.
 */
const Geckometer = ({ max, min, value, currencyCode, loading }) => {
    //Get the percentage ratio between the value and the data range
    const percent = !loading ? getPercentage(min, max, value) : 0;

    //Format the value, we need this now to evaluate the string length
    const formattedValue = !loading ? formatCurrencyString(value, currencyCode) : null;

    return (
        <div className="Geckometer">
            <Doughnut
                className="Geckometer__doughnut"
                percent={percent}
            />

            {!loading ? (
                <div className="Geckometer__center">
                    <span className={
                        "Geckometer__value"
                        + (formattedValue.length > 4 ? " --smallText" : "")
                    }>
                        {formattedValue}
                    </span>
                    <span className="Geckometer__percentage">
                        {percent.toString()}%
                    </span>
                </div>
            ) : null}

            {loading ? (
                <div className="Geckometer__loadingMessage">
                    Fetching data...
                </div>
            ) : (
                <div className="Geckometer__target">
                    Your target is {formatCurrencyString(max, currencyCode)}
                </div>
            )}
        </div>
    );
};

Geckometer.propTypes = {
    currencyCode : T.string,
    loading      : T.bool,
    max          : T.number,
    min          : T.number,
    value        : T.number
};

export default Geckometer;