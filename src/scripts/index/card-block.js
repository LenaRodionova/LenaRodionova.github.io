import {findingButtonMore, findingCards} from "../elements";

export default class CardBlock {

  addCards(cards){
    cards.forEach(card => findingCards.appendChild(card.createElement()))
  }

  showButton(){
    findingButtonMore.style.display = "inline-block";
  }

  hideButton(){
    findingButtonMore.style.display = "none";
  }

}