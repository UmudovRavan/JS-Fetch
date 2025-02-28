let data_Main = document.getElementById("data-films");

    fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(datas => {
            datas.forEach(data => {
                data_Main.innerHTML += `
                <div class="card" style="width: 18rem;">
            <img src="${data.image.medium}" alt="">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">Premiere: ${data.premiered}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">IMDB Rating: ${data.rating.average}</li>
              <li class="list-group-item">Genre: ${data.genres}</li>
              <li class="list-group-item">Language: ${data.language}</li>
            </ul>
            <div class="card-body">
              <a href="${data.officialSite}" class="btn btn-primary btn-sm">Go to website</a>
                    <a href="./detail.html?id=${data.id}" class="btn btn-success btn-sm">Go to detail</a> 
            </div>`});
        });

 
