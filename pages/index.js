import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


//using static page rendering
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


//using server-side rendering
// export async function getServerSideProps(context) {
//   return: {
//     props: {
//       //props for component
//     }
//   }
// }


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Don.  I am currently seeking a position as a Junior Web Developer.  This is the first time I've used NextJS, and I am impressed!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
          
        </ul>
      </section>
    </Layout>
  )
}