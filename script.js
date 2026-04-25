
/**animated embers**/

function createEmber(x,y){
  //creating the ember
  const ember = document.createElement("div");
  ember.classList.add("ember");

  const rise = Math.random() * 1000;
  const drift = (Math.random() - 0.5) * 1000;

  ember.style.setProperty("--x", x + "px")
  ember.style.setProperty("--y", y + "px")
  ember.style.setProperty("--rise", rise + "px");
  ember.style.setProperty("--drift", drift + "px");
  ember.style.animation = `float-embers ${1.5 + Math.random() * 10}s ease-out forwards`
  
  document.body.append(ember);
  ember.addEventListener("animationend", () => ember.remove());
}

setInterval(() => {
  createEmber(
    Math.random() * window.innerWidth,
    window.outerHeight
  );
}, 2000);

