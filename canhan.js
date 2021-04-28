function sua(n) {
    switch (n) {
        case 0: {
            gmail[id] = window.prompt("Gmail mới của bạn?", "");
            break;
        }
        case 1: {
            namer[id] = window.prompt("Tên mới của bạn?", "");
            break;
        }
        case 2: {
            iper[id] = window.prompt("Địa chỉ mới của bạn?", "");
            break;
        }
        case 3: {
            phone[id] = window.prompt("Số điện thoại mới của bạn?", "");
            break;
        }
    }
    document.getElementById("section").innerHTML = "<div id = 'canhan'><ul id = 'cnlist'><li> Thông tin</li></ul><div id = 'cn-info'><div><p> gmail: " + gmail[id] + " <span onclick='sua(0);'> sửa</span></p><p> Tên: " + namer[id] + " <span onclick='sua(1);'> sửa</span></p><p> Địa chỉ: " + iper[id] + " <span onclick='sua(2);'> sửa</span></p><p> phone: " + phone[id] + " <span onclick='sua(3);'> sửa</span></p></div></div></div>";
}