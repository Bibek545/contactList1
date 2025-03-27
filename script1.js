// Try AI directly in your favourite apps … Use Gemini to generate drafts and refine content, plus get Gemini Advanced with access to Google's next-gen AI for $32.99 A$0 for 1 month
//select slider
const slider = document.getElementById("mySlider");
const phoneBook = document.querySelector(".phoneBookIcon");
let userList = [];

slider.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value > 70) {
    displayAppScreen();
  }
});

// when clicking on the phone book

phoneBook.addEventListener("click", () => {
  displayListScreen();
});

const displayAppScreen = () => {
  // hide slide screen
  document.querySelector(".homeScreen").remove();
  // show app scrent
  document.querySelector(".appScreen").style.display = "block";
};

const displayListScreen = () => {
  // remove icon screen
  document.querySelector(".appScreen").remove();

  //show contact screen

  document.querySelector(".contactListScreen").style.display = "block";

  //start fatching data from the API
  fetchUsers();
};

const fetchUsers = async () => {
  // Show spinner , showSpinner
  document.querySelector(".showSpinner").style.display = "block";
  //   console.log(document.getElementsByClassName("showSpinner"));
  //   document.getElementsByClassName("showSpinner")[0].style.display = "block";

  // promise
  //   fetch("https://randomuser.me/apis")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  try {
    const response = await fetch("https://randomuser.me/api?results=10");
    const data = await response.json();

    userList = data.results;

    //call
    displayUser(userList);
  } catch (error) {
    console.log(error);
  } finally {
    document.querySelector(".showSpinner").style.display = "none";
  }
};

// displaying user in the ui
const displayUser = (data) => {
  const accordionList = document.querySelector(".accordion");

  console.log(data);
  let str = "";

  for (const row of data) {
    console.log(row);
    str += `<div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <img
                        src=${row.picture.thumbnail}
                        class="rounded-circle"
                        style="width: 50px"
                      />
                      <div class="ms-2">
                        <div class="fw-bolder">Mr. Prem Acharya</div>
                        <small>2345 address </small>
                      </div>
                    </button>
                  </h2>

                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex justify-content-center">
                        <img
                          src="https://randomuser.me/api/portraits/women/59.jpg"
                          class="rounded-circle"
                          style="width: 150px"
                        />
                      </div>
                      <div>
                        <i class="fa-solid fa-user"></i> Mr. Prem Acharya
                      </div>
                      <div>
                        <a href="tel:041234543">
                          <i class="fa-solid fa-mobile"></i> 041234543</a
                        >
                      </div>
                      <div>
                        <a href="mailto:prem@email.com">
                          <i class="fa-solid fa-envelope"></i> prem@email.com</a
                        >
                      </div>
                      <div>
                        <a
                          href="https://www.google.com/maps/place/104+Bathurst+St,+Sydney+NSW+2000/@-33.874371,151.2057859,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae3dc4dc7f7d:0xc55c0f9d15cd2938!8m2!3d-33.8743755!4d151.2083608!16s%2Fg%2F11q2x1sr_h?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                        >
                          <i class="fa-solid fa-location-pin"></i> 345 George st
                          sydney
                        </a>
                      </div>
                    </div>
                  </div>
                </div>`;
  }

  accordionList.innerHTML = str;
};