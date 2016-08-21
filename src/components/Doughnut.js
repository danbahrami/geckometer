import React, { PropTypes as T } from "react";
import "./Doughnut.css";

/**
 * Doughnut
 *
 * A yummy pie chart but with the center cut out.
 *
 * Credit to Robin Rendle for providing the stroke-dash-array
 * based css hack that allows this to work.
 *
 * https://css-tricks.com/how-to-make-charts-with-svg/#article-header-id-7
 */
const Doughnut = ({ className, percent }) => {
    //The max dash-array is a function of the doughnuts radius
    const maxDashArray = 316;

    //Get percentage of maxDashArray
    const value = Math.round(((maxDashArray / 100) * percent));

    return (
        <svg
            className={`${className} Doughnut`}
            width={200}
            height={200}
        >
            <circle r="50" cx="100" cy="100" className="Doughnut__ring"
                    style={{
                    strokeDasharray : `${value} ${maxDashArray}`
                }}
            />
            <circle r="96" cx="100" cy="100" className="Doughnut__center"/>
        </svg>
    );
};

Doughnut.propTypes = {
    className : T.string,
    percent   : T.number.isRequired
};

export default Doughnut;