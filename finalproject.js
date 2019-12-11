// MAIN PAGE SLIDE SHOW

var i = 0; 
var images = [];
var time = 2000; 

images[0] = 'images/meal_lrg.jpg';
images[1] = 'images/meal2_lrg.jpg';
images[2] = 'images/meal4.jpg';

// Changes images
function changeImg() {
            document.slideshow.srcset = images[i];
    
            if(i < images.length -1){
                i++;
            } else {
                i = 0;
            } 
                setTimeout('changeImg()', time);
            }
            window.onload=changeImg;
       
       

// Function does two things here. Adds pop up message with your name once the contact form has been submitted and then clears the text fields without refreshing the page
function myButton () {
    var contactName = document.getElementById('name').value;
    alert ("Thank you " +contactName+ "! We will be in touch shortly.");
    
    var remoteAll = document.getElementById('contact');
    remoteAll.reset();  // Reset all form data
    return false; // Prevent page refresh
 }


// Apply font style to entire website
var allFont = document.querySelector('p');
allFont.style.fontFamily = '"Palatino Linotype", "Book Antiqua", Palatino, serif';

// Style the footer 
var footer = document.getElementById('footer');
footer.style.backgroundColor = "#d9752f"; 

// Style the cursor on contact submit button 
var conButton = document.getElementById('contactButton');
conButton.style.cursor = 'pointer';

// Add a small border around contact form
// Add curved corners to border
var conForm = document.getElementById('contact');
conForm.style.border = '2.5px solid #d9752f';
conForm.style.borderRadius = '4px';

     



