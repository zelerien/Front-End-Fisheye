export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    };

    createPhotographerMedias() {
        let profilePageContent;
        profilePageContent = document.querySelector(".main_content_medias");
        const content = '\n            <section class="gallery">\n                ' + this.medias.map(media => {
            let mediaContent;

            mediaContent = media.image
                ? ` <img class="gallery_thumbnail" src="./assets/images/photographers/samplePhotos-Small/${this.photographer.name}/${media.image}" alt="${media.alt}">`
                : ` <video class="gallery_thumbnail" aria-label="${media.alt}">
                        <source src="./assets/images/photographers/samplePhotos-Small/${this.photographer.name}/${media.video}" type="video/mp4">
                    </video>`;

            return `
                    <article class="gallery_card">                           
                        <a href="#" data-media=${media.id} role="link" aria-label="View media large">
                            <figure>${mediaContent}</figure>
                        </a>
                        <figcaption>
                            <h2>${media.title}</h2>
                                <div role="group" aria-label="Like button and number of likes">
                                    <span class="nbLike">${media.likes}</span> 
                                    <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                                        <span class="fas fa-heart" aria-hidden="true"></span>
                                    </button> 
                                </div>
                        </figcaption>
                    </article>
                `;
        }).join("") + '\n            </section >\n            <aside>\n                <p class="photographer_Likes">\n                    <span class="photographer_likes_count"></span>\n                    <span class="fas fa-heart" aria-hidden="true"></span>\n                </p>\n                <span>' + this.photographer.price + '€ / jour</span>\n            </aside>\n        ';

        profilePageContent.innerHTML = content;
        return content;
    };
};