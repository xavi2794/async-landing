const API = 'https://moviesdatabase.p.rapidapi.com/titles?titleType=movie&list=top_rated_250&limit=50';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '806d73c255msh379de7c88ddc308p1b504fjsne3f595ecfc00',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const movies = await fetchData(API);
        let view = `
        ${movies.results.map(movie => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${movie.primaryImage.url}" alt="" heigh="440px" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${movie.titleText.text} - ${movie.releaseYear.year}
            </h3>
            </div>
        </div>
        `).slice(0,50).join('')}
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();