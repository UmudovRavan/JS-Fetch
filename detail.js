let detail = document.getElementById("data-details");

let url = new URLSearchParams(window.location.search);
let movieId = url.get('id');

    fetch(`https://api.tvmaze.com/shows/${movieId}`)
        .then(response => response.json())
        .then(datas  => {
                detail.innerHTML = `<div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${datas.image.original}" class="img-fluid rounded-start" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title">${datas.name}</h2>
                                <p>${datas.summary}</p>
                                <ul>
                                    <li><strong>IMDB Point:</strong>${datas.rating.average}</li>
                                    <li><strong>Language:</strong>${datas.language}</li>
                                    <li><strong>Genre:</strong>${datas.genre}</li>
                                    <li><strong>Premiered:</strong>${datas.premiered}</li>
                                    <li><strong>Ended:</strong>${datas.ended}</li>
                                </ul>
                                <a href="${datas.officialSite}" class="btn btn-success">Go to website</a>
                                <a href="./index.html" class="btn btn-primary">Go back</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        });