import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Geckometer from "../../src/components/Geckometer";

describe("Geckometer component", () => {
    /*
     * It should display the correct value
     */
    it("displays the correct value", () => {
        const wrapper = shallow(
            <Geckometer min={0} max={100} value={56} />
        );

        expect(wrapper.find(".Geckometer__value").text()).to.equal("56");
    });

    /*
     * It should display the correct percentage
     */
    it("displays the correct percentage", () => {
        const wrapper = shallow(
            <Geckometer min={100} max={200} value={156} />
        );

        expect(wrapper.find(".Geckometer__percentage").text()).to.equal("56%");
    });
    
    /*
     * It should display the correct target value
     */
    it("displays the correct target value", () => {
        const wrapper = shallow(
            <Geckometer min={0} max={100} value={50} />
        );

        expect(wrapper.find(".Geckometer__target").text()).to.contain("100");
    });

    /*
     * It should display the correct currency symbol when a currency code is provided
     */
    it("displays the correct currency symbol when a currency code is provided", () => {
        const poundWrapper = shallow(
            <Geckometer min={0} max={100} value={50} currencyCode="GBP" />
        );

        const euroWrapper = shallow(
            <Geckometer min={0} max={100} value={50} currencyCode="EUR" />
        );

        const dollarWrapper = shallow(
            <Geckometer min={0} max={100} value={50} currencyCode="USD" />
        );

        const swissFrancWrapper = shallow(
            <Geckometer min={0} max={100} value={50} currencyCode="CHF" />
        );

        expect(poundWrapper.find(".Geckometer__value").text()).to.equal("£50");
        expect(euroWrapper.find(".Geckometer__value").text()).to.equal("€50");
        expect(dollarWrapper.find(".Geckometer__value").text()).to.equal("$50");
        expect(swissFrancWrapper.find(".Geckometer__value").text()).to.equal("CHF50");

        expect(poundWrapper.find(".Geckometer__target").text()).to.contain("£");
        expect(euroWrapper.find(".Geckometer__target").text()).to.contain("€");
        expect(dollarWrapper.find(".Geckometer__target").text()).to.contain("$");
        expect(swissFrancWrapper.find(".Geckometer__target").text()).to.contain("CHF");
    })
});