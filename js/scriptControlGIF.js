function is_gif_image(i) {
    return /^(?!data:).*\.gif/i.test(i.src);
}

function unfreeze_gif(id, src) {
 i = document.getElementById(id);
    i.src = src;
}