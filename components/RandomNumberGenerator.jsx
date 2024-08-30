import styles from '../style/RandomNumberGenerator.module.css';

const RandomNumberGenerator = ({ number }) => {
  return <span className={styles.number}>{number}</span>;
};

export default RandomNumberGenerator;
