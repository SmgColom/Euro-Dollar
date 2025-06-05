import styles from './HeroHome.module.scss';
import Image from 'next/image'; 


function HeroSplitSection({ title, description,imageUrl }) {
  return (
    <section className={styles.heroSplit}>
      <div className={styles.textContent}>
        
      <h1><span>{title}</span></h1>
        <p>{description}</p>
      </div>
      <div className={styles.imageSide}>
      <Image 
          src={imageUrl} 
          alt={"Imagen tigre Suramericana"} 
          width={500} 
          height={300} 
        />
      </div>
    </section>
  );
}

export default HeroSplitSection;