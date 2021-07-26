import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from './home.module.scss'

import AvatarSvg from '../../public/images/avatar.svg'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import { moneyFormat } from '../utils/numberFormat'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News aboute the  <span>React</span> World</h1>
          <p>
            Get acess to all the publications <br></br>
            <span>for {product.amount}month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={AvatarSvg} alt="Girl coding" />
      </main>
    </>
  )
}


export const getStaticProps:GetStaticProps = async () => {
    const price = await stripe.prices.retrieve(process.env.STRIPE_PRICE_KEY)

    const product = {
      priceId: price.id,
      amount: moneyFormat((price.unit_amount / 100)),
    }
    
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}