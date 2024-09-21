  


// <!-- advANCE VIDEO script -->
 

document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements for the alternative slider
    var videosAlt = document.querySelectorAll('.thumbnail-alt');

    // Loop through each video and set autoplay and muted attributes
    // videosAlt.forEach(video => {
    //     video.autoplay = false;
    //     video.muted = true;
    //     video.play(); // Ensure video starts playing automatically
    // });
});

var currentSlideAlt = 0;

function changeSlideAlt(direction) {
    var slidesAlt = document.querySelectorAll('.slide-alt');
    var totalSlidesAlt = slidesAlt.length;

    currentSlideAlt += direction;

    if (currentSlideAlt >= totalSlidesAlt) {
        currentSlideAlt = 0;
    } else if (currentSlideAlt < 0) {
        currentSlideAlt = totalSlidesAlt - 1;
    }

    var sliderAlt = document.querySelector('.slider-alt');
    sliderAlt.style.transform = `translateX(-${currentSlideAlt * 100}%)`;
}

// Open modal and play video for alternative slider
var thumbnailsAlt = document.querySelectorAll('.thumbnail-alt');
var modalAlt = document.getElementById('videoModalAlt');
var modalVideoAlt = document.getElementById('modalVideoAlt');

thumbnailsAlt.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modalAlt.style.display = "flex";
        modalVideoAlt.src = thumbnail.src;
        modalVideoAlt.play();
    });
});

// Close modal and stop video for alternative slider
function closeModalAlt() {
    modalAlt.style.display = "none";
    modalVideoAlt.pause();
    modalVideoAlt.src = "";  // Stop video completely
}

// Close modal when clicking outside the video for alternative slider
window.onclick = function(event) {
    if (event.target === modalAlt) {
        closeModalAlt();
    }
};

    
      







 

document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements
    var videos = document.querySelectorAll('.thumbnail');

    // Loop through each video and set autoplay and muted attributes
    // videos.forEach(video => {
    //     video.autoplay = false;
    //     video.muted = true;
    //     video.play(); // Ensure video starts playing automatically
    // });
});
    var currentSlide = 0;

function changeSlide(direction) {
    var slides = document.querySelectorAll('.slide');
    var totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    var slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Open modal and play video
var thumbnails = document.querySelectorAll('.thumbnail');
var modal = document.getElementById('videoModal');
var modalVideo = document.getElementById('modalVideo');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = "flex";
        modalVideo.src = thumbnail.src;
        modalVideo.play();
    });
});

// Close modal and stop video
function closeModal() {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";  // Stop video compvarely
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

  
// <!-- contact us form script -->
  
      var contactIcon = document.getElementById('contactIcon');
var contactForm = document.getElementById('contactForm');
var closeForm = document.getElementById('closeForm');

// Toggle contact form visibility when icon is clicked
contactIcon.addEventListener('click', () => {
    contactForm.style.display = 'block';
});

// Close the form when the close button is clicked
closeForm.addEventListener('click', () => {
    contactForm.style.display = 'none';
});

// Close the form when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target !== contactForm && event.target !== contactIcon && !contactForm.contains(event.target)) {
        contactForm.style.display = 'none';
    }
});
// what message script

document.getElementById('contactForm').addEventListener('submit', function(event) {
      
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var phone =   document.getElementById('phone').value;

    // Create the WhatsApp message text
    var whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\nPhone: ${phone}.\nMessage: ${message}`;

    // Encode the message for use in a URL
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (Replace with the actual number you want the message to be sent to)
    var phoneNumber = '918271517973'; // Replace with your WhatsApp number (in international format, without '+' or '00')

    // Create the WhatsApp URL
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
});



// faq script



const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
      question.addEventListener("click", () => {
        const answer = question.querySelector(".faq-answer");
        const arrow = question.querySelector(".arrow-down");

        if (answer.style.display === "block") {
          answer.style.display = "none";
          arrow.textContent = "+"; // Change to +
        } else {
          answer.style.display = "block";
          arrow.textContent = "-"; // Change to -
        }
      });
    });


   


// <!-- navbar color change -->

 
    $(document).ready(function(){
        $('.gm-hero-banner-slider').on('afterChange', function(event, slick, currentSlide){
            var currentImg = $(slick.$slides[currentSlide]).find('img').attr('id');
            if (currentImg === 'menucol') {
                
                $('.acolor').css('color', 'white'); // Change this to your desired white style
            } else {
                $('.acolor').css('color', ''); // Reset or apply default color
            }
        });
    });
  

// <!-- primemume video script -->
 
    document.addEventListener('DOMContentLoaded', () => {
        // Get all premium video elements
        var premiumVideos = document.querySelectorAll('.thumbnail-premium');
    
        // Loop through each premium video and set autoplay and muted attributes
        // premiumVideos.forEach(video => {
        //     video.autoplay = true;
        //     video.muted = true;
        //     video.play(); // Ensure premium video starts playing automatically
        // });
    });
    
    var currentSlidePremium = 0;
    
    function changeSlidePremium(direction) {
        var slides = document.querySelectorAll('.slide-premium');
        var totalSlides = slides.length;
    
        currentSlidePremium += direction;
    
        if (currentSlidePremium >= totalSlides) {
            currentSlidePremium = 0;
        } else if (currentSlidePremium < 0) {
            currentSlidePremium = totalSlides - 1;
        }
    
        var slider = document.querySelector('.slider-premium');
        slider.style.transform = `translateX(-${currentSlidePremium * 100}%)`;
    }
    
    // Open premium modal and play premium video
    var thumbnailsPremium = document.querySelectorAll('.thumbnail-premium');
    var modalPremium = document.getElementById('videoModalPremium');
    var modalVideoPremium = document.getElementById('modalVideoPremium');
    
    thumbnailsPremium.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            modalPremium.style.display = "flex";
            modalVideoPremium.src = thumbnail.src;
            modalVideoPremium.play();
        });
    });
    
    // Close premium modal and stop premium video
    function closeModalPremium() {
        modalPremium.style.display = "none";
        modalVideoPremium.pause();
        modalVideoPremium.src = "";  // Stop premium video completely
    }
    
    // Close premium modal when clicking outside the video
    window.onclick = function(event) {
        if (event.target === modalPremium) {
            closeModalPremium();
        }
    };
      

    // <!-- premium plus script -->

     
        document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements
    var videos = document.querySelectorAll('.thumbnail-premium_plus');

    // Loop through each video and set autoplay and muted attributes
    // videos.forEach(video => {
    //     video.autoplay = true;
    //     video.muted = true;
    //     video.play(); // Ensure video starts playing automatically
    // });
});

var currentSlidePremiumPlus = 0;

function changeSlidePremiumPlus(direction) {
    var slides = document.querySelectorAll('.slide-premium_plus');
    var totalSlides = slides.length;

    currentSlidePremiumPlus += direction;

    if (currentSlidePremiumPlus >= totalSlides) {
        currentSlidePremiumPlus = 0;
    } else if (currentSlidePremiumPlus < 0) {
        currentSlidePremiumPlus = totalSlides - 1;
    }

    var slider = document.querySelector('.slider-premium_plus');
    slider.style.transform = `translateX(-${currentSlidePremiumPlus * 100}%)`;
}

// Open modal and play video
var thumbnails = document.querySelectorAll('.thumbnail-premium_plus');
var modal = document.getElementById('videoModal-premium_plus');
var modalVideo = document.getElementById('modalVideo-premium_plus');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = "flex";
        modalVideo.src = thumbnail.src;
        modalVideo.play();
    });
});

// Close modal and stop video
function closeModalPremiumPlus() {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";  // Stop video completely
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    if (event.target === modal) {
        closeModalPremiumPlus();
    }
};

// ADVANCE LONG VIDEO SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements
    var videos = document.querySelectorAll('.thumbnail-advc_long_vid');

    // Loop through each video and set autoplay and muted attributes
    // videos.forEach(video => {
    //     video.autoplay = true;
    //     video.muted = true;
    //     video.play(); // Ensure video starts playing automatically
    // });
});

var currentSlideAdvcLongVid = 0;

function changeSlideAdvcLongVid(direction) {
    var slides = document.querySelectorAll('.slide-advc_long_vid');
    var totalSlides = slides.length;

    currentSlideAdvcLongVid += direction;

    if (currentSlideAdvcLongVid >= totalSlides) {
        currentSlideAdvcLongVid = 0;
    } else if (currentSlideAdvcLongVid < 0) {
        currentSlideAdvcLongVid = totalSlides - 1;
    }

    var slider = document.querySelector('.slider-advc_long_vid');
    slider.style.transform = `translateX(-${currentSlideAdvcLongVid * 100}%)`;
}

// Open modal and play video
var thumbnails = document.querySelectorAll('.thumbnail-advc_long_vid');
var modal = document.getElementById('videoModal-advc_long_vid');
var modalVideo = document.getElementById('modalVideo-advc_long_vid');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = "flex";
        modalVideo.src = thumbnail.src;
        modalVideo.play();
    });
});

// Close modal and stop video
function closeModalAdvcLongVid() {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";  // Stop video completely
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    if (event.target === modal) {
        closeModalAdvcLongVid();
    }
};

// our premioum long video script

document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements
    const premiumLngVidVideos = document.querySelectorAll('.premium_lng_vid-thumbnail iframe');

    // Initialize autoplay and muted attributes for each video
    premiumLngVidVideos.forEach(video => {
        video.setAttribute('autoplay', 'true');
        video.setAttribute('muted', 'true');
        video.setAttribute('playsinline', 'true'); // Ensures autoplay works on mobile
        video.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
    });
});

let currentPremiumLngVidSlide = 0;

function changePremiumLngVidSlide(direction) {
    const slides = document.querySelectorAll('.premium_lng_vid-slide');
    const totalSlides = slides.length;

    currentPremiumLngVidSlide += direction;

    if (currentPremiumLngVidSlide >= totalSlides) {
        currentPremiumLngVidSlide = 0;
    } else if (currentPremiumLngVidSlide < 0) {
        currentPremiumLngVidSlide = totalSlides - 1;
    }

    const slider = document.querySelector('.premium_lng_vid-slider');
    slider.style.transform = `translateX(-${currentPremiumLngVidSlide * 100}%)`;
}

// Open modal and play video
const premiumLngVidThumbnails = document.querySelectorAll('.premium_lng_vid-thumbnail iframe');
const premiumLngVidModal = document.getElementById('premium_lng_vid-videoModal');
const premiumLngVidModalVideo = document.getElementById('premium_lng_vid-modalVideo');

premiumLngVidThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        premiumLngVidModal.style.display = "flex";
        premiumLngVidModalVideo.src = thumbnail.src.replace('?autoplay=0', '?autoplay=1'); // Ensure autoplay on modal
        premiumLngVidModalVideo.play();
    });
});

// Close modal and stop video
function closePremiumLngVidModal() {
    premiumLngVidModal.style.display = "none";
    premiumLngVidModalVideo.pause();
    premiumLngVidModalVideo.src = "";  // Stop video completely
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    if (event.target === premiumLngVidModal) {
        closePremiumLngVidModal();
    }
};


// document.addEventListener('DOMContentLoaded', () => {
//     // Get all video elements
//     var premiumLngVidVideos = document.querySelectorAll('.premium_lng_vid-thumbnail');

//     // Loop through each video and set autoplay and muted attributes
//     premiumLngVidVideos.forEach(video => {
//         video.autoplay = true;
//         video.muted = true;
//         video.play(); // Ensure video starts playing automatically
//     });
// });

// var currentPremiumLngVidSlide = 0;

// function changePremiumLngVidSlide(direction) {
//     var slides = document.querySelectorAll('.premium_lng_vid-slide');
//     var totalSlides = slides.length;

//     currentPremiumLngVidSlide += direction;

//     if (currentPremiumLngVidSlide >= totalSlides) {
//         currentPremiumLngVidSlide = 0;
//     } else if (currentPremiumLngVidSlide < 0) {
//         currentPremiumLngVidSlide = totalSlides - 1;
//     }

//     var slider = document.querySelector('.premium_lng_vid-slider');
//     slider.style.transform = `translateX(-${currentPremiumLngVidSlide * 100}%)`;
// }

// // Open modal and play video
// var premiumLngVidThumbnails = document.querySelectorAll('.premium_lng_vid-thumbnail');
// var premiumLngVidModal = document.getElementById('premium_lng_vid-videoModal');
// var premiumLngVidModalVideo = document.getElementById('premium_lng_vid-modalVideo');

// premiumLngVidThumbnails.forEach((thumbnail) => {
//     thumbnail.addEventListener('click', () => {
//         premiumLngVidModal.style.display = "flex";
//         premiumLngVidModalVideo.src = thumbnail.src;
//         premiumLngVidModalVideo.play();
//     });
// });

// // Close modal and stop video
// function closePremiumLngVidModal() {
//     premiumLngVidModal.style.display = "none";
//     premiumLngVidModalVideo.pause();
//     premiumLngVidModalVideo.src = "";  // Stop video completely
// }

// // Close modal when clicking outside the video
// window.onclick = function(event) {
//     if (event.target === premiumLngVidModal) {
//         closePremiumLngVidModal();
//     }
// };



      
