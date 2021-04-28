var phantu = 0;
var image = new Array(0);
var namemoney = new Array(0);
var amount = new Array(0);
var sum = 0;

function oder(n) {
    if (n == 1) {
        document.getElementById("one").style.visibility = "visible";
        if (namer == "") {
            document.getElementById("one").innerHTML = "<div id = 'exit' onclick = 'exitt(1);'> ×</div><h1 align = 'center'> Bạn chưa đăng nhập. Xin hãy đăng nhập ạ!</h1>";
        } else {
            var spt= new Date();
            var timer = "";
            timer += spt.getDate() + "/";
            if ((spt.getMonth() + 1) < 10) {
                timer += "0";
            }
            timer += (spt.getMonth() + 1) + "/" + spt.getFullYear() + " - ";
            if (spt.getHours() < 10) {
                timer += "0";
            }
            timer += spt.getHours() + ":";
            if (spt.getMinutes() < 10) {
                timer += "0";
            }
            timer += spt.getMinutes() + ":";
            if (spt.getSeconds() < 10) {
                timer += "0";
            }
            timer += spt.getMinutes();
            document.getElementById("one").innerHTML = "<div id = 'exit' onclick = 'exitt(1);'> ×</div><p> Tên người nhận: " + namer[id] + "</p><p> Địa chỉ gửi: " + iper[id] + "</p><p> Đặt lúc: " + timer + "</p><input onclick = 'thay(15);' type='radio' checked name='check'>Ship thường: 15.000 nvd<br><input onclick = 'thay(50);' type='radio' name='check'>Ship nhanh: 50.000 vnd<br><p id = 'tien'> Tổng tiền: " + (sum + 15) + ".000 vnd</p><div id = 'dong' onclick='oder(2);'><div></div><h1>Xác nhận</h1></div>";
        }
    } else {
        document.getElementById("two").style.visibility = "visible";
        document.getElementById("one").style.visibility = "hidden";
        var spp = document.getElementById("tien").innerHTML;
        var sp = "<ul id = 'bilist'><li> Đơn hàng</li></ul><div id = 'bi-info'><div><p> Gmail: " + gmail[id] +"</p><p> Tên: " + namer[id] + "</p><p> Địa chỉ: " + iper[id] +"</p><p> Phone: " + phone[id] +"</p><p>" + spp +"</p></div></div><div id = 'buy'><div id = 'bill'><div><b class = 'pay-pro chinh'> Products</b><b class = 'amount chinh'> Amount</b><b class = 'money chinh'> Unit price</b></div>";
        for (x = 0; x < phantu; x++) {
            sp += "<div><div class = 'pay-pro phu'><img src = 'image/product/" + image[x] + ".jpg'/><p>" + namepro[namemoney[x]] + "</p> </div><div class = 'amount phu'>" + amount[x] +"</div><div class = 'money phu'>" + (pay[namemoney[x]] * amount[x]) +".000 vnd</div></div>";
        }
        sp += "</div></div>";
        spbiller = new Array(slbill);
        for (x = 0; x < slbill; x++) {
            spbiller[x] = biller[x];
        }
        slbill++;
        biller = new Array(slbill);
        for (x = 0; x < (slbill - 1); x++) {
            biller[x] = spbiller[x];
        }
        biller[slbill - 1] = sp;
        phantu = 0;
        image = new Array(0);
        namemoney = new Array(0);
        amount = new Array(0);
        sum = 0;
    }
}

function exitt(n) {
    switch (n) {
        case 1: {
            document.getElementById("one").style.visibility = "hidden";
            break;
        }
        case 2: {
            document.getElementById("two").style.visibility = "hidden";
            document.getElementById("section").innerHTML = "<div id = 'buy'><h1 align = 'center'> Bạn chưa có sản phẩm trong giỏ hàng</h1></vid>";
            document.getElementById("chu").innerHTML = "Pay " + phantu;
            break;
        }
    }
}

function thay(n) {
    document.getElementById("tien").innerHTML = "Tổng tiền: " + (n + sum) + ".000 vnd";
}

function bo(n) {
    phantu--;
    sum -= pay[namemoney[n]] * amount[n];
    for (x = n; x < phantu; x++) {
        image[x] = image[x + 1];
        namemoney[x] = namemoney[x + 1];
        amount[x] = amount[x + 1];
    }
    pag('pay');
    document.getElementById("chu").innerHTML = "Pay " + phantu;
}