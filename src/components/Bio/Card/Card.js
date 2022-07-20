import styles from "./Card.module.css";

const Card = ({ repos, followers, following }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <span>Total Repositórios:</span>
        <span>{repos}</span>
      </div>
      <div className={styles.card}>
        <span>Total Seguidores:</span>
        <span>{followers}</span>
      </div>
      <div className={styles.card}>
        <span>Total Seguindo:</span>
        <span>{following}</span>
      </div>
    </div>
  );
};

export default Card;
