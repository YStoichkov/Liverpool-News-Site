const baseUrl = `http://localhost:3001`;
exports.login = async ({ email, password }) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    return jsonResult;
}

exports.register = async (user) => {
    let res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(user)
    });

    let jsonResult = await res.json();
    return jsonResult;
}

exports.getCreatorName = async (userId) => {
    let res = await fetch(`${baseUrl}/user/${userId}`);

    let jsonResult = await res.json();
    let fullName = jsonResult.firstName + ' ' + jsonResult.lastName;
    return fullName;
}


