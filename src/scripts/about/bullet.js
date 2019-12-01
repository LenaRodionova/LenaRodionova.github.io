export default class Bullet {
    constructor(index) {
        this._index = index;
    }
    createElement(){
        const bullet = document.createElement("button");
        bullet.classList.add("glide__bullet");
        bullet.setAttribute("data-glide-dir", `=${this._index}`);
        return bullet;
    }
}