
const loadDataFromApi = async() => {
    const loadData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const data = await loadData.json();
    return data;
}

export {loadDataFromApi}