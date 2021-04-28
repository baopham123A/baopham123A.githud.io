var userad = "root";
var passad = "root";
var namead = "SmileH store"

var people = 0;
var gmail = new Array(0);
var user = new Array(0);
var pass = new Array(0);
var namer = new Array(0);
var phone = new Array(0);
var iper = new Array(0);

function checktt() {
    var sp = document.getElementById("sigin_user").value;
    for (x = 0; x < people; x++) {
        if (user[x] == sp) {
            return false;
        }
    }
    return true;
}

function addnick() {
    if (checktt()) {
        var spgmail = new Array(people);
        var spuser = new Array(people);
        var sppass = new Array(people);
        var spnamer = new Array(people);
        var spphone = new Array(0);
        var spiper = new Array(people);
        for (x = 0; x < people; x++) {
            spgmail[x] = gmail[x];
            spuser[x] = user[x];
            sppass[x] = pass[x];
            spnamer[x] = namer[x];
            spphone[x] = phone[x];
            spiper[x] = iper[x];
        }
        people++;
        gmail = new Array(people);
        user = new Array(people);
        pass = new Array(people);
        namer = new Array(people);
        phone = new Array(people);
        iper = new Array(people);
        for (x = 0; x < (people - 1); x++) {
            gmail[x] = spgmail[x];
            user[x] = spuser[x];
            pass[x] = sppass[x];
            namer[x] = spnamer[x];
            phone[x] = spphone[x];
            iper[x] = spiper[x];
        }
        var sp = document.getElementById("sigin_gmail");
        gmail[people - 1] = sp.value;
        sp.value = "";
        sp = document.getElementById("sigin_user");
        user[people - 1] = sp.value;
        sp.value = "";
        sp = document.getElementById("sigin_pass");
        pass[people - 1] = sp.value;
        sp.value = "";
        sp = document.getElementById("sigin_name");
        namer[people - 1] = sp.value;
        sp.value = "";
        sp = document.getElementById("sigin_phone");
        phone[people - 1] = sp.value;
        sp.value = "";
        sp = document.getElementById("sigin_ip");
        iper[people - 1] = sp.value;
        sp.value = "";
        document.getElementById("login_user").value = user[people - 1];
        document.getElementById("login_pass").value = pass[people - 1];
        loginnone();
        alert("Đăng kí tài khoản thành công.");
    } else {
        alert("Tài khoản đã tồn tại!");
    }
    return false;
}

var id = -1;

function checkuser() {
    var sp = document.getElementById("login_user").value;
    for (x = 0; x < people; x++) {
        if (sp == user[x]) {
            id = x;
            return true;
        }
    }
    return false;
}

function nic() {
    var sp = document.getElementById("login_user").value;
    if (sp == userad) {
        sp = document.getElementById("login_pass").value;
        if (sp == passad) {
            id = -2;
            loginnone();
            document.getElementById("login").style.visibility = "hidden";
            document.getElementById("regis").style.visibility = "hidden";
            document.getElementById("user-go").innerHTML = "<ul><li id = 'nicker'> 🠟 " + namead +"<ul><li><a href='#' onclick='bil();'> Đơn hàng</a><li><a href='#' onclick='dangxuat();'> Đăng xuất</a></li></ul></li></ul>";
        }
    } else {
        if (checkuser()) {
            sp = document.getElementById("login_pass").value;
            if (sp == pass[id]) {
                loginnone();
                document.getElementById("login").style.visibility = "hidden";
                document.getElementById("regis").style.visibility = "hidden";
                document.getElementById("user-go").innerHTML = "<ul><li id = 'nicker'> 🠟 " + namer[id] +"<ul><li><a href='#' onclick='canhan();'> Trang cá nhân</a></li><li><a href='#' onclick='doimatkhau();'> Đổi mật khẩu</a></li><li><a href='#' onclick='dangxuat();'> Đăng xuất</a></li></ul></li></ul>";
            } else {
                alert("Mật khẩu không đúng.");
            }
        } else {
            alert("Tài khoản không tồn tại!");
        }
    }
    document.getElementById("login_user").value = "";
    document.getElementById("login_pass").value = "";
    return false;
}

function canhan() {
    document.getElementById("section").innerHTML = "<div id = 'canhan'><ul id = 'cnlist'><li> Thông tin</li></ul><div id = 'cn-info'><div><p> gmail: " + gmail[id] + " <span onclick='sua(0);'> sửa</span></p><p> Tên: " + namer[id] + " <span onclick='sua(1);'> sửa</span></p><p> Địa chỉ: " + iper[id] + " <span onclick='sua(2);'> sửa</span></p><p> phone: " + phone[id] + " <span onclick='sua(3);'> sửa</span></p></div></div></div>";
}

function doimatkhau() {
    var sppass = window.prompt("Nhập mật khẩu cũ","");
    if (sppass == pass[id]) {
        pass[id] = window.prompt("Nhập mật khẩu mới","");
    }
}

function dangxuat() {
    phantu = 0;
    image = new Array(0);
    namemoney = new Array(0);
    amount = new Array(0);
    sum = 0;
    id = -1;
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("regis").style.visibility = "visible";
    document.getElementById("user-go").innerHTML = "";
    document.getElementById("chu").innerHTML = "Pay " + phantu;
    folder = "home";
    pag(folder);
}