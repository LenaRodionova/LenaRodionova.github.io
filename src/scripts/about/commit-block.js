import {glideBullets, glideSlides} from "../elements";
import Bullet from "./bullet";

export default class CommitBlock {

  render(cards) {
    cards.forEach((commit, index) => {
      glideSlides.appendChild(commit.createElement());
      glideBullets.appendChild(new Bullet(index).createElement())
    });
  }

}