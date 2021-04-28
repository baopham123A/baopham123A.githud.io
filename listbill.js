var slbill = 0;
var biller = new Array(0);
var idbill = -1;

function bil() {
    if (slbill == 0) {
        document.getElementById("section").innerHTML = "<div id = 'bi'><div id = 'buy'><div id='bill'><h1 align='center'> Bạn Không có đơn hàng.</h1></div></div></div>";
    } else {
        idbill = 0;
        if (slbill == 1) {
            document.getElementById("section").innerHTML = "<div id = 'bi'>" + biller[0] + "<div id = 'xong'><a href = '#' id = 'chap' onclick='billht();'> xong</a></div></div>";
        } else {
            document.getElementById("section").innerHTML = "<div id = 'bi'>" + biller[0] + "<div id = 'xong'><a href = '#' id = 'chap' onclick='billht();'> xong</a><a href = '#' id = 'right' onclick='billsau();'> next</a></div></div>";
        }
    }
}

function billtruoc() {
    var sp = "";
    idbill--;
    sp += biller[idbill];
    if (idbill == 0) {
        sp += "<div id = 'xong'><a href = '#' id = 'chap' onclick='billht();'> xong</a><a href = '#' id = 'right' onclick='billsau();'> next</a></div>";
    } else {
        sp += "<div id = 'xong'><a href = '#' id = 'left' onclick='billtruoc();'> previous</a><a href = '#' id = 'chap' onclick='billht();'> xong</a><a href = '#' id = 'right' onclick='billsau();'> next</a></div>";
    }
    document.getElementById("section").innerHTML = "<div id = 'bi'>" + sp + "</div>";
}

function billsau() {
    var sp = "";
    idbill++;
    sp += biller[idbill];
    if (idbill == slbill - 1) {
        sp += "<div id = 'xong'><a href = '#' id = 'left' onclick='billtruoc();'> previous</a><a href = '#' id = 'chap' onclick='billht();'> xong</a></div>";
    } else {
        sp += "<div id = 'xong'><a href = '#' id = 'left' onclick='billtruoc();'> previous</a><a href = '#' id = 'chap' onclick='billht();'> xong</a><a href = '#' id = 'right' onclick='billsau();'> next</a></div>";
    }
    document.getElementById("section").innerHTML = "<div id = 'bi'>" + sp + "</div>";
}

function billht() {
    slbill--;
    for (x = idbill; x < slbill; x++) {
        biller[idbill] = biller[idbill + 1];
    }
    bil();
}