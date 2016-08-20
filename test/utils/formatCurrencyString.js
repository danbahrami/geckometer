import React from "react";
import { expect } from "chai";
import { formatCurrencyString } from "../../src/utils";

describe("formatCurrencyString util", () => {
    /*
     * It should prefix with the currency symbol if the currency code is recognised
     */
    it("prefixes with the currency symbol if the currency code is recognised", () => {
        expect(formatCurrencyString(50, "GBP")).to.equal("£50");
        expect(formatCurrencyString(50, "EUR")).to.equal("€50");
        expect(formatCurrencyString(50, "USD")).to.equal("$50");
        expect(formatCurrencyString(50, "CHF")).to.equal("CHF50");
    });

    /*
     * It should return the value as a string if currencyCode is undefined
     */
    it("returns the value as a string if currencyCode is undefined", () => {
        expect(formatCurrencyString(50, undefined)).to.equal("50");
    });

    /*
     * It should return the value as a string if currencyCode is not supported
     */
    it("returns the value as a string if currencyCode is not supported", () => {
        expect(formatCurrencyString(50, "FOO")).to.equal("50");
    });
});