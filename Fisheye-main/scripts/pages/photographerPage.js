import Api from "../api/Api.js";
import PhotographerHeader from "../templates/PhotographerHeader.js";
import PhotographerMedias from "../templates/PhotographerMedias.js";
import Photographer from "../models/Photographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import { displayTotalLikes } from "../utils/likes.js";
import { openCloseFormContact, validateForm } from "../utils/form.js";
import { openCloseFilterMenu, displayMediaWithFilter } from "../utils/filter.js";
import { displayLightbox } from "../utils/lightbox.js";

const photographerId = new URLSearchParams(window.location.search).get("id");

export const getPhotographerById = async () => {
    const { photographers, media } = await new Api("./data/photographers.json").get();
    let photographer;

    photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);

    let medias;

    medias = media
        .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);

    return { photographer, medias };
};

async function displayProfilePage() {
    const { photographer, medias } = await getPhotographerById();
    let headerTemplate;
    headerTemplate = new PhotographerHeader(photographer);
    headerTemplate.createPhotographerHeader();
    let mediasTemplate;
    mediasTemplate = new PhotographerMedias(photographer, medias);
    mediasTemplate.createPhotographerMedias();

    displayTotalLikes();
    openCloseFormContact();
    validateForm();
    openCloseFilterMenu();
    displayMediaWithFilter(mediasTemplate)
    displayLightbox(mediasTemplate);
}

displayProfilePage();