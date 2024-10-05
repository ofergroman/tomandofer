import React, {ChangeEvent, useEffect, useRef, useState} from "react";

export type StoryBoardProps = ChildProps & { content: string, updatePlayerTurn: () => void };

function StoryBoard({className, content, updatePlayerTurn}: StoryBoardProps): React.JSX.Element {
    const [submitted, setSubmitted] = useState<string>('');
    const [activeText, setActiveText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSubmitted(content);
    }, [content]);

    const submitText= ()=>{
        if (!activeText) {
            return
        }

        const aggregatedText = `${submitted} ${activeText.trim()}`;
        setActiveText('');
        setSubmitted(aggregatedText);
        inputRef?.current?.focus();
        updatePlayerTurn();
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