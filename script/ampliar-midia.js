let zoom = 1
let posX = 0
let posY = 0

let startX = 0
let startY = 0
let dragging = false

let midiaAtual = null
let container = null

function abrirMidia(containerOrig){
    const viewer = document.getElementById("viewer")
    const area = viewer.querySelector(".viewer-midia")
    const controles = viewer.querySelector(".viewer-controles")

    area.innerHTML = ""

    zoom = 1
    posX = 0
    posY = 0

    const el = containerOrig.querySelector("img,video")

    if(el.tagName === "IMG"){
        controles.style.display = "flex"
        const img = document.createElement("img")
        img.src = el.src

        img.draggable = false

        midiaAtual = img
        container = area

        atualizarTransform()

        img.addEventListener("wheel", e=>{
            e.preventDefault()

            if(e.deltaY < 0){
                zoom += 0.15
            }else{
                if(zoom > 1){
                    zoom -= 0.15
                }
            }

            if(zoom < 1){
                zoom = 1
                posX = 0
                posY = 0
            }

            limitarPosicao()
            atualizarTransform()
        })

        img.addEventListener("mousedown", e=>{

            if(e.button !== 0) return
            if(zoom <= 1) return

            e.preventDefault()

            dragging = true

            startX = e.clientX - posX
            startY = e.clientY - posY
        })

        document.addEventListener("mousemove", e=>{

            if(!dragging) return

            posX = e.clientX - startX
            posY = e.clientY - startY

            limitarPosicao()

            atualizarTransform()

        })

        document.addEventListener("mouseup", e=>{
            if(e.button === 0){
                dragging = false
            }
        })

        area.appendChild(img)

    }

    if(el.tagName === "VIDEO"){
        controles.style.display = "none"
        const vid = document.createElement("video")
        vid.src = el.src
        vid.controls = true
        vid.autoplay = true

        midiaAtual = null

        area.appendChild(vid)
    }

    viewer.style.display="flex"
}

function limitarPosicao(){

    if(!midiaAtual) return

    const rectContainer = container.getBoundingClientRect()

    const larguraContainer = rectContainer.width
    const alturaContainer = rectContainer.height

    const larguraImagem = midiaAtual.offsetWidth * zoom
    const alturaImagem = midiaAtual.offsetHeight * zoom

    const limiteX = Math.max(0, (larguraImagem - larguraContainer) / 2)
    const limiteY = Math.max(0, (alturaImagem - alturaContainer) / 2)

    if(posX > limiteX) posX = limiteX
    if(posX < -limiteX) posX = -limiteX

    if(posY > limiteY) posY = limiteY
    if(posY < -limiteY) posY = -limiteY
}

function atualizarTransform(){

    if(!midiaAtual) return

    midiaAtual.style.transform =
        `translate(${posX}px, ${posY}px) scale(${zoom})`
}

function fecharViewer(){

    const viewer = document.getElementById("viewer")

    const video = viewer.querySelector("video")

    if(video){
        video.pause()
        video.muted = true
        video.currentTime = 0
    }

    viewer.style.display = "none"
    containerTableProd.focus()

    zoom = 1
    posX = 0
    posY = 0
}