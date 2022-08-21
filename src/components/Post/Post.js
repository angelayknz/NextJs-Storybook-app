import styles from '../Post.module.scss'

export default function Post({ content, date }) {
  return (
    <>
      <p className={styles.postsContent}>{content}</p>
      <p className={styles.postsDate}>{date}</p>
    </>
  )
}
