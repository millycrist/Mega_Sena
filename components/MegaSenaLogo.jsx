import Image from 'next/image';
import logo from '../public/mega-sena-logo.jpg';
import styles from '../style/MegaSenaLogo.module.css';

const MegaSenaLogo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src={logo}
        alt="Mega Sena Logo"
        width={200}
        height={200}
        className={styles.logoImage} 
      />
    </div>
  );
};

export default MegaSenaLogo;
