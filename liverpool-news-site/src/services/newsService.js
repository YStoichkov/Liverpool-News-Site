const baseUrl = `http://localhost:3001/news`;

exports.createNews = async (newsData) => {
    let res = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newsData)
    })

    let jsonResult = await res.json();
    return jsonResult;
}

exports.editNews = async (newsData, newsId) => {
    let res = await fetch(`${baseUrl}/edit/${newsId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newsData)
    })

    let jsonResult = await res.json();
    return jsonResult;
}

exports.deleteNews = async (newsId, userId) => {
    let data = {
        newsId,
        userId
    }

    let res = await fetch(`${baseUrl}/delete/${newsId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let jsonResult = await res.json();
    return jsonResult;
}

exports.latestNews = async () => {
    let res = await fetch(`${baseUrl}/latest`);

    let jsonResult = await res.json();
    return jsonResult;
}

exports.allNews = async () => {
    let res = await fetch(`${baseUrl}/all`);
    let jsonResult = await res.json();
    return jsonResult;
}