let pin_rj = document.querySelector('.pin_rj')
let pin_mg = document.querySelector('.pin_mg')
let pin_sp = document.querySelector('.pin_sp')
let div_rj = document.querySelector('.rj')
let div_mg = document.querySelector('.mg')
let div_sp = document.querySelector('.sp')
let local = document.querySelectorAll('.localh2')
const array = [pin_rj, pin_mg, pin_sp]
const array2 = [div_rj, div_mg, div_sp]

const display_none = (div1,div2,pin1,pin2) => {
    div1.style.display = "none"
    div2.style.display = "none"
    pin1.style.display = "block"
    pin2.style.display = "block"
    local.forEach(element =>{
        element.style.display = "none"
    })
}

array.forEach(element => {
    if(element.className == "pin pin_rj"){
        element.addEventListener('click', () =>{
            div_rj.style.display = "flex"
            element.style.display = "none"
            display_none(div_mg,div_sp,pin_mg,pin_sp)
        })
    }else if(element.className == "pin pin_mg"){
        element.addEventListener('click', () =>{
            div_mg.style.display = "flex"
            element.style.display = "none"
            display_none(div_rj,div_sp,pin_rj,pin_sp)
        })
    }else{
        element.addEventListener('click', () =>{
            div_sp.style.display = "flex"
            element.style.display = "none"
            display_none(div_rj,div_mg,pin_rj,pin_mg)
        })
    }
})

array2.forEach(element => {
    element.addEventListener('click', () =>{
        element.style.display = "none"
        document.querySelectorAll('.pin').forEach(element =>{
            element.style.display = "block"
        })
        local.forEach(element =>{
            element.style.display = "block"
        })
    })
})