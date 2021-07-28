import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts(){
    return (
        <>
         <Head>
            <title>Posts | Ignews</title>
         </Head>

         <main className={styles.container}>
             <div className={styles.postsList}>
                 <a href="">
                     <time>28 de julho de 2021</time>
                     <strong>some title</strong>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sit officiis. Ipsa magni assumenda explicabo earum obcaecati fugit quod repudiandae.</p>
                 </a>
                 <a href="">
                     <time>28 de julho de 2021</time>
                     <strong>some title</strong>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sit officiis. Ipsa magni assumenda explicabo earum obcaecati fugit quod repudiandae.</p>
                 </a>
                 <a href="">
                     <time>28 de julho de 2021</time>
                     <strong>some title</strong>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sit officiis. Ipsa magni assumenda explicabo earum obcaecati fugit quod repudiandae.</p>
                 </a>
                 <a href="">
                     <time>28 de julho de 2021</time>
                     <strong>some title</strong>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, sit officiis. Ipsa magni assumenda explicabo earum obcaecati fugit quod repudiandae.</p>
                 </a>
             </div>
         </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ],{
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })

    console.log(response);
    

    return {
        props: {}
    }
}