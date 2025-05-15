//Function to validate the form
function validateForm() {
  const nameInput = document.getElementById("name").ariaValueMax;
  const emailInput = document.getElementById("email").value;
  const destinationInput = document.getElementById("destination").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const destinationError = document.getElementById("destinationError");

  if (nameInput == "") {
    /// DI SINI LOGIKA KETIKA GAGAL
    nameError.textContent = "Name is required";
  }
  if (emailInput == "") {
    // DI SINI LOGIKA KETIKA GAGAL
    emailError.textContent = "Email is required";
  }
  if (destinationInput == "") {
    // DI SINI LOGIKA KETIKA GAGAL
    destinationError.textContent = "Destination is required";
  } else {
    //reset form
    nameInput.textContent = "";
    emailInput.textContent = "";
    destinationInput.textContent = "";
    //reset error
    nameError.textContent = "";
    emailError.textContent = "";
    destinationError.textContent = "";
    //alert
    alert("Form submitted successfully");
  }
}

//Function to slide text banner
let indexTexBanner = 0;

function nextTextBanner() {
  indexTexBanner += 1;
  showTextBanner();
}

function showTextBanner() {
  const textBannerList = document.getElementsByClassName("slide-text");

  //check if indextext banner is greater than the length of the text bannerlist
  if (indexTexBanner > textBannerList.length - 1) {
    indexTexBanner = 0;
  }

  //Hide banner with looping
  for (let i = 0; i < textBannerList.length; i++) {
    textBannerList[i].classList.remove("active");
  }

  // Show the banner
  textBannerList[indexTexBanner].classList.add("active");
}

showTextBanner();

//Set interval to change the banner every 5 seconds
setInterval(() => {
  nextTextBanner();
}, 5000);

// Function to slide terstimonial
let indexTestimonialBanner = 0;

function nextTestimonialBanner() {
  indexTestimonialBanner += 1;
  showTestimonialBanner();
}

function showTestimonialBanner() {
  const terstimonialBannerList = document.getElementsByClassName(
    testimonial - container
  );
}

// Check if indexTestimonialBanner is grater than the length of the testimonialBannerList
if (indexTestimonialBanner > terstimonialBannerList.length - 1) {
  indexTestimonialBanner = 0;
}

// Hide banner with looping
for (let i = 0; i < terstimonialBannerList.length; i++) {
  terstimonialBannerList[i].classList.remove("active");
}

// Show the banner
terstimonialBannerList[indexTestimonialBanner].classList.add("active");

showTestimonialBanner();

//Set Interval to change the banner every 5 seconds
setInterval(() => {
  nextTestimonialBanner();
}, 5000);
