function addGlitters() {
  const app = document.getElementById('outer-wrapper')

  const myRand = () => {
    let r = 50
    while (40 < r && r < 60) {
      r = Math.random()
    }
    return r
  }

  for (let i = 0; i < 100; i++) {
  console.log(document.body.scrollHeight, myRand() * document.body.scrollHeight);

    const delay = Math.random() + 's';
    const el = document.createElement('img')
    el.src            = 'assets/glitter.svg'
    el.className      = 'glitter-star'
    el.style.top      = parseInt(myRand() * document.body.scrollHeight) + 'px'
    el.style.left     = parseInt(myRand() * document.body.scrollWidth) + 'px'
    el.style.animationDelay       = delay
    el.style.msAnimationDelay     = delay
    el.style.webkitAnimationDelay = delay
    el.style.monAnimationDelay    = delay
    app.appendChild(el)
  }

}
