export function addivs(ilosc) {
    if (document.getElementById("karta1")) {
        alert("Karty już były rozdane");
        return "Karty rozdane";
    }

    var divy = document.createDocumentFragment();
    for (let i = 1; i <= ilosc; i++) {
        var newdiv = document.createElement("div");
        newdiv.id = "karta" + i;
        newdiv.textContent = i;
        newdiv.position = "absoulte";
        newdiv.style.top = "-250px";
        newdiv.style.left = "45vw";
        newdiv.style.transition = "top 2s, left 2s";
        divy.appendChild(newdiv);
    }
    document.getElementById("deck").appendChild(divy);
    styledivs(ilosc);
}

function styledivs(ilosc) {
    for (let i = 1; i <= ilosc; i++) {
        var aktualnakarta = document.getElementById("karta" + i);
        aktualnakarta.style.backgroundColor = "#673AB7";
        aktualnakarta.style.width = "150px";
        aktualnakarta.style.height = "200px";
        aktualnakarta.style.border = "thick outset #9575CD";
        aktualnakarta.style.position = "absolute";
        aktualnakarta.style.boxShadow = "4px 4px 15px #00000066";

        var posx = document.getElementById("deck").clientWidth;
        var wyn = posx / 2 - 75;
        var kart = i % 2;

        if (i === 1) {
            aktualnakarta.style.left = wyn + "px";
            aktualnakarta.style.top = "50px";
        } else if (kart === 1) {
            wyn = wyn + (i - 1) * 60;
            aktualnakarta.style.left = wyn + "px";
            aktualnakarta.style.transform = "rotate(" + i + "deg)";
        } else {
            wyn = wyn + i * -60;
            aktualnakarta.style.left = wyn + "px";
            aktualnakarta.style.transform = "rotate(-" + i + "deg)";
        }

        var wyntop = [];
        wyntop[i] = 0 + i * 4;
        aktualnakarta.style.top = wyntop[i] + "px";
        aktualnakarta.style.zIndex = -i + ilosc;

        aktualnakarta.onmouseenter = function mouseover() {
            this.style.zIndex = ilosc + 1;
            this.style.top = " -200px";
            this.style.height = "350px";
            this.style.width = "200px";
            this.style.transition = "all 0ms";
        };

        aktualnakarta.onmouseout = function mouseout() {
            var numer = this.textContent;
            this.style.zIndex = -numer + ilosc;
            this.style.top = 0 + numer * 4 + "px";
            this.style.height = "200px";
            this.style.width = "150px";
            this.style.transition = "all 1000ms, z-index 25ms";
        };
    }
}
