import * as React from "react";
import right from "../../assets/correct.png";
import wrong from "../../assets/wrong.png";
import { errors } from "../../utils/errors";
import styles from "./formInput.module.css";

interface Props {
    inputValue: string;
    inputName: string;
    inputType: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validatedInput: Record<string, boolean>
}

export const FormInput = ({inputValue, inputName, inputType, handleChange, validatedInput}: Props) => {
    return (
        <div className={styles.inputCont}>
            <label htmlFor={inputName} className={styles.inputLabel}>
                {inputName}
                <input className={styles.input} type={inputType} id={inputName} name={inputName} value={inputValue} onChange={handleChange} />
            </label>

            <ul className={styles.inputUl}>
                {Object.entries(validatedInput)?.map(([key, value]) => {
                    return (
                        <li key={key} className={styles.inputLi}>
                            <img className={styles.inputImg} src={value ? right : wrong} alt={value ? "right" : "wrong"} />
                            <p>{errors[key]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}