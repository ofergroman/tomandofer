import React from "react";
export type StoryBoardProps = ChildProps & { game:Game };

function StoryBoard({className, game }: StoryBoardProps): React.JSX.Element {
    return <textarea className={className} value={game.content}> this is the story board</textarea>;
}

export default StoryBoard;