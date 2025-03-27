const slider = document.getElementById("mySlider");
// console.log(slider);

slider.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value > 70)
        displayAppScreen()
})

displayAppScreen = () => {
    // hide slide screen
    document.querySelector(".homeScreen").remove();
    // show 
    document.querySelector(".appScreen").style.display = "block";

};


const contactIcon = document.querySelector(".icon");
// console.log(contactIcon);

contactIcon.addEventListener("click", (e) => {
    displayContactScreen();

});

displayContactScreen = () => {
    document.querySelector(".appScreen").style.display = "none";

    // document.querySelector(".showSpinner").style.display = "block";

    document.querySelector(".contactListScreen").style.display = "block";

    fetchUsers();

};

// const spinner = document.querySelector(".showSpinner").style.display = "block";

const fetchUsers = async () => {
    document.querySelector(".showSpinner").style.display = "block";
    try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
    
        userList = data.results;
        displayUser(userList);

    } catch (error) {
        console.log(error);
    } finally{
        document.querySelector(".showSpinner").style.display = "none";
    }
};

// promise 
// const fetchUsers = () => {
//     fetch('https://randomuser.me/api/').then((response) => {
//        return response.json();
//     })
//     .then((data) => {
//         console.log(data);

//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }
// fetchUsers();


// async await

// try {
//     const response = await fetch('https://randomuser.me/api/');
//     const data = await response.json();

//     console.log(data);
// } catch (error) {
//     console.log(error);
// };

// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://randomuser.me/api/");
//         const data = await response.json();
    
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     };
// }

// fetchUsers();




// injecting the data 

// const displayUser = (data) => {
//     const accordionList= document.querySelector(".accordion");
//     console.log(data)
//     let str = "";

//     for(const row of data) {
//     console.log(row);

//     // accordionList.innerHTML 
//     str += `<div class="accordion-item">
//                               <h2 class="accordion-header">
//                                 <button 
//                                 class="accordion-button" 
//                                 type="button" 
//                                 data-bs-toggle="collapse" 
//                                 data-bs-target="#collapseOne" 
//                                 aria-expanded="true" 
//                                 aria-controls="collapseOne"
//                                 > 
//                                 <img src="https://randomuser.me/api/portraits/women/18.jpg" class="rounded-circle" style="width: 50px;" />
//                                 <div class="ms-4 fw-bolder">
//                                     <div>Bibek Hamal</div>
//                                     <small>12345 AVENUUE</small>

//                                 </div> 
                              
//                                 </button>
//                               </h2>
//                               <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                                 <div class="accordion-body">
//                                     <img src="https://randomuser.me/api/portraits/women/18.jpg" class="rounded-circle" style="width: 150px;" />
//                                     <div><i class="fa-solid fa-user"></i>Bibek Hamal</div>
//                                     <div><a href="tel:123456789"><i class="fa-solid fa-mobile"></i>123456789</a></div>
//                                     <div><a href="mailto:bbekhamal26@gmail.com"><i class="fa-solid fa-envelope"></i>bbekhamal26@gmail.com</a></div>
//                                     <div><i class="fa-solid fa-location-dot"></i>12345 avenue</div>
//                                 </div>
//                               </div>
//                             </div>`
// }
// accordionList.innerHTML = str;
// };



const displayUser = (data) => {
    const accordionList = document.querySelector(".accordion");
    accordionList.innerHTML = ""; // Clear previous users
    console.log(data);
    let str = "";

    data.forEach((row, index) => {
        const collapseId = `collapse${index}`;
        const headingId = `heading${index}`;

        str += `
        <div class="accordion-item">
            <h2 class="accordion-header" id="${headingId}">
                <button 
                    class="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#${collapseId}" 
                    aria-expanded="false" 
                    aria-controls="${collapseId}"
                > 
                    <img src="${row.picture.thumbnail}" class="rounded-circle" style="width: 50px;" />
                    <div class="ms-4 fw-bolder">
                        <div>${row.name.first} ${row.name.last}</div>
                        <small>${row.location.city}, ${row.location.country}</small>
                    </div> 
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <img src="${row.picture.large}" class="rounded-circle" style="width: 150px;" />
                    <div><i class="fa-solid fa-user"></i> ${row.name.title} ${row.name.first} ${row.name.last}</div>
                    <div><a href="tel:${row.phone}"><i class="fa-solid fa-mobile"></i> ${row.phone}</a></div>
                    <div><a href="mailto:${row.email}"><i class="fa-solid fa-envelope"></i> ${row.email}</a></div>
                    <div><i class="fa-solid fa-location-dot"></i> ${row.location.street.number} ${row.location.street.name}, ${row.location.city}</div>
                </div>
            </div>
        </div>`;
    });

    accordionList.innerHTML = str;
};

// search, filter through name


document.querySelector(".search").addEventListener("keyup", (e) => {
    const str = e.target.value;
  const filteredUser = userList.filter(({ name }) => {
    const fn = (name.first + name.last);
    return fn.includes(str.toLowerCase());
  });
  displayUser(filteredUser);
});