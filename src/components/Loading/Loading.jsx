import styles from "./Loading.module.css";

function Loading({ ...props }) {
  return (
    <div className={styles.loading} {...props}>
      <span className="loader"></span>
    </div>
  );
}

export default Loading;
