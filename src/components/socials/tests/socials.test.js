import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Socials from "./socials";

describe("Socials component", () => {
    it("should render Socials component correctly", () => {
        render(<Socials />);
        const element = screen.getByRole("heading")  // TODO: Understand what this line is doing
        expect(element).toBeInTheDocument();
    });
});
