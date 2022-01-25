let heartIcon = document.querySelector(`.activity-log .nav-icon`);
let activityContainer = document.querySelector(`.activity-container`);

const changeIcon = (icon) => {
  let src = icon.src.split(`-`)[0];

  icon.src = icon.src.includes(`nofill`)
    ? `${src}-fill.png`
    : `${src}-nofill.png`;
};

heartIcon.addEventListener(`click`, () => {
  activityContainer.classList.toggle(`hide`);
  changeIcon(heartIcon);
});

const addInteractiontoPost = (post) => {
  // For post like feature
  let likeBtn = post.querySelector(`.like-btn`);
  let likeImg = post.querySelector(`.like-icon`);

  likeBtn.addEventListener(`click`, () => {
    if (likeBtn.src.includes(`nofill`)) {
      likeImg.classList.add(`show`);
      if (sharebtn.src.includes(`-fill`)) {
        sharebtn.click();
      }
    }

    changeIcon(likeBtn);

    setTimeout(() => {
      likeImg.classList.remove(show);
    }, 2000);
  });

  // For share post feature
  let sharebtn = post.querySelector(`.send-btn`);
  let shareWindow = post.querySelector(`.share-window`);

  sharebtn.addEventListener(`click`, () => {
    shareWindow.classList.toggle(`activate`);
    changeIcon(sharebtn);
  });

  let postLink = post.querySelector(`#share-link`).value;
  let copyLinkBtn = post.querySelector(`.copy-btn`);

  copyLinkBtn.addEventListener(`click`, () => {
    navigator.clipboard.writeText(postLink).then(() => {
      sharebtn.click();
    });
  });
};

let posts = [...document.querySelectorAll(`.post`)];
posts.map((post) => addInteractiontoPost(post));
