"use strict";

const main = document.querySelector(".main");
const output = document.querySelector(".output");
const element = document.createElement("div");
const game = { actions: [] };
element.classList.add("element");
main.append(element);

document.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "ArrowLeft") {
        addAction("left");
    } else if (event.key === "ArrowRight") {
        addAction("right");
    } else if (event.key === "ArrowDown") {
        addAction("down");
    } else if (event.key === "ArrowUp") {
        addAction("up");
    } else if (event.key === "Enter") {
        mover();
    }
});

function mover() {
    if (game.actions.length > 0) {
        const element1 = game.actions.shift();
        const value = element1.textContent;
        // const cur = element.getBoundingClientRect();
        element1.remove();
        const pos = [element.offsetLeft, element.offsetTop];
        if (value === "up") {
            if (pos[1] > 0) {
                pos[1] -= 50;
            }
            // element.style.top = cur.top - cur.height + 'px';
        } else if (value === "down") {
            if (main.offsetHeight > pos[1] + 100) {
                pos[1] += 50;
            }
            // element.style.top = cur.top + cur.height + 'px';
        } else if (value === "left") {
            if (pos[0] >= main.offsetLeft) {
                pos[0] -= 50;
            }
            // element.style.left = cur.left - cur.width + 'px';
        } else if (value === "right") {
            if (pos[0] + 50 < main.clientWidth) {
                pos[0] += 50;
            } else {
                pos[0] = main.offsetWidth - 50;
            }
            // element.style.left = cur.left + cur.width + 'px';
        }
        element.style.left = pos[0] + "px";
        element.style.top = pos[1] + "px";
        setTimeout(mover, 300);
    }
    return;
}

function addAction(value) {
    const span = document.createElement("span");
    span.textContent = value;
    span.classList.add("box", value);
    game.actions.push(span);
    output.append(span);
}
