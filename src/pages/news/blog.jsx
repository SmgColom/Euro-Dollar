import { useState, useEffect, Fragment } from "react"
import Head from "next/head"

import HeroSection from "@/components/layout/HeroSection"
import ArticlesList from "@/components/features/articles/ArticlesList";

function Blog(props) {
  const { WellnessArticles } = props;

  return (
    <Fragment>
      <Head>
        <title>Salud | Bienestar</title>
        <meta 
          name='description'
          description='Navega nuestro blog de salud y bienestar con los mejores articulos alrededor del mundo'
        />
      </Head>
      <HeroSection 
        title="Blog de Bienestar"
        description="Encuentra la mejor información para tu bienestar"
        bgImage="/backgrounds/Bienestar.jpg"
      />

      {WellnessArticles.length > 0 && <ArticlesList articles={WellnessArticles}/>}
    </Fragment>
  )
}

// ngsp
export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=health+OR+wellness&language=es&apiKey=${process.env.WELLNESS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;
  //console.log(articles);

  // Error handling
  if(!response.ok){
    throw new Error(`Failed to fetch posts - Error ${response.status}: ${data.message}`)
  }

  return {
    props: {
      WellnessArticles: articles
    },
    revalidate: 60  // ISR
  };
};

export default Blog