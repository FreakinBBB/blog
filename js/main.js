/* apparizione lenta dei blocchi + la riga viva della presenza */

(function () {
  "use strict";

  /* --- apparizione al passaggio ----------------------------------- */

  var blocchi = document.querySelectorAll(".appari");

  if ("IntersectionObserver" in window) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (voce) {
        if (voce.isIntersecting) {
          voce.target.classList.add("visto");
          oss.unobserve(voce.target);
        }
      });
    }, { threshold: 0.1 });

    blocchi.forEach(function (b, i) {
      b.style.transitionDelay = Math.min(i * 120, 600) + "ms";
      oss.observe(b);
    });
  } else {
    blocchi.forEach(function (b) { b.classList.add("visto"); });
  }

  /* --- la presenza -------------------------------------------------
     da quando sei arrivato: secondi qui, battiti del cuore (~72/min),
     respiri (~16/min), chilometri percorsi dalla Terra (~29,8 km/s). */

  var riga = document.getElementById("presenza");
  if (!riga) return;

  var arrivo = Date.now();
  var fmt = new Intl.NumberFormat("it-IT");

  function aggiorna() {
    var s = (Date.now() - arrivo) / 1000;
    var battiti = Math.floor(s * 1.2);
    var respiri = Math.floor(s / 3.75);
    var km = Math.floor(s * 29.8);

    function volte(n) { return n === 1 ? "volta" : "volte"; }

    riga.innerHTML =
      "Sei su questa pagina da <strong>" + fmt.format(Math.floor(s)) + "</strong> second" + (Math.floor(s) === 1 ? "o" : "i") + ".<br>" +
      "Nel frattempo il tuo cuore ha battuto circa <strong>" + fmt.format(battiti) + "</strong> " + volte(battiti) + ", " +
      "hai respirato <strong>" + fmt.format(respiri) + "</strong> " + volte(respiri) + "<br>" +
      "e la Terra ha percorso <strong>" + fmt.format(km) + "</strong> chilometri attorno al Sole.";
  }

  aggiorna();
  setInterval(aggiorna, 1000);
})();
