import AnimatedTextWord from '../AnimatedTextWord'
import styles from './Bio.module.scss'

export default function Bio({ headshot, name, tagline, role }) {
  return (
    <>
      <div className={styles.bio}>
        <div className={styles.bioImage}>
          <img src={headshot} alt={`Headshot of ${name}`} />
        </div>

        <div className={styles.bioContent}>
          <p className={styles.bioContentName}>{name}</p>
          <p className={styles.bioContentTagline}>{tagline}</p>
          <hr />
          <div className={styles.animation}>
            <AnimatedTextWord text={'HTML CSS JAVASCRIPT C# REACT'} />
          </div>
        </div>
      </div>
    </>
  )
}
