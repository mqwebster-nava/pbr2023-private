import { Button } from "../";
import styles from "./Details.module.css";

export interface ButtonProps {
  summary: string;
}

export const Details: React.FC<ButtonProps> = ({ summary, children }) => {
  return (
    <details className={styles.details}>
      <summary className="pb-2xl">
        <Button href={null}>{summary}</Button>
      </summary>
      {children}
    </details>
  );
};
