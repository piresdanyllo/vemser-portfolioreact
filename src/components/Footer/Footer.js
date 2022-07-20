import styles from "./Footer.module.css";

const Footer = ({created, url}) => {
  return (
    <div className={styles.footer}>
      <p>Minha conta no github foi criada em {created}</p>
      <p>
        Caso queira saber mais{" "}
        <a href={url} target="_blank" rel="noreferrer">
          clique aqui
        </a>
      </p>
    </div>
  );
};

export default Footer;
