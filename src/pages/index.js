import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Bio from '../components/bio/Bio'
import Post from '../components/Post'
import { useAuth } from '../hooks/useAuth.js'
import PostForm from '../components/PostForm/PostForm'
import netlifyIdentity from 'netlify-identity-widget'
import { getAllPosts, createPost } from '../lib/posts'
import AnimatedTextWord from '../components/AnimatedTextWord'

export default function Home({ posts: defaultPosts }) {
  const [posts, updatePosts] = useState(defaultPosts)

  const postsSorted = posts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })

  const { user, logIn, logOut } = useAuth()

  async function handleOnSubmit(data, e) {
    e.preventDefault()

    await createPost(data)

    const posts = await getAllPosts()
    updatePosts(posts)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!user && (
          <button
            className={styles.logInButton}
            onClick={() => {
              netlifyIdentity.open()
            }}
          >
            Log In
          </button>
        )}
        {user && (
          <button className={styles.logInButton} onClick={logOut}>
            Log Out
          </button>
        )}

        <Bio
          headshot="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeEGpHmxeAkxQH1jb_RmqJGdwVXefp5-88g&usqp=CAU"
          name="Angela Yang"
          tagline="Fullstack Software Developer"
        />

        <ul className={styles.posts}>
          {postsSorted.map((post) => {
            const { content, id, date } = post
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  }).format(new Date(date))}
                  // date={new Intl.DateTimeFormat('en-US').format(new Date(date))}
                />
              </li>
            )
          })}
        </ul>

        {user && <PostForm onSubmit={handleOnSubmit} />}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
