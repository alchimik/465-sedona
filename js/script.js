(function() {
    var index_form = document.querySelector(".index-form");
    var map_button = document.querySelector(".index-form-block__link");

    map_button.addEventListener("click", function(event) {
        event.preventDefault();

        if (index_form.classList.contains("hide")) {
            index_form.classList.remove("hide");
        } else {
            index_form.classList.add("hide");
        }
    });
})();
