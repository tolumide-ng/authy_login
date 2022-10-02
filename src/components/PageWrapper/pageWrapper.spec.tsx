import { render, screen } from "@testing-library/react";
import { PageWrapper } from "./pageWrapper";

describe("PageWrapper", () => {
    it("should render the pageWrapper component", () => {
        render(<PageWrapper children={<p>Child</p>} />);

        expect(screen.getByText("Registration")).toBeInTheDocument();
        expect(screen.getByText("Child")).toBeTruthy();
    })
})