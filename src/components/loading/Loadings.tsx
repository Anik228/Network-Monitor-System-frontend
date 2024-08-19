import { FC } from "react";
import styles from "./loading.module.scss";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: FC<LoadingProps> = ({ isLoading }: LoadingProps) => {
  return (
    <>
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.spinnerBox}>
            <div className={styles.pulseContainer}>
              <div
                className={`${styles.pulseBubble} ${styles.pulseBubble1}`}
              ></div>
              <div
                className={`${styles.pulseBubble} ${styles.pulseBubble2}`}
              ></div>
              <div
                className={`${styles.pulseBubble} ${styles.pulseBubble3}`}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Loading;
