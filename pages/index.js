import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div><h1 className={styles.title}>Homepage</h1></div>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptas aspernatur earum libero tempora, quo voluptates, quis saepe at nam sint! Sint sit soluta ipsa architecto perspiciatis fugiat aut non eligendi laboriosam tempora! Ratione, culpa corporis exercitationem enim distinctio voluptatibus commodi modi consequatur perspiciatis deleniti aliquid fugiat quisquam facilis, voluptate iure inventore pariatur harum magnam?</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet nulla illo ea! Officiis modi, amet distinctio dignissimos eius sit rem maiores quae, vel, illum optio quam libero qui iure officia? Vitae ex corrupti velit odit temporibus quis, quaerat harum odio cum laudantium illum quibusdam totam dolor excepturi porro voluptatum ipsum dolore eligendi consectetur id!</p>
    <Link href='/ninjas'><a className={styles.btn}> See Ninja Listing</a></Link>
    </>
  )
}
