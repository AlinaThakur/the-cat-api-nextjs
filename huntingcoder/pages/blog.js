import React from 'react'
import styles from "../styles/Blog.module.css";
import Link from "next/link"

//step 1 : Collect all the files from blogdata directory
//step 2 : iterate through them and display them
function Blog() {
  return (
    <div className={styles.container}>
            <main className={styles.main}>

    <div className="blogs">
    <div>
      <Link href={"blogpost/learn-javascript"}>
      <h3 className={styles.blogItemh3}>How to learn JavaScript</h3></Link>
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
    <div className="blogItem">
      <h3>How to learn JavaScript</h3>
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
    <div className="blogItem">
      <h3>How to learn JavaScript</h3>
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
  </div></main >
  </div>)
}

export default Blog