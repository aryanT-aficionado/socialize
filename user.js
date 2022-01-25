let userCardContainer = document.querySelector(`.suggestion-heading`);
let nextArrow = document.querySelector(`.next-arrow`);
let preArrow = document.querySelector(`.pre-arrow`);
const userPost = [...document.querySelectorAll(`.post-container .post`)];
let postPopup = document.querySelector(`.post-popup`);
let closePopup = document.querySelector(`.close-overlay`);
let popupPostImg = document.querySelector(
  `.post-popup .post .post-img-container img`
);

// suggestion carousel slider
let containerDimension = userCardContainer.getBoundingClientRect();
let containerWidth = containerDimension.width;

nextArrow.addEventListener(`click`, () => {
  userCardContainer.scrollLeft += containerWidth;
  console.log(userCardContainer);
});

preArrow.addEventListener(`click`, () => {
  userCardContainer.scrollLeft -= containerWidth;
});

userPost.map((post) => {
  post.addEventListener(`click`, () => {
    let img = post.querySelector(`.post-img`);
    popupPostImg.src = img.src;

    postPopup.classList.add(`show`);
  });
});

closePopup.addEventListener(`click`, () => {
  postPopup.classList.remove(`show`);
});

posts = [...document.querySelectorAll(`.post-popup .post`)];
posts.map((post) => addInteractiontoPost(post));
