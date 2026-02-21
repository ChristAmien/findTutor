document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let adminEmail = "christamien13@gmail.com"; // <-- Mets ton vrai email ici

    let mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        "Nom: " + name + "\n" +
        "Email: " + email + "\n\n" +
        message
    )}`;

    window.location.href = mailtoLink;
});