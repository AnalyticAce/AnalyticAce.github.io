// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate");
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const form = document.querySelector('form')
const fullName = document.getElementById("name")
const mess = document.getElementById("message")
const number = document.getElementById("number")
const subject = document.getElementById("subject")
const email = document.getElementById("email")

function SendEmail() {

    const bodyMassage = `Full Name: ${fullName.value}<br> Email:
    ${email.value}<br> Number : ${number.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken : "adae5b2b-48df-4fd6-95da-5bd5236f2722",
        To : 'dossehdosseh14@gmail.com',
        From : "dossehdosseh14@gmail.com",
        Subject : subject.value,
        Body : bodyMassage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire(
                    {
                        title: "Success!",
                        text: "Message sent successfull",
                        icon: "success"
                    }
                );
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    SendEmail();
    form.reset();
    return false;
})