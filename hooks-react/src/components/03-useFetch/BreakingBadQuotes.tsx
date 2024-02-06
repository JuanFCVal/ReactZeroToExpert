import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

const BreakingBadQuotes = () => {
    const {counter, addToCounter, minToCounter} = useCounter(1)
    const [url, setUrl] = useState('')
    const {data, isLoading, hasError} = useFetch(url)
    const updateUrl = () => {
        addToCounter()
        setUrl(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    }
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <button onClick={updateUrl}>Agregar nueva quote</button>
      {
        isLoading && hasError && <div className="alert alert-info text-center">Loading...</div>
      }
      {
            data && data.length > 0 &&   data.map((quote: any) => { 
                    key :quote.quote_id   
                    return (
                        <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote.quote}</p>
                        <span className="blockquote-footer">{quote.author}</span>
                        </blockquote>
                    )
                })
      }
    </div>
    
  )
}

export default BreakingBadQuotes
