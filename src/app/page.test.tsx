import {expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import Page from "./page";

test("App Router: Works with Server Components", () => {
    render(<Page/>);
    expect(screen.getByText("Verifications")).toBeDefined();
    expect(screen.getByText("Number of verifications: 3")).toBeDefined();
    expect(2).toEqual(1)
});