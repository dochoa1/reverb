import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom' // Why do the tutorials that I was follow recommend this?
import Socials from "../socials";

describe("Socials component", () => {
    it("should render Socials component correctly", () => {
        render(<Socials />);
        // const element = screen.getByRole('link', {})  // TODO: Get this right
        expect(element).toBeInTheDocument();
    });
});
