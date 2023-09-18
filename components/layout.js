import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { DM_Sans} from 'next/font/google'

const name = 'Alfred Premkumar'
export const siteTitle = 'alfredrpk'
const dm_sans_bold = DM_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
})
const dm_sans = DM_Sans({
  weight: '500',
  style: 'normal',  
  subsets: ['latin'],
})

const { heroContent, heroWrapper, imageWrapper, linkCollection, iconStyle} = styles;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="alfredrpk"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={heroWrapper}>
              <div className={imageWrapper}>
                <Image
                  priority
                  src="/images/header.jpg"
                  //placeholder="blur"
                  quality={100}
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                  }}
                  alt="hero image example"
                />
              </div>

              <div className={heroContent}>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={name}
                  style={{ width: 'auto', height: '80%' }}
                />
              </div>
            </div>
            <h1 className={'${dm_sans_bold.className} #{utilStyles.heading2Xl}'}>{name}</h1>
            <div className={linkCollection}>
              <Link class="bi bi-github" style={{ color: 'black' }} href="https://github.com/alfredrpk" title="github"></Link>
              <Link class="bi bi-linkedin" style={{ color: 'black' }} href="https://www.linkedin.com/in/alfred-premkumar-05b66a153/" title="linkedin"></Link>
              <Link class="bi bi-envelope-fill" style={{ color: 'black' }} href="mailto:alfredrpk@gmail.com" title="email"></Link>
              <Link className={iconStyle} href="/about" title="about me">about</Link>
            </div>
            i make things i think are cool
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={'${dm_sans_bold.className} #{utilStyles.headingLg}'}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
