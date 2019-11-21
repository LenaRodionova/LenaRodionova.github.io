import "./style/style-about.css";
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import Glide from '@glidejs/glide'

const glide = new Glide('.glide',
  {
    type: "carousel",
    gap: 16,
    peek: 88,
    focusAt: "center",
    perView: 3,
    breakpoints: {
      900: {
        peek: 30,
        perView: 2,
      },
      700: {
        peek: 30,
        perView: 1,
      }
    }

  }).mount();