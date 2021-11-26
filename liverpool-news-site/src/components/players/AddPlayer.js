import axios from "axios";

export function AddPlayer() {
    const onFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { firstName, lastName, position, shirtNumber, dateOfBirth, signed, apperances, playerImage, description } = Object.fromEntries(formData);
        let playerData = {
            firstName,
            lastName,
            position,
            shirtNumber,
            dateOfBirth,
            signed,
            apperances,
            playerImage,
            description
        }
        axios.post(`http://localhost:3001/players/add`, playerData).then(res => {
            if (res.status === 200) {
                // historyHook.push('/news');
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
                        <h1>Add Player</h1>
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
                        <label htmlFor="signed">Signed</label>
                        <input type="text" id="signed" name="signed" />
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