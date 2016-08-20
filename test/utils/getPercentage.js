import React from "react";
import { expect } from "chai";
import { getPercentage } from "../../src/utils";

describe("getPercentage util", () => {
    /*
     * It should return the correct percentage if min is zero
     */
    it("returns the correct percentage if min is zero", () => {
        const percent = getPercentage(0, 100, 56);

        expect(percent).to.equal(56);
    });

    /*
     * It should return the correct percentage if min is not zero
     */
    it("returns the correct percentage if min is not zero", () => {
        const percent = getPercentage(100, 200, 156);

        expect(percent).to.equal(56);
    });

    /*
     * It should round to the nearest integer
     */
    it("rounds to the nearest integer", () => {
        const percent = getPercentage(0, 3, 1);

        expect(percent).to.equal(33);
    });

});