import * as React from "react";
import styles from "./pageWrapper.module.css"

interface Props {
    children: JSX.Element;
}

export const PageWrapper = ({ children }: Props) => {
    return (
        <div className={styles.page}>
            <header className={styles.pageHead}>
                <h1 className={styles.pageTitle}>Registration</h1>
            </header>
            <main className={styles.pageBody}>
                {children}
            </main>
        </div>
    )
}