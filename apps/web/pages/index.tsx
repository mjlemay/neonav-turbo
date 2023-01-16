import { Logo, Button } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <Logo />
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
