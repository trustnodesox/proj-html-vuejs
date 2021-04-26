Vue.config.devtools = true;
var app = new Vue({
el: '#root',
data:{
  headerLinks: headerLinks,
  index: 0,
  sliders: [
    {
    immagine: "src/img/testimonial.webp",
    frase: "“No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.”",
    nome: "HARRY SMITH • NEW HOME OWNER",
    },
    {
      immagine: "src/img/testimonial-2.webp",
      frase: "“Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.”",
      nome: "JOHN DOE • PROPERTY INVESTOR",
    },
  ],
},
methods: {
  next: function (){
    if (this.index < this.sliders.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  },
  prev: function (){
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.sliders.length - 1;
    }
  },
  dots: function(index) {
    this.index = index;
  }
}
})
