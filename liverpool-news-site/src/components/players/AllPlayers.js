import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from '../Loading.js';
import { PlayerCard } from './PlayerCard.js';

export function AllPlayers() {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState([]);
    useEffect(async () => {
        console.log('from loading')
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        // await fetch(`http://localhost:3001/news/all`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setNews(data);
        //     });
    }, []);
    return (
        <>
            <div>
                <NavLink to="/add-player">Add Player</NavLink>
                <div className="container">
                    <h1 className="text center">All First Team Players</h1>
                    <div class="grid">
                        {isLoading == true
                            ? <Loading />
                            : <ul className="players-list">
                                {players.map(x => <PlayerCard plyer={x} key={x._id} />)}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}