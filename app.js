// Initialization of useful Variables.
let data = [];
let count = 4;

// Calling a JSON file into JAVASCRIPT

fetch('Asset.json')
.then(response => {
    if (!response.ok){
        throw new Error("Network failed:", response.status);
    }
    return response.json();
})
.then( json => {
    data = json;
    updateGallery();
})
.catch(error => {
    console.error("Failed to load the file:", error);
})


function updateGallery(){
    const container = document.getElementById('features-card-container');
    container.innerHTML = '';

    data.slice(0, count).forEach( picture => {
        const img = document.createElement('img');
        img.src = picture.image;
        img.classList.add('gallery-item');
        container.appendChild(img);
    })
}

document.getElementById('btn').addEventListener("click", () => {
    const btn = document.getElementById('btn');
    const container = document.getElementById('features-card-container');
    
    if (count === 4){
        count = data.length;
        btn.textContent = "View Less";
    } else{
        count = 4;
        btn.textContent = "View More";
        container.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    updateGallery();
})

