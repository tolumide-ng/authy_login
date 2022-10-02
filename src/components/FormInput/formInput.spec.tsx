import { render, screen } from "@testing-library/react";
import { FormInput } from "./formInput";
import { errors } from "../../utils/errors";

describe("FormInput", () => {
    const props = {
        inputValue: "",
        inputName: "email",
        inputType: "text",
        handleChange: jest.fn(),
        validatedInput: {}
    }

    beforeEach(() => { jest.resetAllMocks() });

    it("should render the formInput component without errors", () => {
        render(<FormInput {...props} />);

        expect(screen.getByLabelText("email")).toBeInTheDocument();
        expect(screen.queryByRole("listitem")).toBeNull();
        expect(screen.getByLabelText("email")).toHaveAccessibleName();
    });

    it("should display the errors if they are provided in validatedInput", () => {
        props.validatedInput = {
            lowerCase: true,
            upperCase: false,
            specialCharacter: false,
            length: true,
        }

        render(<FormInput {...props} />)
        expect(screen.getAllByRole("listitem")).toBeTruthy();
        expect(screen.getAllByAltText("right").length).toBe(2);
        expect(screen.getAllByAltText("wrong")).toHaveLength(2);
        expect(screen.getByText(errors["length"])).toBeTruthy();
    })
})