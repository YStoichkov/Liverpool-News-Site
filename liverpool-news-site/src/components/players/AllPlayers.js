import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Loading from '../Loading.js';
import { isAuth } from '../../hoc/isAuth.js'
import { PlayerCard } from './PlayerCard.js';

const AllPlayers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState([]);
    useEffect(async () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        await fetch(`http://localhost:3001/players/all`)
            .then(res => res.json())
            .then(players => {
                setPlayers(players);
            });
    }, []);
    return (
        <>
            <div>
                <Button variant="info"><NavLink to="/players/add">Add Players</NavLink></Button>{' '}
                <div className="container">
                    {isLoading == true
                        ? <Loading />
                        : <div className="row">
                            <h1 className="text center" style={{ marginRight: '120px', textAlign: 'center' }}>All First Team Players</h1>
                            <div>
                                {players.map(x => <PlayerCard player={x} key={x._id} id={x._id} />)}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default isAuth(AllPlayers);