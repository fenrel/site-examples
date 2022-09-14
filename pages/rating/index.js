import styles from "./rating.module.scss";
import cn from 'classnames';
import {useState} from 'react';
import Head from "next/head";

export default function Rating() {
  const [isVoted, setIsVoted] = useState(false);
  const [grade, setGrade] = useState(null);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet" /> 
      </Head>
      <main className={styles.main}>
        {isVoted ? <ThankYou grade={grade} /> : <RateUs grade={grade} setIsVoted={setIsVoted} setGrade={setGrade} />}
      </main>
      <style jsx global>{`
      body {
        background-color: hsl(216, 12%, 8%);
      }`
      }</style>
    </>
  )
}

function RateUs({ grade, setGrade, setIsVoted }) {
  function handleClick(e) {
    e.preventDefault();
    setIsVoted(prev => !prev);
  }
  return (
    <>
      <div className={styles.circle}>
        <img  src="/rating/icon-star.svg" />
      </div>
      <h1 className={styles['header-text']}>How did we do?</h1>
      <p className={ styles.text }>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map(i => <div key={i} onClick={() => setGrade(i)} className={i === grade ? styles["selected-circle"] : styles.circle}>{i}</div>)}
      </div>
      <button className={styles.submit} disabled={grade === null} onClick={handleClick}>SUBMIT</button>
    </>
  )

 }

function ThankYou({ grade }) {
  return (
    <>
      <div className={styles["thank-you-image"]}>
        <img src="/rating/illustration-thank-you.svg" />
      </div>
      <p className={styles["thank-you-stat-text"]}>You selected {grade} out of 5!</p>
      <h1 className={styles["thank-you-header-text"]}>Thank you!</h1>      
      <p className={styles["thank-you-text"]}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
    </>
  )
}
