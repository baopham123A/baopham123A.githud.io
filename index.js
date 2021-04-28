var anh = 1;
function next() {
    if (folder == "home") {
        var c = "";
        if (anh < 4) {
            anh++;
            var string;
            switch (anh) {
                case 1: {
                    string = "starter";
                    break;
                }
                case 2: {
                    string = "structure";
                    break;
                }
                case 3: {
                    string = "packbox";
                    break;
                }
                case 4: {
                    string = "accessories";
                    break;
                }
            }
            c = "<a href='starter deck.html'><img src = 'image/" + anh +".jpg'/>";
            c += "</a><img id = 'anh1' src = 'image/" + (anh-1) + ".jpg'/>";
            c += "<a href = '#' id = 'anhhotro' onclick = pag('" + string + "');><img id = 'anh2' src = 'image/" + anh +".jpg'/></a>";
        } else {
            anh = 1;
            var string;
            switch (anh) {
                case 1: {
                    string = "starter";
                    break;
                }
                case 2: {
                    string = "structure";
                    break;
                }
                case 3: {
                    string = "packbox";
                    break;
                }
                case 4: {
                    string = "accessories";
                    break;
                }
            }
            c = "<a href='starter deck.html'><img src = 'image/" + 1 +".jpg'/>";
            c += "</a><img id = 'anh1' src = 'image/" + 4 +".jpg'/>";
            c += "<a href = '#' id = 'anhhotro' onclick = pag('" + string + "');><img id = 'anh2' src = 'image/" + 1 + ".jpg'/></a>";
        }
        document.getElementById("background").innerHTML = c;
    }
}

function back() {
    var c = "";
    if (anh > 1) {
        anh--;
        var string;
        switch (anh) {
            case 1: {
                string = "starter";
                break;
            }
            case 2: {
                string = "structure";
                break;
            }
            case 3: {
                string = "packbox";
                break;
            }
            case 4: {
                string = "accessories";
                break;
            }
        }
        c = "<a href='starter deck.html'><img src = 'image/" + anh +".jpg'/>";
        c += "</a><img id = 'anh3' src = 'image/" + (anh+1) + ".jpg'/>";
        c += "<a href = '#' id = 'anhhotro' onclick = pag('" + string + "');><img id = 'anh4' src = 'image/" + anh +".jpg'/></a>";
    } else {
        anh = 4;
        var string;
        switch (anh) {
            case 1: {
                string = "starter";
                break;
            }
            case 2: {
                string = "structure";
                break;
            }
            case 3: {
                string = "packbox";
                break;
            }
            case 4: {
                string = "accessories";
                break;
            }
        }
        c = "<a href='starter deck.html'><img src = 'image/" + 4 +".jpg'/>";
        c += "</a><img id = 'anh3' src = 'image/" + 1 +".jpg'/>";
        c += "<a href = '#' id = 'anhhotro' onclick = pag('" + string + "');><img id = 'anh4' src = 'image/" + 4 + ".jpg'/></a>";
    }
    document.getElementById("background").innerHTML = c;
}

t = setInterval ("next()", 10000);