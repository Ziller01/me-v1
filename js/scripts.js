let colored = false

function Add(id, color) {
    if (colored) return
    let e = document.getElementById(id)
    e.classList.add(color || 'colored')
}

function Remove(id, color) {
    if (colored) return
    let e = document.getElementById(id)
    e.classList.remove(color || 'colored')
}

function MoveTo(params) {
    let e = document.getElementById(params)
    window.location.href = `#${params}`
    e.classList.add('opacity-50')
    setTimeout(() => {
        e.classList.remove('opacity-50')
    }, 500)
}



function ChangeTheme() {
    console.log()
} ChangeTheme()