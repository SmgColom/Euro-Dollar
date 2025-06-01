import styles from './HeroHome.module.scss';


function HeroSplitSection({ title, subtitle, description, feature1, feature2, feature3, feature4, feature5, finalmessage, imageUrl }) {
  return (
    <section className={styles.heroSplit}>
      <div className={styles.textContent}>
      <h1><span>{title}</span></h1>
      <h2><span>{subtitle}</span></h2>
        <p>{description}</p>
        <p>{feature1}</p>
        <p>{feature2}</p>
        <p>{feature3}</p>
        <p>{feature4}</p>
        <p>{feature5}</p>
        <p>{finalmessage}</p>
      </div>
      <div className={styles.imageSide}>
      <img src={imageUrl} alt={title} />
      </div>
    </section>
  );
}

export default HeroSplitSection;