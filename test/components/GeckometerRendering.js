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

        expect(wrapper.find(".Geckometer__percentage").text()).to.equal("56");
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
});