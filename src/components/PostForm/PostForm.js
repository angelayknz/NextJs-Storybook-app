import styles from './PostForm.module.scss'

const PostForm = ({ onSubmit }) => {
  function handleOnSubmit(e) {
    const { currentTarget } = e
    const fields = Array.from(currentTarget.elements)
    const data = {}

    fields.forEach((field) => {
      if (!field.name) return
      data[field.name] = field.value
    })

    if (typeof onSubmit === 'function') {
      onSubmit(data, e)
    }
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <textarea
        name="content"
        id="content"
        className={styles.formContent}
      ></textarea>
      <button type="button" aria-hidden="true" className={styles.formButton}>
        Add new post
      </button>
    </form>
  )
}

export default PostForm
