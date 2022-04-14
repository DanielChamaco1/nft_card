import {createCard} from './createcard';
import {mount} from './mount';
import {createButton} from './createButton';
import {buttonDisabled} from './buttonDisabled';
import {getContenido_card}  from './contenido';

const maxCards =10
const state={
    quantity: maxCards,
}
//Crear botones
createButton("add", "addCard")
createButton("Remove", "removeCard")

//Petición del contenido de las tarjetas
const contentCard = getContenido_card()

//Construcción de las tarjetas
contentCard.forEach(item => { 
    const card = createCard(item)
    mount(card)
});
buttonDisabled(state.quantity)

const addCard=document.querySelector("#addCard")
addCard.addEventListener('click',()=>{
    const card = createCard(contentCard[state.quantity])
    mount(card)
    state.quantity++
    buttonDisabled(state.quantity)
})

const removeCard=document.querySelector("#removeCard")
removeCard.addEventListener('click',()=>{
    const parent = document.querySelector('.container-cards')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})

