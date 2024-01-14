import { getPhotographerById } from "../pages/photographerPage.js";

export const displayTotalLikes = async () => {
    const { medias, photographer } = await getPhotographerById();
    const allBtnLike = document.querySelectorAll(".btn_like");
    const totalLikesElement = document.querySelector(".photographer_likes_count");
    let totalLikes = 0;

    allBtnLike.forEach(btn => {
        const media = medias.find(media => media.id == btn.dataset.id);
        const localStorageKey = 'p' + photographer.id + 'm' + media.id + '_likes';
        const mediaTotalLikes = parseInt((localStorage.getItem(localStorageKey) != null ? localStorage.getItem(localStorageKey) : media.likes));

        const likesElement = btn.previousElementSibling;
        likesElement.textContent = mediaTotalLikes;

        totalLikes = totalLikes + mediaTotalLikes;

        btn.addEventListener("click", () => {
            if (!localStorage.getItem(localStorageKey)) {
                const likes = mediaTotalLikes + 1;

                localStorage.setItem(localStorageKey, likes);

                likesElement.textContent = likes;
                totalLikes = totalLikes + 1;
                totalLikesElement.textContent = totalLikes;
            }
        })
    });

    totalLikesElement.textContent = totalLikes;
};
﻿
