const boton = document.getElementById('boton')


boton.addEventListener('click', ()=>{
    alert("Presionaste")
} )

const cuadrado = document.querySelector('#cuadrado')

const cuerpo = document.querySelector('body')
cuadrado.style.translate = "0px 1px"
cuerpo.addEventListener('keydown', (e)=>{
    console.log(e)
    if(e.code === 'ArrowRight'){
        const mov = cuadrado.style.translate
        const movArray = mov.split('px')
        cuadrado.style.translate = `${(parseInt(movArray[0]) + 10)}px ${(parseInt(movArray[1]))}px`
    }else if(e.code === 'ArrowLeft'){
        const mov = cuadrado.style.translate
        const movArray = mov.split('px')
        cuadrado.style.translate = `${(parseInt(movArray[0]) - 10)}px ${(parseInt(movArray[1]))}px`
    }else if(e.code === 'ArrowUp'){
        const mov = cuadrado.style.translate
        const movArray = mov.split('px')
        console.log(movArray)
        cuadrado.style.translate = `${parseInt(movArray[0])}px ${(parseInt(movArray[1]) - 10)}px`
    }else if(e.code === 'ArrowDown'){
        const mov = cuadrado.style.translate
        const movArray = mov.split('px')
        console.log(movArray)
        cuadrado.style.translate = `${parseInt(movArray[0])}px ${(parseInt(movArray[1]) + 10)}px`
    }
})