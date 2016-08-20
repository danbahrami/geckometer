import React, { PropTypes as T } from "react";
import "./RefreshButton.css";

const RefreshButton = ({ onClick, loading }) => {
    return (
        <button className="RefreshButton">

        </button>
    );
};

RefreshButton.propTypes = {
    loading : T.bool,
    onClick : T.func
};

export default RefreshButton;