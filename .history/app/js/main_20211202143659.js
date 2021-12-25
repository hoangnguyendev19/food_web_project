// Modal

const button = document.querySelector(".banner__btn-modal");
const templatePlay = `
    <div class="modal">
        <div class="modal-content">
            <p>play store</p>
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
const bannerContent = document.querySelector(".banner__content");
button.addEventListener("click", function () {
    bannerContent.insertAdjacentHTML("beforeend", templatePlay);
});
bannerContent.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.matches(".modal-close")) {
    //    const modal = event.target.parentNode.parentNode;
    //    modal.parentNode.removeChild(modal);
        const modal = document.querySelector(".modal");
        modal.remove(modal);
    } else if (event.target.matches(".modal")) {
        const modal = document.querySelector(".modal");
        modal.remove(modal);
    }
});

const btn = document.querySelector(".download__btn-modal");
const templateApp = `
<div class="modal">
    <div class="modal-content">
        <p>app store</p>
        <i class="fa fa-times modal-close"></i>
    </div>
</div>`;
const downloadContent = document.querySelector(".download__content");
btn.addEventListener("click", function() {
    downloadContent.insertAdjacentHTML("beforeend", templateApp);
})
downloadContent.addEventListener("click", function(event) {
    // console.log(event.target);
    if (event.target.matches(".modal-close")) {
        const btnModal = document.querySelector(".modal");
        btnModal.remove(btnModal);
    } else if (event.target.matches(".modal")) {
        const btnModal = document.querySelector(".modal");
        btnModal.remove(btnModal);
    }
})

// Toggle Menu
const headerIcon = document.querySelector(".header__icon");
const toggleMenu = `
<ul class="menu">
    <li class="menu__item">
        <a href="" class="menu__link">Home</a>
    </li>
    <li class="menu__item">
        <a href="" class="menu__link">Product</a>
    </li>
    <li class="menu__item">
        <a href="" class="menu__link">Faq</a>
    </li>
    <li class="menu__item">
        <a href="" class="menu__link">Contact</a>
    </li>
</ul>`;
const header = document.querySelector(".header");
headerIcon.addEventListener("click", function() {
    header.insertAdjacentHTML("afterend", toggleMenu);
})
