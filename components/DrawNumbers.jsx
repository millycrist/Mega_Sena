import { useState } from 'react';
import RandomNumberGenerator from './RandomNumberGenerator';
import styles from '../style/DrawNumbers.module.css';

const DrawNumbers = () => {
  const [numbers, setNumbers] = useState([]);

  const drawNumbers = () => {
    const newNumbers = [];
    while (newNumbers.length < 6) {
      const num = Math.floor(Math.random() * 61);
      if (!newNumbers.includes(num)) {
        newNumbers.push(num);
      }
    }
    setNumbers(newNumbers);
  };

  return (
    <div className={styles.container}>
      <button onClick={drawNumbers} className={styles.button}>Sortear Números</button>
      <div className={styles.numbersContainer}>
        {numbers.length > 0 && numbers.map(num => (
          <RandomNumberGenerator key={num} number={num} className={styles.number} />
        ))}
      </div>
    </div>
  );
};

export default DrawNumbers;
