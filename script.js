// function buat start di spesifik section
var targetSectionId = 'portofolio';
window.onload = function () {
    var targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

document.getElementById('contact').addEventListener('click', function(e) {
    e.preventDefault();

    // Check if a popup already exists
    if (document.getElementById('contactInfo')) {
        return; // If a popup already exists, do nothing
    }

    var contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <h3 class="contact">Contact Info</h3>
            <br><p>Nama : Maleo Farrel</p>
            <p>NIM : 2602076784</p>
            <br>
            <p>Nama : Richard Arthur</p>
            <p>NIM : 2602104333</p><br><br>

        <button id="closePopup">Close</button>
    `;
    contactInfo.id = 'contactInfo'; // add an id to style in CSS

    document.body.appendChild(contactInfo);

    document.getElementById('closePopup').addEventListener('click', function() {
        document.body.removeChild(contactInfo);
    });
});

var descriptions = [
    "Before Refactoring: Method calculateTotalArea dalam class Order sangat bergantung dengan class Rectangle private properties (width dan height). Order lebih banyak mengakses data dari class Rectangle.",
    "After Refactoring",
    "Before Refactoring: Kelas “Employee” memiliki ketergantungan yang berlebihan pada kelas “Address” yang merupakan method internal / hanya untuk kelas “Address”. Maka kelas “Employee” diubah untuk menghilangkan method yang mengambil data internal dari kelas “Address”.",
    "After Refactoring",
    "Before Refactoring: Terdapat banyak pemanggilan method dimana kita berpindah-pindah dari satu objek ke objek lain.",
    "After Refactoring",
    "Before Refactoring: Kelas “Account” merupakan middle man yang hanya meneruskan panggilan ke kelas “Bank” (account mendelegasikan pekerjaan dari bank). Maka dilakukan refactor code untuk menghilangkan kelas “Account” dan langsung memanggil method dari kelas “bank”.",
    "After Refactoring"
];

var types = [
    "Feature Envy",
    "Feature Envy",
    "Inappropriate Intimacy",
    "Inappropriate Intimacy",
    "Message Chain",
    "Message Chain",
    "Middle Man",
    "Middle Man"
];

var sliderNavLinks = document.querySelectorAll(".slider-nav a");
var descriptionElement = document.querySelector(".description2 p");
var typeElement = document.querySelector(".textgallery h1");

sliderNavLinks.forEach(function(link, index) {
    link.addEventListener("click", function() {
        descriptionElement.textContent = descriptions[index];
        typeElement.textContent = types[index];
    });
});



