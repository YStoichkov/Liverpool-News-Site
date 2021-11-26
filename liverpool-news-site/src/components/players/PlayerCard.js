export function PlayerCard() {
    const cardStyle = {
        width: '18rem'
    };
    return (
        <>
            <div className="card" style={cardStyle}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="timeline-image"><img className="rounded-circle img-fluid" src="@Model.ImageUrl" /></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h1 >Model.FirstName odel.LastName</h1>
                    <h3 className="subheading">Model.Position</h3>
                    <h3 className="subheading">Model.ShirtNumber</h3>
                </div>
                <hr />
                <div className="timeline-body">
                    <h5 className="text-muted">Date Of Birth: Model.DateOfBirth.ToShortDateString()</h5>
                    <h5 className="text-muted">Place Of Birth: Model.PlaceOfBirth</h5>
                    <h5 className="text-muted">Signed: odel.Signed</h5>
                    <h5 className="text-muted">Appearances: Model.Appearances</h5>
                    <h5 className="text-muted">Goals : Model.Goals</h5>
                    <h5 className="text-muted">Biography</h5>
                    <p>Model.Description</p>
                </div>
            </div>
        </>
    )
}