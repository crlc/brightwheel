const url = "http://localhost:3001/search";

const handleResponse = (response) => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error(`Status: ${response.status}`);
    }
}

export const getStarred = (callback) => 
    fetch(`${url}?starred=${true}`)
    .then(handleResponse)
    .then(response => callback(response))
    .catch(e => console.log(e))

export const getCompanies = (searchTerm, callback) =>
    fetch(`${url}?q=${searchTerm}&_limit=10`)
    .then(handleResponse)
    .catch(e => console.log(e) && callback)

export const updateStarred = (id, starred) => 
    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "starred": starred
        })
    })
    .then(handleResponse)