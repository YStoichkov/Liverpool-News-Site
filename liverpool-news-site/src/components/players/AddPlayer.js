import Cookies from "universal-cookie";
import { useState } from "react";
import { useJwt } from 'react-jwt'
import { useHistory } from 'react-router-dom';
import * as playerService from '../../services/playerService.js';
import { isAuth } from "../../hoc/isAuth.js";

const AddPlayer = () => {
    let historyHook = useHistory();
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const [notValid, setNotValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { decodedToken } = useJwt(authCookie);
    let userId = decodedToken?._id;
    const onFormSubmit = (e) => {
        e.preventDefault();
        try {
            let formData = new FormData(e.currentTarget);
            let { firstName, lastName, position, shirtNumber, dateOfBirth, apperances, goals, playerImage, description } = Object.fromEntries(formData);
            if (firstName !== '' && lastName !== '' && position !== '' && shirtNumber !== '' && dateOfBirth !== '' && apperances !== ''
                && goals != '', playerImage !== '' && description !== '') {
                let playerData = {
                    firstName,
                    lastName,
                    position,
                    shirtNumber,
                    dateOfBirth,
                    apperances,
                    goals,
                    playerImage,
                    description,
                    userId,
                }
                playerService.createPlayer(playerData)
                    .then(res => {
                        if (res.message === 'ok') {
                            historyHook.push('/players/all')
                        } else {
                            setErrorMessage(`Invalid input`)
                            setNotValid(true);
                        }
                    })
            }
            else {
                setErrorMessage(`Invalid input`)
                setNotValid(true);
            }
        } catch (error) {
            setErrorMessage(`Invalid input`)
            setNotValid(true);
        }
    }
    return (
        <>
            <br />
            <br />
            <section id="contactUs-page" className="content auth">
                <form id="contact-form" onSubmit={onFormSubmit}>
                    <div className="container">
                        <h1>Add Player</h1>
                        <p className="errorField">
                            {notValid && <span>{errorMessage}</span>}
                        </p>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" />
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" name="position" />
                        <label htmlFor="shirtNumber">Shirt Number</label>
                        <input type="text" id="shirtNumber" name="shirtNumber" />
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" />
                        <label htmlFor="apperances">Apperances:</label>
                        <input type="text" name="apperances" id="apperances" />
                        <label htmlFor="goals">Goals</label>
                        <input type="text" id="goals" name="goals" />
                        <label htmlFor="playerImage">Player image</label>
                        <input type="text" id="playerImage" name="playerImage" />
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows="10"></textarea>
                        <input className="btn submit" type="submit" value="Add Player" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default isAuth(AddPlayer)