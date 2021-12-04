import { useHistory } from "react-router-dom";
import * as playersService from '../../services/playerService.js'

export function EditPlayer({
    location
}) {
    let playerToEdit = location.state;
    let playerId = playerToEdit._id;
    let historyHook = useHistory();
    const onFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { firstName, lastName, position, shirtNumber, dateOfBirth, apperances, goals, playerImage, description } = Object.fromEntries(formData);
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
        }
        playersService.editPlayer(playerData, playerId)
            .then(res => {
                if (res == 'OK') {
                    historyHook.push(`/players/details/${playerId}`)
                }
            })
    }
    return (
        <>
            <br />
            <br />
            <section id="contactUs-page" className="content auth">
                <form id="contact-form" onSubmit={onFormSubmit}>
                    <div className="container">
                        <h1>Edit Player</h1>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" defaultValue={playerToEdit.firstName} />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" defaultValue={playerToEdit.lastName} />
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" name="position" defaultValue={playerToEdit.position} />
                        <label htmlFor="shirtNumber">Shirt Number</label>
                        <input type="text" id="shirtNumber" name="shirtNumber" defaultValue={playerToEdit.shirtNumber} />
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={playerToEdit.dateOfBirth} />
                        <label htmlFor="apperances">Apperances:</label>
                        <input type="text" name="apperances" id="apperances" defaultValue={playerToEdit.apperances} />
                        <label htmlFor="goals">Goals</label>
                        <input type="text" id="goals" name="goals" defaultValue={playerToEdit.goals} />
                        <label htmlFor="playerImage">Player image</label>
                        <input type="text" id="playerImage" name="playerImage" defaultValue={playerToEdit.playerImage} />
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows="10" defaultValue={playerToEdit.description}></textarea>
                        <input className="btn submit" type="submit" value="Edit Player" />
                    </div>
                </form>
            </section>
        </>
    )
}