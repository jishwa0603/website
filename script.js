// Function to handle the form submission for Internship Filters
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get values from dropdowns and input field
    const internshipType = document.getElementById('internship-type').value;
    const domain = document.getElementById('domain').value;
    const company = document.getElementById('companies').value;

    // Check if all fields are filled
    if (internshipType && domain && company) {
        alert(`Searching for ${internshipType} internships in ${domain} domain at ${company}!`);
        // You can add code here to filter the internship list or send this data to the backend
    } else {
        alert('Please fill in all the fields!');
    }
}

// Function to handle the dropdown selection for Resume Templates
const templateSelect = document.getElementById('templateSelect');

templateSelect.addEventListener('change', function() {
    const selectedTemplate = this.value;
    // Load the selected template dynamically
    loadTemplate(selectedTemplate);
});

// Function to enable Edit Mode in Resume Templates
function enableEditMode() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(el => {
        el.setAttribute('contenteditable', 'true');
    });
    document.getElementById('editToggleButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'block';
}
function editTemplate(templateId) {
    // Redirect or open the template editing page
    window.location.href = `edit-template.html?template=${templateId}`;
}


// Function to disable Edit Mode in Resume Templates
function disableEditMode() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(el => {
        el.setAttribute('contenteditable', 'false');
    });
    document.getElementById('editToggleButton').style.display = 'block';
    document.getElementById('saveButton').style.display = 'none';
}

// Function to save the resume content as PDF
const saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function () {
   const resumeContent = document.querySelector('.resume-container');
   html2pdf().from(resumeContent).save('resume.pdf');
});

// Add event listener to toggle Edit Mode
document.getElementById('editToggleButton').addEventListener('click', enableEditMode);
document.getElementById('saveButton').addEventListener('click', disableEditMode);

// Function to load the selected Resume Template dynamically
function loadTemplate(templateName) {
    const resumeContainer = document.querySelector('.resume-container');
    fetch(templateName + '.html')
        .then(response => response.text())
        .then(data => {
            resumeContainer.innerHTML = data;
        });
}

// Function to show the selected resume template and hide others
function showTemplate(templateId) {
  // Hide all templates
  var templates = document.getElementsByClassName('resume-template');
  for (var i = 0; i < templates.length; i++) {
    templates[i].style.display = 'none';
  }

  // Show the selected template
  document.getElementById(templateId).style.display = 'block';
}

// Dummy function to simulate template download
function downloadTemplate(templateId) {
  alert('Downloading ' + templateId);
}

// Add an event listener to the form for submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.filter-section');
    form.addEventListener('submit', handleFormSubmit);
});

// Function to switch between login and signup forms
function login() {
    document.getElementById("login-form").style.left = "0";
    document.getElementById("signup-form").style.left = "400px";
    document.getElementById("btn").style.left = "0";
}

function signup() {
    document.getElementById("login-form").style.left = "-400px";
    document.getElementById("signup-form").style.left = "0";
    document.getElementById("btn").style.left = "110px";
}
