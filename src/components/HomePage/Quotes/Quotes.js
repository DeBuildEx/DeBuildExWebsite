import React from "react"
import styles from "./Quotes.module.scss"
import "./Quotes.scss"
import { useCallback } from "react"
import QuotesItem from "./QuotesItem/QuotesItem"
import backend from "src/images/backend.png"
import frontend from "src/images/front-end.png"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Quotes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allQuotesJson {
        nodes {
          name
          quote
          image
        }
      }
    }
  `)
  const slides = data.allQuotesJson.nodes.map(({ name, quote, image }) => (
    <QuotesItem image={image} name={name} quote={quote} />
  ))
  const [currentSlide, setCurrentSlide] = useState(0)
  const moveLeft = useCallback(() => {
    setCurrentSlide(currentSlide => {
      if (currentSlide === 0) {
        return slides.length - 1
      }
      return currentSlide - 1
    })
  }, [])
  const moveRight = useCallback(
    () =>
      setCurrentSlide(currentSlide => {
        if (currentSlide === slides.length - 1) {
          return 0
        }
        return currentSlide + 1
      }),
    []
  )

  const slideSelector = slideNumber => {
    return slides.slice(slideNumber)[0]
  }
  return (
    <div className={styles.quotes}>
      <h1>نظرات مشتریان ما</h1>
      <div className={styles.container}>
        <i
          role="button"
          className="icon ion-md-arrow-dropright"
          onClick={moveRight}
        ></i>
        <div className={styles.quotesContainer}>
          {slideSelector(currentSlide)}
        </div>
        <i
          role="button"
          className="icon ion-md-arrow-dropleft"
          onClick={moveLeft}
        ></i>
      </div>
    </div>
  )
}

export default Quotes
