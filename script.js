let copy = document.getElementsByClassName("valeur-copier")[0];

let couleur = document.getElementsByClassName("color")

for (let i = 0; i < couleur.length; i++) {
        couleur[i].addEventListener("click", function(e) {
        var rgbValues = window.getComputedStyle(this, null).getPropertyValue("background-color")
        copy.classList.toggle("show")
        copy.innerText = "Copied!"
        copy.innerText = rgbValues + " " + copy.innerText
        copyColor(rgbValues);
        setTimeout(function() {
          copy.classList.toggle("show");
        }, 1000);    
      });

      function copyColor(text) {
        var texte = document.createElement("textarea");
        document.body.appendChild(texte);
        texte.value = text;
        texte.select();
        document.execCommand("copy");
        document.body.removeChild(texte);
      }
    }