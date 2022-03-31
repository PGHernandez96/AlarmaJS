const d = document

const Reloj = (hour, btnPlay, btnStop) => {
    let timmer;
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
            timmer = setInterval(() => {
                let runClock = new Date().toLocaleTimeString()
                d.querySelector(hour).innerHTML = `<h3>${runClock}</h3>`
            }, 1000);

            e.target.disabled = true
        }

        if(e.target.matches(btnStop)){
            clearInterval(timmer)
            d.querySelector(hour).innerHTML = null
            d.querySelector(btnPlay).disabled = false
        }
    })
}

Reloj("#reloj", "#activar-reloj", "#desactivar-reloj")


const Alarma = (sound, playBtn, stopBtn) => {

    sound = d.getElementById("sonido")

    sound.style.opacity = "0"
    sound.style.position = "absolute"
    sound.style.top = "-1000px"

    d.addEventListener("click", (e) => {
        if(e.target.matches(playBtn)){
            sound.play()
        }

        if(e.target.matches(stopBtn)){
            sound.pause()
        }
    })
}

Alarma("#sonido", "#activar-alarma", "#desactivar-alarma")




