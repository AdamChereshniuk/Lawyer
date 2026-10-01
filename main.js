// ConsultModal
const headerTopPhoneBtn = document.querySelector(".header-top__phone-btn");
const footerBottomLawyerBtn = document.querySelector(".footer-bottom__lawyer-btn");

const consultModal = document.querySelector(".consult-modal");
const consultModalContent = document.querySelector(".consult-modal__content");
const consultModalCrossBtn = document.querySelector(".consult-modal__cross");
const consultModalForm = document.querySelector(".consult-modal__form");
const consultModalInputs = document.querySelectorAll(".consult-modal__input");
const consultModalError = document.querySelector(".consult-modal__error");
const consultModalSuccess = document.querySelector(".consult-modal__success");

consultModal.classList.add("closed");

[headerTopPhoneBtn, footerBottomLawyerBtn].forEach(btn => {
    btn.addEventListener("click", () => {
        consultModal.classList.remove("closed");
        consultModal.classList.add("open");
    });
});

consultModalCrossBtn.addEventListener("click", () => {
    consultModal.classList.remove("open");
    consultModal.classList.add("closed");
});

consultModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let isAllOk = true;

    consultModalInputs.forEach(input => {
        const clearInputValue = input.value.trim();
        if(clearInputValue.length < 3 || clearInputValue.length > 20) isAllOk = false;
    });

    if(isAllOk) {
        consultModalError.classList.add("none");
        consultModalContent.classList.add("none");
        consultModalSuccess.classList.remove("none");
    } else {
        consultModalError.classList.remove("none");
        consultModalContent.classList.remove("none");
        consultModalSuccess.classList.add("none");
    };
});

// HistoryModal
const aboutHistoryBtn = document.querySelector(".about__history-btn");

const historyModal = document.querySelector(".history-modal");
const historyModalContent = document.querySelector(".history-modal__content");
const historyModalCrossBtn = document.querySelector(".history-modal__cross");

historyModal.classList.add("closed");

aboutHistoryBtn.addEventListener("click", () => {
    historyModal.classList.remove("closed");
    historyModal.classList.add("open");
});

historyModalCrossBtn.addEventListener("click", () => {
    historyModal.classList.remove("open");
    historyModal.classList.add("closed");
});

// DocsModal
const aboutDocsBtn = document.querySelector(".about__docs-btn");

const docsModal = document.querySelector(".docs-modal");
const docsModalContent = document.querySelector(".docs-modal__content");
const docsModalCrossBtn = document.querySelector(".docs-modal__cross");

docsModal.classList.add("closed");

aboutDocsBtn.addEventListener("click", () => {
    docsModal.classList.remove("closed");
    docsModal.classList.add("open");
});

docsModalCrossBtn.addEventListener("click", () => {
    docsModal.classList.remove("open");
    docsModal.classList.add("closed");
});

// ReviewsModal
const reviewsWriteBtn = document.querySelector(".reviews__write-btn");

const reviewsModal = document.querySelector(".reviews-modal");
const reviewsModalContent = document.querySelector(".reviews-modal__content");
const reviewsModalCrossBtn = document.querySelector(".reviews-modal__cross");
const reviewsModalForm = document.querySelector(".reviews-modal__form");
const reviewsModalInputs = document.querySelectorAll(".reviews-modal__input");
const reviewsModalError = document.querySelector(".reviews-modal__error");
const reviewsModalSuccess = document.querySelector(".reviews-modal__success");

reviewsModal.classList.add("closed");

reviewsWriteBtn.addEventListener("click", () => {
    reviewsModal.classList.remove("closed");
    reviewsModal.classList.add("open");
});

reviewsModalCrossBtn.addEventListener("click", () => {
    reviewsModal.classList.remove("open");
    reviewsModal.classList.add("closed");
});

reviewsModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let isAllOk = true;

    reviewsModalInputs.forEach(input => {
        const clearInputValue = input.value.trim();
        if(clearInputValue.length < 3 || clearInputValue.length > 80) isAllOk = false;
    });

    if(isAllOk) {
        reviewsModalError.classList.add("none");
        reviewsModalContent.classList.add("none");
        reviewsModalSuccess.classList.remove("none");
    } else {
        reviewsModalError.classList.remove("none");
        reviewsModalContent.classList.remove("none");
        reviewsModalSuccess.classList.add("none");
    };
});

// Blog
const blogMoreList = document.querySelector(".blog__more-list");
const blogBtn = document.querySelector(".blog__btn");
let showBlogMoreList = false;

blogBtn.addEventListener("click", () => {
    if(showBlogMoreList) {
        blogMoreList.classList.remove("open");
        blogMoreList.classList.add("closed");
        blogBtn.innerHTML = "Все новости";
    } else {
        blogMoreList.classList.remove("closed");
        blogMoreList.classList.add("open");
        blogBtn.innerHTML = "Свернуть";
    };

    showBlogMoreList = !showBlogMoreList;
});