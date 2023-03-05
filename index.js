document.querySelector('.res-box').addEventListener('click', () => {
    document.querySelector('.res-menu').classList.toggle('res-active')
})

const resActive = ['one', 'two', 'three']
document.querySelector('.res-box').addEventListener('click', () => {
    for(let i=0; i<3; i++){
        document.querySelectorAll('.res-box div')[i].classList.toggle(resActive[i])
    }
})
const links = document.querySelectorAll('#links a')
for(let i=0; i<links.length; i++){
    links[i].addEventListener('click', ()=>{
        location.reload()
    })
}