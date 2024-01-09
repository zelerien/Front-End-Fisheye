import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import PhotographerCard from "../templates/HomePage.js";

let photographersApi;

photographersApi = new Api("./data/photographers.json");

async function displayPhotographers() {
    let photographersData;
    photographersData = await photographersApi.get();
    let photographers = photographersData.photographers;

    photographers
        .map(photographer => {
            return new Photographer(photographer);
        })
        .forEach(photographer => {
        (document.querySelector(".main_photographers")).appendChild(new PhotographerCard(photographer).createPhotographerCard());
    });
}

displayPhotographers();