async function get(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        return error;
    }
}

export function getBlogEntryById(id) {
    console.log(id);
    return get(`http://localhost:8000/test/blog/entry/5`);
}

export function getBlogEntries() {
    return get(`http://localhost:8000/test/blog/entries`);
}




