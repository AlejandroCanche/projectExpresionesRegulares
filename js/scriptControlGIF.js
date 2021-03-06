function is_gif_image(i) {
    return /^(?!data:).*\.gif/i.test(i.src);
}

function freeze_gif(src) {
 i = document.getElementById(src);
    var c = document.createElement('canvas');
    var w = c.width = i.width;
    var h = c.height = i.height;
    c.getContext('2d').drawImage(i, 0, 0, w, h);
    try {
        i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
    } catch(e) { // cross-domain -- mimic original with all its tag attributes
        for (var j = 0, a; a = i.attributes[j]; j++)
            c.setAttribute(a.name, a.value);
        i.parentNode.replaceChild(c, i);
    }
}

function unfreeze_gif(id, src) {
 i = document.getElementById(id);
    i.src = src;
}