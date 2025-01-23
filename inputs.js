const botonSubmit = document.querySelector('.btn-submit')
const form = document.querySelector('.form-contact')
const alertWindow = document.querySelector('.alert-w')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    botonSubmit.value = "Enviando"

    const templetID = "template_twtsqka"
    const serviceID = "service_t1wd5k4"

    emailjs.sendForm(serviceID, templetID, form)
        .then(() => {
            botonSubmit.value = 'Enviar';
            alertWindow.style.display = "block";
            form.reset()
        }, (err) => {
            botonSubmit.value = 'Enviar';
            alert("Error al enviar: " + JSON.stringify(err));
        });
});