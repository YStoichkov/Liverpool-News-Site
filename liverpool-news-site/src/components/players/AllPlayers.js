import { SinglePlayerCard } from "./SinglePlayerCard.js";

export function AllPlayers() {

    return (
        <>
            <h1 className="site-footer clearfix">All First Team Players</h1>
            <div className="container">
                <SinglePlayerCard />
            </div>
        </>
    )
}