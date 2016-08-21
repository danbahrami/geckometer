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

    /*
     * It should always return between 0 and 100
     */
    it("always returns between 0 and 100", () => {
        const lowPercent = getPercentage(0, 100, -20);
        const highPercent = getPercentage(0, 100, 200);

        expect(lowPercent).to.equal(0);
        expect(highPercent).to.equal(100);
    });

    /*
     * It should use max as the source of truth when min and max conflict
     */
    it("uses max as the source of truth when min and max conflict", () => {
        const lowPercent = getPercentage(200, 100, 99);
        const highPercent = getPercentage(200, 100, 101);

        expect(lowPercent).to.equal(0);
        expect(highPercent).to.equal(100);
    });
});