const navbar = document.querySelector(".navbar");

console.log(navbar);

const button = document.querySelector(".getoffer-button");

if (button) {
    button.addEventListener("click", function () {
        alert("Teklif alma sayfasi yakinda eklenecek");
    });
}

const menuButton = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-items");

if (menuButton && navItems) {

    menuButton.addEventListener("click", function () {

        navItems.classList.toggle("active");
        menuButton.classList.toggle("open");

    });

}


const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const firstName = document.querySelector("#firstName").value.trim();
        const lastName = document.querySelector("#lastName").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        if(firstName === "" || lastName === "" || email === "" || subject === "" || message === ""){

            alert("Lütfen tüm alanları doldurunuz.");
            return;

        }

        if(!email.includes("@")){
            
            alert("Geçerli bir e-posta adresi giriniz.");
            return;

        }

        alert("Mesajınız başarıyla alındı.");

        contactForm.reset();

    })

};