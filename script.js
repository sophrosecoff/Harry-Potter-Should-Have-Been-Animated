function witchselect(menu) {
    if (menu.id==="c2R1" || menu.id==="c2R2") {
        var target = document.getElementById("c3R1");
        var choice1 = document.getElementById("c2R1");
        var choice2 = document.getElementById("c2R2");
        applyoptions(target, choice1, choice2);
    }
    else if (menu.id==="c2R3" || menu.id==="c2R4") {
        var target = document.getElementById("c3R2");
        var choice1 = document.getElementById("c2R3");
        var choice2 = document.getElementById("c2R4");
        applyoptions(target, choice1, choice2);
    }
    else if (menu.id==="c8R1" || menu.id==="c8R2") {
        var target = document.getElementById("c7R1");
        var choice1 = document.getElementById("c8R1");
        var choice2 = document.getElementById("c8R2");
        applyoptions(target, choice1, choice2);
    }
    else if (menu.id==="c8R3" || menu.id==="c8R4") {
        var target = document.getElementById("c7R2");
        var choice1 = document.getElementById("c8R3");
        var choice2 = document.getElementById("c8R4");
        applyoptions(target, choice1, choice2);
    }
    else if (menu.id==="c3R1" || menu.id==="c3R2") {
        var target = document.getElementById("c4R1");
        var choice1 = document.getElementById("c3R1");
        var choice2 = document.getElementById("c3R2");
        applyoptions(target, choice1, choice2);
    }
    else if (menu.id==="c7R1" || menu.id==="c7R2") {
        var target = document.getElementById("c6R1");
        var choice1 = document.getElementById("c7R1");
        var choice2 = document.getElementById("c7R2");
        applyoptions(target, choice1, choice2);
    }
    else if (menu.id==="c4R1" || menu.id==="c6R1") {
        var target = document.getElementById("c5R1");
        var choice1 = document.getElementById("c4R1");
        var choice2 = document.getElementById("c6R1");
        applyoptions(target, choice1, choice2);
    }
}

function applyoptions(target, choice1, choice2) {
    target.innerHTML = "";
    if (choice1.value == "" || choice2.value == "") {
        target.setAttribute("disabled", "disabled");
    }
    else {
        var opt = document.createElement('option');
        opt.innerHTML = "Select";
        opt.value = "";
        target.appendChild(opt);
        opt = document.createElement('option');
        opt.innerHTML = choice1.value;
        target.appendChild(opt);
        opt = document.createElement('option');
        opt.innerHTML = choice2.value;
        target.appendChild(opt);
        target.removeAttribute("disabled");
    }
    witchselect(target);
}