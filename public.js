var lo = 0;
var si = 0;

function loginnone() {
    if (si == 1) {
        siginnone();
    }
    var sp = document.getElementsByClassName("go");
    if (lo == 0) {
        document.getElementById("login-go").style.height = '435px';
        document.getElementById("login").style.borderTopColor = 'black';
        document.getElementById("login").style.borderLeftColor = 'black';
        document.getElementById("login").style.borderRightColor = 'black';
        document.getElementById("regis").style.borderLeftColor = 'black';
        document.getElementById("search").style.height = '0px';
        sp[0].style.borderLeftWidth = "2px";
        sp[0].style.borderBottomWidth = "2px";
        sp[0].style.borderRightWidth = "2px";
        lo = 1;
    } else {
        document.getElementById("login-go").style.height = '0px';
        document.getElementById("login").style.borderTopColor = 'red';
        document.getElementById("login").style.borderLeftColor = 'red';
        document.getElementById("login").style.borderRightColor = 'white';
        document.getElementById("regis").style.borderLeftColor = 'white';
        document.getElementById("search").style.height = '40px';
        sp[0].style.borderLeftWidth = "0px";
        sp[0].style.borderBottomWidth = "0px";
        sp[0].style.borderRighttWidth = "0px";
        lo = 0;
    }
}

function siginnone() {
    if (lo == 1) {
        loginnone();
    }
    var sp = document.getElementsByClassName("go");
    if (si == 0) {
        document.getElementById("sigin-go").style.height = '750px';
        document.getElementById("regis").style.borderTopColor = 'black';
        document.getElementById("regis").style.borderRightColor = 'black';
        document.getElementById("login").style.borderRightColor = 'black';
        document.getElementById("regis").style.borderLeftColor = 'black';
        document.getElementById("search").style.height = '0px';
        sp[1].style.borderLeftWidth = "2px";
        sp[1].style.borderBottomWidth = "2px";
        sp[1].style.borderRightWidth = "2px";
        si = 1;
    } else {
        document.getElementById("sigin-go").style.height = '0px';
        document.getElementById("regis").style.borderTopColor = 'red';
        document.getElementById("regis").style.borderRightColor = 'red';
        document.getElementById("login").style.borderRightColor = 'white';
        document.getElementById("regis").style.borderLeftColor = 'white';
        document.getElementById("search").style.height = '40px';
        sp[1].style.borderLeftWidth = "0px";
        sp[1].style.borderBottomWidth = "0px";
        sp[1].style.borderRighttWidth = "0px";
        si = 0;
    }
}

function pag(string) {
    folder = string;
    var sp = document.getElementsByTagName("section");
    if (folder == "home") {
        sp[0].innerHTML = "<div id = 'index'><div class = 'button' id = 'back' onclick='back();'> <</div><div class = 'button' id  = 'next' onclick='next();'> ></div><div id = 'background'><a href='#' onclick = pag('starter');><img src = 'image/1.jpg'/></a></div><h1> Gi???i thi???u v??? SmileH store</h1><p> Ch??o m???ng b???n ???? ?????n v???i SmileH store.</p><p> SmileH store l?? c???a h??ng kinh doanh b??n card v?? ph??? tr??? yu-gi-oh! ch??nh h???ng. Qua nhi???u n??m ph???c v??? c???ng ?????ng, ch??ng t??i t??ch l??y ???????c nhi???u kinh nghi???m trong l??nh v???c game & gi???i tr?? ????? c?? th??? mang l???i d???ch v??? t???t nh???t ph???c v??? kh??ch h??ng.</p><p> website ???? ???????c ch???ng nh???n b???i b??? c??ng th????ng. SmileH store s??? ??em ?????n cho b???n nh???ng tr???i nghi???m t??t nh???t</p><h1> Th??ng tin li??n h???</h1><p> phone: 0369430009</p><p> facebook: <a href='https://www.facebook.com/SmileLite1903/'> Ph???m Th??i B???o</a></p><p> Gmail: 2024802050007@student.tdmu.edu.vn</p><p> ?????a ch???: 424/39/8 t??? 4, khu ph??? 4, Ph?????ng Ph?? H??a, Th??nh Ph??? Th??? D???u M???t, B??nh D????ng</p></div>";
    } else {
        if (folder == "gameplay") {
            sp[0].innerHTML = "<div id = 'gameplay'><div class = 'gameplay'><a href = '#' onclick = 'gameplay_pag(1);'><img src = 'image/gameplay/indu.jpg'/><h3> Gi???i thi???u</h3></a></div><div class = 'gameplay'><a href = '#' onclick = 'gameplay_pag(2);'><img src = 'image/gameplay/basic.jpg'/><h3> V???t d???ng c???n thi???t</h3></a></div><div class = 'gameplay'><a href = '#' onclick = 'gameplay_pag(3);'><img src = 'image/gameplay/deck.jpg'/><h3> B??? b??i</h3></a></div><div class = 'gameplay'><a href = '#' onclick = 'gameplay_pag(4);'><img src = 'image/gameplay/card.webp'/><h3> C??c lo???i b??i</h3></a></div><div class = 'gameplay'><a href = '#' onclick = 'gameplay_pag(5);'><img src = 'image/gameplay/duel.png'/><h3> Gameplay</h3></a></div><div class = 'gameplay'><a href = '#' onclick = 'gameplay_pag(6);'><img src = 'image/gameplay/summon.jpg'/><h3> C??c tri???u h???i ph??p</h3></a></div></div></section>";
        } else {
            if (folder == "pay") {
                var c = "<div id = 'buy'><div class = 'biller' id = 'one'></div><div class = 'biller' id = 'two'><div id = 'exit' onclick = 'exitt(2);'> ??</div><p> Qu?? kh??ch ???? ?????t h??ng th??nh c??ng. ???</p><p> Ch??c qu?? kh??ch m???t ng??y t??t l??nh. ????</p></div><div id = 'bill'>";
                if (phantu == 0) {
                    c += "<h1 align = 'center'> B???n ch??a c?? s???n ph???m trong gi??? h??ng</h1>";
                } else {
                    c += "<div><b class = 'pay-pro chinh'> Products</b><b class = 'amount chinh'> Amount</b><b class = 'money chinh'> Unit price</b><b class = 'manipulation chinh'> Manipulation</b></div>";
                    for (x = 0; x < phantu; x++) {
                        c += "<div><div class = 'pay-pro phu'><img src = 'image/product/" + image[x] + ".jpg'/><p>" + namepro[namemoney[x]] + "</p> </div><div class = 'amount phu'>" + amount[x] +"</div><div class = 'money phu'>" + (pay[namemoney[x]] * amount[x]) +".000 vnd</div><div class = 'manipulation phu'><p id = 'huy' onclick = 'bo(" + x + ");'>B???</p></div></div>";
                    }
                    c += "</div><h1 id = 'tong'> T???ng ti???n: " + sum + ".000 vnd</h1><a href = '#' id = 'dathang' onclick = 'oder(1);'> order</a>";
                }
                sp[0].innerHTML = c;
            } else {
                var x;
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
                sp[0].innerHTML = "<div id = 'showlist'><div id = 'show'><a href = '#'><div class = 'product' align = 'center' onclick = 'input(00, " + x +");'><img class = 'img-product' src = 'image/product/" + folder +"/00.jpg'/><p class = 'name-product'>" + namepro[x] + "</p><p class = 'pay-product'> " + pay[x] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(01, " + (x + 1) +");'><img class = 'img-product' src = 'image/product/" + folder + "/01.jpg'/><p class = 'name-product'>" + namepro[x + 1] + "</p><p class = 'pay-product'> " + pay[x + 1] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(02, " + (x + 2) +");'><img class = 'img-product' src = 'image/product/" + folder + "/02.jpg'/><p class = 'name-product'>" + namepro[x + 2] + "</p><p class = 'pay-product'> " + pay[x + 2] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(03, " + (x + 3) +");'><img class = 'img-product' src = 'image/product/" + folder + "/03.jpg'/><p class = 'name-product'>" + namepro[x + 3] + "</p><p class = 'pay-product'> " + pay[x + 3] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(04, " + (x + 4) +");'><img class = 'img-product' src = 'image/product/" + folder + "/04.jpg'/><p class = 'name-product'>" + namepro[x + 4] + "</p><p class = 'pay-product'> " + pay[x + 4] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(05, " + (x + 5) +");'><img class = 'img-product' src = 'image/product/" + folder + "/05.jpg'/><p class = 'name-product'>" + namepro[x + 5] + "</p><p class = 'pay-product'> " + pay[x + 5] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(06, " + (x + 6) +");'><img class = 'img-product' src = 'image/product/" + folder + "/06.jpg'/><p class = 'name-product'>" + namepro[x + 6] + "</p><p class = 'pay-product'> " + pay[x + 6] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(07, " + (x + 7) +");'><img class = 'img-product' src = 'image/product/" + folder + "/07.jpg'/><p class = 'name-product'>" + namepro[x + 7] + "</p><p class = 'pay-product'> " + pay[x + 7] + " vnd</p></div></a><a href = '#'><div class = 'product' align = 'center' onclick = 'input(08, " + (x + 8) +");'><img class = 'img-product' src = 'image/product/" + folder + "/08.jpg'/><p class = 'name-product'>" + namepro[x + 8] + "</p><p class = 'pay-product'> " + pay[x + 8] + " vnd</p></div></a></div><div id = 'list'><ul><li onclick = 'rise(0)'><a href = '#'> 1</a></li><li onclick = 'rise(1)'><a href = '#'> 2</a></li></ul></div></div>";
            }
        }
    }
}