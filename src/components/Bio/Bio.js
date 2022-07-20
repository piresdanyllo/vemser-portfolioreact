import Footer from "../Footer/Footer";
import styles from "./Bio.module.css";
import Card from "./Card/Card";
import SobreMim from "./SobreMim/SobreMim";

const Bio = ({
  imgUrl,
  name,
  bio,
  location,
  company,
  created,
  url,
  repos,
  followers,
  following,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={imgUrl} alt="" />
        <h1>Olá, me chamo {name}</h1>
      </div>
      <p>
        Espero nesse portfolio conseguir praticar React e falar um pouco sobre
        mim
      </p>
      <SobreMim bio={bio} location={location} company={company} />
      <Card repos={repos} followers={followers} following={following} />
      <Footer created={created} url={url}/>
    </div>
  );
};

export default Bio;
