import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./login";


describe("Login", () => {
    it("should render the Form component", () => {
        render(<Login />);

        expect(screen.getByLabelText("email")).toBeTruthy();
        expect(screen.getByLabelText("password")).toBeTruthy();
        expect(screen.queryByLabelText("weird Label")).toBeNull();
        expect(screen.queryByAltText("wrong")).toBeNull();
        expect(screen.queryByAltText("right")).toBeNull();
    })

    it("should update the value and display errors in the password field", () => {
        render(<Login />);

        const target = { value: "Password" };

        const password = screen.getByLabelText("password");
        fireEvent.change(password, { target });
        expect(password).toHaveValue(target.value);
        expect(screen.getAllByRole("img").length).toBe(5);
        expect(screen.getAllByAltText("right")).toHaveLength(3);
        expect(screen.getAllByAltText("wrong")).toHaveLength(2);
        expect(screen.getByRole("button")).toBeDisabled();
    })

    it("should disable the button if the password field is correct", () => {
        render(<Login />);

        const targetPassword = { value: "AVeryToughPa#ssw2022" };
        const targetEmail = { value: "email@sample.de" };
        const email = screen.getByLabelText("email");
        const password = screen.getByLabelText("password");

        fireEvent.change(password, { target: targetPassword });
        fireEvent.change(email, { target: targetEmail });

        expect(password).toHaveValue(targetPassword.value);
        expect(email).toHaveValue(targetEmail.value);
        expect(screen.getByRole("button")).not.toBeDisabled();
    })
})