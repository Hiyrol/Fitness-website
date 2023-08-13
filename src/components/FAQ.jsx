import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FAQ = ( {question, answer} ) => {
  const [answerShowing, setAnswerShowing] = useState(false)


  return (
    <article className="faq">
        <div>
            <h4>{question}</h4>
            <button className="faq__icon" onClick={() => setAnswerShowing(!answerShowing)}>
                {
                    answerShowing ? <AiOutlineMinus/> :<AiOutlinePlus/>
                }
            </button>
        </div>
        {answerShowing && <p>{answer}</p>}

    </article>
  )
}

export default FAQ