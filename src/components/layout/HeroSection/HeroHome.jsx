import styles from './HeroHome.module.scss';
import { useRouter } from 'next/navigation';  
import Button from '@/components/common/Button';


function HeroSplitSection({ title, description,imageUrl }) {
  const router = useRouter();
  return (
    <>
    <section className={styles.heroSplit}>
      <div className={styles.textContent}>
        
      <h1><span>{title}</span></h1>
        <p>{description}</p>
      </div>
      <div className={styles.imageSide}>

      </div>  
    </section>

    <div className={styles.button}>
      <Button  onClick={() => router.push('/contact')}>
      Conversemos
      </Button>
    </div>
    </>
  );
}

export default HeroSplitSection;