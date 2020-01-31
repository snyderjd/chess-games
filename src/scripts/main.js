import data from './data.js'
import dom from './dom.js'
import gameComponent from './gameComponent.js'
import {submitEventListener} from './eventListeners.js'

const inputContainer = document.querySelector('.inputs__form')

// Create input form and add to the DOM
dom.addHTMLToDOM(inputContainer, dom.createForm());

// Add submit event listener
submitEventListener();

