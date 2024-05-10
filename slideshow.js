// Image and text arrays
const images = [
    "user1.png",
    "user2.png",
    "user3.png",
    "user4.png",
    "user5.png",
    "user6.png",
  ];
  const text = [
    "John Wayne: 'I have never been to the gym before and I love it here'",
    "Jay Won: 'I exercise 3 times a week and this place is good'",
    "Peter Griffin: 'As a professional this gym satisfies my every need'",
    "Gabe Newell: 'The staff is friendly, their equipment is top notch, and they are CLEAN. Comfortable for all levels of fitness.'",
    "Steve Jobs: 'I have never been to the gym before and I love it here.'",
    "Dr. House: 'Whether you are a professional, or a complete beginner, OneStopGym has everything you hope for and more!'",
  ];

  // Variables
  let currentSlide = 0;
  
  // Function to change the slide
  function changeSlide() {
    const img = document.getElementById("slideshow-img");
    const text = document.getElementById("slideshow-text");
  
    img.src = images[currentSlide];
    changeText(currentSlide); // Call the new text function
  
    currentSlide = (currentSlide + 1) % images.length;
  }
  
  // Function to update the text
  function changeText(index) {
    const textElement = document.getElementById("slideshow-text");
    textElement.innerHTML = `<em>${text[index]}</em>`; // Wrap text with <em> tag
  }
  
  // Start the slideshow with an interval
  setInterval(changeSlide, 4000); // Change slide every 3 seconds
  