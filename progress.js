t = document.getElementById('tweet-box-home-timeline');

t.addEventListener("keyup", function(){
    l = t.innerText.length;
    b = document.querySelectorAll('.js-tweet-btn')[0];
    console.log(l);
    if (l != 281) {
        b.classList.add("disabled");
        b.setAttribute("disabled", "true");
    } else {
        index = b.classList.indexOf("disable");
        b.splice(index, 1);
        b.setAttribute("disabled", "false");
    }
});
