'use client'

import analyzeIcon from '@/app/assets/analyze-icon.svg'
import background from '@/app/assets/background.svg'
import Banner from '@/components/Banner'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
      <div className={styles.placeholder}>
        <Banner
          backgroundSrc={background}
          iconSrc={analyzeIcon}
          preSubmitTitle='Expert Report'
          preSubmitSubTitle='Next Step'
          preSubmitDescription='Please get in touch if you would like an expert report for this site. Benefits include:'
          preSubmitListItems={[
            'Key insights from our expert team',
            'An in-depth analysis of the site',
            'Recommendations of next steps to take',
          ]}
          preSubmitButtonLabel='Get In Touch'
          postSubmitTitle='Request Received'
          postSubmitDescription='We received your messge. Please feel free to get in touch again if you would like to include any further details or ask any other questions. We are eager to assist you.'
          postSubmitButtonLabel='Send Another Request'
        />
      </div>
    </main>
  )
}
