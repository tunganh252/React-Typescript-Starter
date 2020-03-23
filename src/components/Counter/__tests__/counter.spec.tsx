import React from "react";
import Counter from "../counter";
import { render } from "@testing-library/react";

test("test <Counter /> render", () => {
    const { getByText } = render(<Counter defaultValue={0}/>);
    expect(getByText(/0/i).textContent).toBe("0");
});