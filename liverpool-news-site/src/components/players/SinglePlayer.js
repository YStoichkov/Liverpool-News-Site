import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useJwt } from 'react-jwt'
import Cookies from 'universal-cookie'
import { useHistory, Link } from "react-router-dom";
import * as playerService from '../../services/playerService.js'
import { isAuth } from '../../hoc/isAuth.js'

const SinglePlayer = ({ match }) => {
    let [player, setPlayer] = useState([]);
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const { decodedToken, isExpired } = useJwt(authCookie);
    let userId = decodedToken?._id;
    let historyHook = useHistory();

    const headerStyle = {
        backgroundImage: 'url(/img/background-image.jpg)',
        width: '100%',
    }
    const imageStyle = {
        width: '100%'
    }

    const onDeleteHandler = (e) => {
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                container: 'swal-wide',
                confirmButton: 'btn-danger',
                cancelButton: 'btn-success'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure you want to delete this?',
            text: "You won't be able to revert it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                let playerId = player._id;
                let data = {
                    playerId,
                    userId
                }
                playerService.deletePlayer(data)
                    .then(res => {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success',
                        )
                        historyHook.push('/players/all')
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    useEffect(async () => {
        let playerId = match.params.playerId;
        await fetch(`http://localhost:3001/players/details/${playerId}`)
            .then(res => res.json())
            .then(playerResult => {
                let dateStringFormat = playerResult.dateOfBirth;
                let date = new Date(dateStringFormat);
                let result = date.toDateString();
                playerResult.dateOfBirth = result;
                setPlayer(playerResult);
            })
    }, [])
    return (
        <>
            <header className="main-header post-head" style={headerStyle}>
                <img src={player.playerImage} style={imageStyle} />
                <div className="vertical">
                    <div className="main-header-content inner">
                        <h1 className="post-title">{player.firstName} {player.lastName}</h1>
                        <div className="entry-title-divider">
                            <span></span><span></span><span></span>
                        </div>
                        <section className="post-meta">
                            <time className="post-date" >Date of Birth: {player.dateOfBirth}</time> | <a className="scrolltocomments" href="#disqus_thread" />
                            <br />
                            <span>Appearances: {player.apperances} </span>
                            <br />
                            <span>Goals: {player.goals}</span>
                            <br />
                            <button className="btn btn-warning" onClick={onDeleteHandler}>Delete Player</button>
                            <Link to={{ pathname: `/players/edit/${player._id}`, state: player }}><button className="btn btn-primary">Edit Player</button></Link>
                        </section>
                    </div>
                </div>
            </header>
            <main id="content" className="content" role="main">
                <div className="wraps">
                    <img src="/img/shadow.png" className="wrapshadow" />
                    <article className="post featured">
                        <section className="post-content">
                            <p>
                                <strong>
                                    {player.description}
                                </strong>
                            </p>
                        </section>
                    </article>
                </div>
            </main >
        </>
    )
}

export default isAuth(SinglePlayer)