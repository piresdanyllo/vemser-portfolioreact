import styles from './SobreMim.module.css'

const SobreMim = ({bio, location, company}) => {
  return (
    <ul>
      <li>
        <span>Sobre mim:</span>
        <span>{bio}</span>
      </li>
      <li>
        <span>Onde moro?</span>
        <span>{location}</span>
      </li>
      <li>
        <span>Onde trabalho?</span>
        <span>{company}</span>
      </li>
    </ul>
  );
};

export default SobreMim;
