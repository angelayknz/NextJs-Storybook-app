import styles from '../Post.module.scss'
import { FaHeart, FaShareAlt } from 'react-icons/fa'

export default function Post({ content, date }) {
  return (
    <>
      <p className={styles.postsContent}>{content}</p>
      <ul className={styles.postsMeta}>
        <li className={styles.postsMetaData}>
          <FaHeart /> 34
        </li>
        <li className={styles.postsMetaData}>
          {' '}
          <FaShareAlt /> Share
        </li>
        <li className={styles.postsMetaData}>{date}</li>
      </ul>
    </>
  )
}
