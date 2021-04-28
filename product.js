var tha = 1;

function keo() {
    if (tha == 1) {
        document.getElementById("inf-show").style.height = "auto";
        document.getElementById("inf-show").style.borderColor = "black";
        document.getElementById("showadd").innerHTML = "Thu gọn";
        tha = 0;
    } else {
        document.getElementById("inf-show").style.height = "100px";
        document.getElementById("inf-show").style.borderColor = "yellow";
        document.getElementById("showadd").innerHTML = "Xem thêm";
        tha = 1;
    }
}

var value = 1;

function gt(n) {
    if (n == 0) {
        if (value > 1) {
            value -= 1;
        } else {
            value = 999;
        }
    } else {
        if (value < 999) {
            value += 1;
        } else {
            value = 1;
        }
    }
    document.getElementById("number").innerHTML = value;
}

function input(pos, num) {
    if (pos < 10) {
        pos = "0" + pos;
    }
    var sp = "";
    sp = "<div id = 'singer'><div id = 'product'><img id = 'img-product' src = 'image/product/" + folder + "/" + pos +".jpg'/>";
    sp += "<div id = 'porduct-show'><p id = 'name-product'> " + namepro[num] +"</p>";
    sp += "<p id = 'pay-product'> Giá: " + pay[num] +" vnd</p>";
    value = 1;
    sp += "<b class = 'change' onclick = 'gt(0);'> -</b><b id = 'number'>" + value + "</b><b class = 'change' onclick = 'gt(1);'> +</b><b id = 'pay-pro' onclick = 'add(" + pos + ", " + num + ");'><b id = 'pay-color'></b><b id = 'pay-text'> Thêm vào giỏ hàng</b></b></div>";
    sp += "<div id = 'in'><b> Thông tin sản phẩm</b><div id = 'inf-show'>" + inf[num] + "</div><h2 id = 'showadd' onclick = 'keo();'> Xem thêm</h2></div></div>";
    sp += "<hr/><div id = 'showlist'><b> Một số sản phẩm liên quan</b><div id = 'show'>";
    var x1;
    var x2;
    var x3;
    var min;
    var max;
    switch (folder) {
        case 'starter': {
            min = 0;
            max = 10
            break;
        }
        case 'structure': {
            min = 10;
            max = 28;
            break;
        }
        case 'packbox': {
            min = 28;
            max = 46;
            break;
        }
        case 'accessories': {
            min = 46;
            max = 64;
            break;
        }
    }
    x1 = Math.floor(Math.random() * (max - min)) + min;    
    sp += "<a href='#'><div class='product' align='center' onclick='input(" + (x1 - min) + ", " + x1 + ");'><img class='img-product' src='image/product/" + folder + "/";  
    if (x1 - min < 10) {
        sp += "0" + (x1 - min);
    } else {
        sp += (x1 - min);
    }
    sp += ".jpg'><p class='name-product'>" + namepro[x1] + "</p><p class='pay-product'> " + pay[x1] +" vnd</p></div></a>";
    do {
        x2 = Math.floor(Math.random() * (max - min)) + min;
    } while (x1 == x2);
    sp += "<a href='#'><div class='product' align='center' onclick='input(" + (x2 - min) + ", " + x2 + ");'><img class='img-product' src='image/product/" + folder + "/";  
    if (x2 - min < 10) {
        sp += "0" + (x2 - min);
    } else {
        sp += (x2 - min);
    }
    sp += ".jpg'><p class='name-product'>" + namepro[x2] + "</p><p class='pay-product'> " + pay[x2] +" vnd</p></div></a>";
    do {
        x3 = Math.floor(Math.random() * (max - min)) + min;
    } while ((x1 == x3) | (x2 == x3));
    sp += "<a href='#'><div class='product' align='center' onclick='input(" + (x3 - min) + ", " + x3 + ");'><img class='img-product' src='image/product/" + folder + "/";  
    if (x3 - min < 10) {
        sp += "0" + (x3 - min);
    } else {
        sp += (x3 - min);
    }
    sp += ".jpg'><p class='name-product'>" + namepro[x3] + "</p><p class='pay-product'> " + pay[x3] +" vnd</p></div></a>";
    sp += "</div></div></div>";
    var xuat = document.getElementsByTagName("section");
    xuat[0].innerHTML = sp;
}

function add(pos, num) {
    if (pos < 10) {
        pos = "0" + pos;
    }
    var spimage = new Array(phantu);
    var spnamemoney = new Array(phantu);
    var spamount = new Array(phantu);
    for (x = 0; x < phantu; x++) {
        spimage[x] = image[x];
        spnamemoney[x] = namemoney[x];
        spamount[x] = amount[x];
    }
    phantu++;
    image = new Array(phantu);
    namemoney = new Array(phantu);
    amount = new Array(phantu);
    for (x = 0; x < (phantu - 1); x++) {
        image[x] = spimage[x];
        namemoney[x] = spnamemoney[x];
        amount[x] = spamount[x];
    }
    image[phantu - 1] = folder + "/" + pos;
    namemoney[phantu - 1] = num;
    amount[phantu - 1] = value;
    sum += pay[num] * value;
    document.getElementById("chu").innerHTML = "Pay " + phantu;
}