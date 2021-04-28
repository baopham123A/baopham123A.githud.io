function rise(n) {
    var x;
    var sp1 = 0;
    switch (folder) {
        case 'starter': {
            x = 0;
            break;
        }
        case 'structure': {
            x = 10;
            break;
        }
        case 'packbox': {
            x = 28;
            break;
        }
        case 'accessories': {
            x = 46;
            break;
        }
    }
    if (n == 1) {
        x += 9;
        sp1 = 9;
    }
    var sp = "";
    if (folder == "starter") {
        if (n == 1) {
            sp += "<a href = '#'><div class = 'product' align = 'center' onclick = 'input(0" + x +", " + x +");'>";
            sp += "<img class = 'img-product' src = 'image/product/" + folder +"/0" + x + ".jpg'/>";
            sp += "<p class = 'name-product'>" + namepro[x] + "</p>";
            sp += "<p class = 'pay-product'> " + pay[x] + " vnd</p></div></a>";
        } else {
            for (y = x; y < (x + 9); y++) {
                sp += "<a href = '#'><div class = 'product' align = 'center' onclick = 'input(0" + sp1 + ", " + x +");'>";
                sp += "<img class = 'img-product' src = 'image/product/" + folder +"/0"+ sp1 + ".jpg'/>";
                sp += "<p class = 'name-product'>" + namepro[y] + "</p>";
                sp += "<p class = 'pay-product'> " + pay[y] + " vnd</p></div></a>";
                sp1++;
            }
        }
    } else {
        for (y = x; y < (x + 9); y++) {
            sp += "<a href = '#'><div class = 'product' align = 'center' onclick = 'input(" + sp1 + ", " + y +");'>";
            var sp2;
            if (sp1 < 10) {
                sp2 = "0" + sp1;
            } else {
                sp2 = sp1;
            }
            sp += "<img class = 'img-product' src = 'image/product/" + folder +"/"+ sp2 + ".jpg'/>";
            sp += "<p class = 'name-product'>" + namepro[y] + "</p>";
            sp += "<p class = 'pay-product'> " + pay[y] + " vnd</p></div></a>";
            sp1++;
        }
    }
    document.getElementById("show").innerHTML = sp;
}