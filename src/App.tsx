import {useEffect, useState} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [shownAdjectives, setShownAdjectives] = useState<string[]>([]);
  const adjectives = ['nevela','gdola','shalom.'];
    let wordList = [];
  function iterate() {
      if(count >= adjectives.length) {
          setCount(0)
      } else {
          setCount(prevCount => prevCount +1 )
      }

  }
    useEffect(() => {
        setShownAdjectives(adjectives.slice(0, count));
    }, [count]);
    wordList =  shownAdjectives.map(word => <div className="slide-in text-6xl font-bold flex items-center ml-5 space-x-0"
                                                 key={word}>{word}</div>)
  return (
    <>
        <div className="flex flex-row  flex-grow ml-20">
      <div className="text-6xl font-bold flex items-center m-1 space-x-0">Shalom</div>
        <button className="text-6xl ml-2.5" onClick={iterate}>Ata: </button>
        <div className="word-containe flex flex-row ml-5">{wordList}</div>
        </div>
    </>
  )
}

export default App
