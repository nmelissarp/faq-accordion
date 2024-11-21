'use client'

import Image from 'next/image';
import styles from './FaqItem.module.sass';
import { useState } from 'react';

type FaqItemProps = {
  question: string,
  answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.FAQItem}>
      <div 
        className={styles.FAQItem__Question}
        onClick={toggleAnswer}
      >
        <h3>{question}</h3>
        <Image
          src={isOpen ? '/images/icon-minus.svg' : '/images/icon-plus.svg'}
          alt={isOpen? 'Collapse' : 'Expand'}
          width={30}
          height={30}
        />
      </div>
      {isOpen && (
        <div className={styles.FAQItem__Answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FaqItem