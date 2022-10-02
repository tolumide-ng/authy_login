import * as React from "react";
import { Validator } from "../../utils/validate/validate";
import { FormInput } from "../FormInput/formInput";
import styles from "./login.module.css"

type State = Record<string, string>;

export const Login = () => {
    const [state, setState] = React.useState<State>({
        email: "",
        password: "",
    });

    const inputs = [
        { name: "email", type: "text" },
        { name: "password", type: "password" }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setState(state => ({ ...state, [name]: value }));
    }

    const validator = React.useMemo(() => {
        return new Validator(state.password, "password").validate
    }, [state.password]);

    const goodPassword = Object.values(validator).every(val => !!val);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }



    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formContent}>
                {
                    inputs.map(({name, type}) => (
                        <FormInput
                            key={name}
                            inputValue={state[name]}
                            inputName={name}
                            inputType={type}
                            handleChange={handleChange}
                            validatedInput={name === "password" ? validator : {}}
                        />
                    ))
                }
            </div>
            <button className={styles.formSubmit} disabled={!goodPassword || !state.password}>Submit</button>
        </form>
    )
}