$(function () {
  function getRandomItemsInArray(arr, n) {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  const experts = document.getElementById("experts");
  const ITEMS_TO_DISPLAY = 6;
  if (experts) {
    try {
      $.getJSON("/assets/experts.json", function (data) {
        getRandomItemsInArray(data, ITEMS_TO_DISPLAY).forEach(
          ({ photo, url, title, description, socialMedia, ...rest }) => {
            experts.innerHTML += `<div class="col-xl-4 col-md-6 mb-30 d-flex justify-content-center">
          <div class="team-item">
            <img src="${photo}" alt="" />
            <div class="content-part">
              <h4 class="name"><a href="${url}">${title}</a></h4>
              <span class="designation">${description}</span>
              <ul class="social-links">
                ${socialMedia
                  .map(
                    ({ link, faIcon }) => `<li>
                  <a href="${link}"
                    ><i class="fa fa-${faIcon}"></i
                  ></a>
                </li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </div>`;
          }
        );
      });
    } catch (e) {
      console.log(e);
    }
  }

  const mentors = document.getElementById("mentors");
  if (mentors) {
    try {
      $.getJSON("/assets/mentors.json", function (data) {
        getRandomItemsInArray(data, ITEMS_TO_DISPLAY).forEach(
          ({
            photo,
            url,
            title,
            description,
            socialMedia,
            languages,
            ...rest
          }) => {
            mentors.innerHTML += `<div class="col-lg-8 col-xl-6 mb-40 d-flex flex-column d-md-block">
          <div class="course-item">
            <div class="course-image">
              <a href="${url}">
                <img src="${photo}" alt="images" />
              </a>
            </div>
            <div class="course-info">
              <ul class="meta-part">
              ${socialMedia
                .map(
                  ({ link, faIcon }) => `<li>
                  <a href="${link}"
                    ><i class="fa fa-${faIcon}" aria-hidden="true"></i
                  ></a>
                </li>`
                )
                .join("")}
              </ul>
              <h3 class="course-title">
                <a href="${url}"> ${title} </a>
              </h3>
              <div class="mb-10">${description}</div>
              <div></div>
              <div>
                <ul class="meta-part">
                ${languages.map((l) => `<li>${l}</li>`).join("")}
                </ul>
              </div>
              <div class="btn-part bottom-right">
                <a href="{{url}}">See profile</a>
              </div>
            </div>
          </div>
        </div>`;
          }
        );
      });
    } catch (e) {
      console.log(e);
    }
  }
});
