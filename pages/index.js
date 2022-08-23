import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> I&apos;m James Bryan F. Maratas. My hobbies are playing basketball, online games, swimming, listening to music, dance, singing. My favorite food is buttered garlic shrimp.
 I take the IT course because it is my 3rd choice actually, my 1st and 2nd choice didn&apos;t go as it planned due to some financial problem so that&apos;s why my 3rd choice was the only choice that I had.
I want to improve my learning and skills here in IT so I%apos;ll be able to produce enough and decent skills to work for a decent company. Hopefully I&apos;ll be able to strengthen my weaknesses and use them as my strenght 10 years from now.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
