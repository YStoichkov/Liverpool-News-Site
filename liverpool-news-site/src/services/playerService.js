const baseUrl = `http://localhost:3001/players`;

exports.createPlayer = async (playerData) => {
    let res = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(playerData)
    })

    let jsonResult = await res.json();
    return jsonResult;
}

exports.editPlayer = async (playerData, playerId) => {
    let res = await fetch(`${baseUrl}/edit/${playerId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(playerData)
    })

    let jsonResult = await res.json();
    return jsonResult;
}

exports.deletePlayer = async (playerId, userId) => {
    let data = {
        playerId,
        userId
    }

    let res = await fetch(`${baseUrl}/delete/${playerId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let jsonResult = await res.json();
    return jsonResult;
}
