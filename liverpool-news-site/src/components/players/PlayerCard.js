import { Link } from 'react-router-dom'

export function PlayerCard({
    player
}) {
    const cardStyle = {
        width: '18rem'
    };
    return (
        <>
            <div className="column" style={cardStyle}>
                <img className="card-img-top" src={player.playerImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{player.firstName} {player.lastName}</h5>
                    <Link to={`/players/details/${player._id}`} className="btn btn-primary">Player Profile</Link>
                </div>
            </div>
        </>
    )
}