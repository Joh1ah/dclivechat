export let getAsText = async (url, options = {}, onerror = console.error) => {
    if (!options.credentials) options.credentials = 'include';
    let res = await fetch(url, options).catch(onerror);
    if (!res || !res.ok) return '';
    return (await res.text().catch(onerror)).replace(/(\n|\r|\t)/g, '');
};