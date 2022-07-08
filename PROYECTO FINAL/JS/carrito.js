const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('tbody')
let carrito = []


Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem (e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemTipo = item.querySelector('.card-text').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        tipo: itemTipo,
        img: itemImg,
        cantidad: 1
    }
    
    addItemCarrito(newItem)
}

function addItemCarrito(newItem){
    const InputElemento = tbody.getElementsByClassName('input__elemento')
    for (let i=0; i< carrito.length ; i++){
        if (carrito[i].tipo.trim() === newItem.tipo.trim()){
            carrito[i].cantidad++;
            const inputValue = InputElemento[i]
            inputValue.value++;
            carritoTotal()     
            return null;
        }
    }

    carrito.push(newItem)
    renderCarrito()
    
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map (item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
            <td class="table__productos">
                <img src= ${item.img} alt="">
                <h6 class=""title>${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table_tipo">${item.tipo}</td>
            <td class="table_cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">      
            </td>
            <td class= "table__eliminar">
            <button class="delete btn btn-danger">X</button>
            </td>
            
                     
        `;
        tr.innerHTML = Content;
        tbody.appendChild(tr)   
        
        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    })

    carritoTotal()    
}

function carritoTotal (){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach ((item) => {
        const precio = Number(item.precio.replace("$", ''))
        Total = Total + precio*item.cantidad;     
    })
    itemCartTotal.innerHTML = `Total S/${Total}`
    //addLocalStorage()
}

function removeItemCarrito(e){
    e.preventDefault();
        if(e.target.classList.contains('delete')){
            for (let i=0; i< carrito.length ; i++){
                if (carrito[i].tipo === e.tipo){
                    e.target.parentElement.parentElement.remove();
                    carritoTotal()     
                }
            }          
        }
}

/* function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest('.ItemCarrito')
    const title = tr.querySelector('.title').textContent;
    carrito.forEach (item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
} */

/*
function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage){
        carrito = storage;
        renderCarrito()
    }
}

*/