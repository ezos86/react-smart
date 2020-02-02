import * as React from "react";
import { shallow } from "enzyme";
import Login from "../../views/Login";

describe("Login", () => {
    it("Make sure form exists", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(".login-form").exists());
    });

    it("renders login without crash", () => {
        expect(shallow(<Login />));
    });

});