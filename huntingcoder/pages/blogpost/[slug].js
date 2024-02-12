import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";



//step 1: find the file corresponding to the slug
//step 2: populate them inside the page
function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis
          est nesciunt incidunt dolores eveniet, alias vero corporis dicta,
          dolor laudantium, omnis fugit. Obcaecati itaque distinctio quae
          explicabo, magni expedita doloribus fugiat mollitia ad. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis laborum
          iusto, dicta sapiente ipsam delectus quidem optio doloremque saepe
          eligendi provident laudantium. Id recusandae autem quod ipsum
          inventore labore consectetur aliquam necessitatibus provident cumque
          illum, blanditiis, dolores aut totam! Tempora ex necessitatibus
          debitis ab expedita.
        </div>
      </main>
    </div>
  );
}
export default Slug;
