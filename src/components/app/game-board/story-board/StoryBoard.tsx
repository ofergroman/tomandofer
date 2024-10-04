import React, {ChangeEvent, useEffect, useRef, useState} from "react";

export type StoryBoardProps = ChildProps & { game: Game };

function StoryBoard({className, game}: StoryBoardProps): React.JSX.Element {
    const [submitted, setSubmitted] = useState<string>('');
    const [activeText, setActiveText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSubmitted(game.content);
    }, []);

    const submitText= ()=>{
        const aggregatedText = `${submitted} ${activeText.trim()}`;
        setActiveText('');
        setSubmitted(aggregatedText);
        inputRef?.current?.focus();

    }
    return <div className={className}>
        <div className='flex'>
        <div>{submitted}</div>
        <input
            ref={inputRef}
            autoFocus={true}
            type='text'
            value={activeText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setActiveText(e.target.value)}
            className='ml-2 bg-transparent w-fit'
        ></input>
        </div>

        <button onClick={submitText} className='bg-transparent'>Submit my Words</button>
    </div>;
}

export default StoryBoard;