document.addEventListener("DOMContentLoaded", function() {
    var categoryButtons = document.querySelectorAll(".category-button");
    var productSections = document.querySelectorAll(".product_content");
    var loading = "loading";

    categoryButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var targetId = button.getAttribute("data-target");

            // Add loading class to all product sections for animation
            productSections.forEach(function(section) {
                section.classList.add(loading);
            });

            // Display the clicked product section
            productSections.forEach(function(section) {
                if (section.id === targetId) {
                    section.style.display = "flex";
                } else {
                    section.style.display = "none";
                }
            });

            // Remove loading class from all product sections after animation duration (0.5s)
            setTimeout(function() {
                productSections.forEach(function(section) {
                    section.classList.remove(loading);
                });
            }, 500);

            // Remove highlighted class from all buttons
            categoryButtons.forEach(function(btn) {
                btn.classList.remove("highlighted");
            });

            // Add highlighted class to the clicked button
            button.classList.add("highlighted");
        });
    });

    // Set #boost as default category by triggering click event
    var buttonDefault = document.getElementById("boost");
    buttonDefault.click();
});
