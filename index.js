document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 441; i++) {
        const box = document.createElement('div');
        grid.appendChild(box);
    }

    const box = Array.from(document.querySelectorAll('.grid div'));
    const obs1 = [
        357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
        378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398
    ];
    const obs2 = [
        273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293,
        294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314
    ];
    const obs3 = [
        189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
        210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230
    ];
    const obs4 = [
        105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
        126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146
    ];
    const obs5 = [
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
        42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62
    ];
    let man = 430;
    let width = 21;
    let game = true;
    let time = 1500;
    let left = 30;


    function randomNumber(a, b) {
        return Math.floor(Math.random() * (a - b) + b);
    }

    function draw1() {
        for (let i = 0; i < obs1.length; i++) {
            box[obs1[i]].classList.add('obs1');
        }
    }
    function draw2() {
        for (let i = 0; i < obs2.length; i++) {
            box[obs2[i]].classList.add('obs2');
        }
    }
    function draw3() {
        for (let i = 0; i < obs3.length; i++) {
            box[obs3[i]].classList.add('obs3');
        }
    }
    function draw4() {
        for (let i = 0; i < obs4.length; i++) {
            box[obs4[i]].classList.add('obs4');
        }
    }
    function draw5() {
        for (let i = 0; i < obs5.length; i++) {
            box[obs5[i]].classList.add('obs5');
        }
    }

    function check() {
        for (let i = 0; i < 441; i++) {
            if (box[i].classList.contains('obs1') && box[i].classList.contains('man')) {
                document.getElementById('gameover').style.display = "block";
                box[i].classList.add('over');
                game = false;
                clearInterval(gameon);
                clearInterval(timeLeft);
            }
            if (box[i].classList.contains('obs2') && box[i].classList.contains('man')) {
                document.getElementById('gameover').style.display = "block";
                box[i].classList.add('over');
                game = false;
                clearInterval(gameon);
                clearInterval(timeLeft);
            }
            if (box[i].classList.contains('obs3') && box[i].classList.contains('man')) {
                document.getElementById('gameover').style.display = "block";
                box[i].classList.add('over');
                game = false;
                clearInterval(gameon);
                clearInterval(timeLeft);
            }
            if (box[i].classList.contains('obs4') && box[i].classList.contains('man')) {
                document.getElementById('gameover').style.display = "block";
                box[i].classList.add('over');
                game = false;
                clearInterval(gameon);
                clearInterval(timeLeft);
            }
            if (box[i].classList.contains('obs5') && box[i].classList.contains('man')) {
                document.getElementById('gameover').style.display = "block";
                box[i].classList.add('over');
                game = false;
                clearInterval(gameon);
                clearInterval(timeLeft);
            }
            if (man < 21) {
                document.getElementById('win').style.display = "block";
                game = false;
                clearInterval(gameon);
                clearInterval(timeLeft);
            }
        }
    }




    function goleft() {
        if ((man !== 420 && man !== 399 && man !== 378 && man !== 378 && man !== 357 && man !== 336 && man !== 315 && man !== 294 && man !== 273 && man !== 252 && man !== 231 && man !== 189 && man !== 168 && man !== 147 && man !== 126 && man !== 105 && man !== 84 && man !== 63 && man !== 42 && man !== 421 && man !== 0) && game) {
            box[man].classList.remove('man');
            box[man - 1].classList.add('man');
            man--;
        }
        check();
    }
    function goright() {
        if ((man !== 20 && man !== 41 && man !== 62 && man !== 83 && man !== 104 && man !== 125 && man !== 146 && man !== 167 && man !== 188 && man !== 209 && man !== 230 && man !== 251 && man !== 272 && man !== 293 && man !== 314 && man !== 335 && man !== 356 && man !== 377 && man !== 398 && man !== 419 && man !== 440) && game) {
            box[man].classList.remove('man');
            box[man + 1].classList.add('man');
            man++;
        }
        check();
    }
    function goup() {
        if (man > 20 && game) {
            box[man].classList.remove('man');
            box[man - width].classList.add('man');
            man -= width;
        }
        check();
    }
    function godown() {
        if (man < 420 && game) {
            box[man].classList.remove('man');
            box[man + width].classList.add('man');
            man += width;
        }
        check();
    }

    function keylist(e) {
        if (e.keyCode === 37 && game) {
            if (man !== 420 && man !== 399 && man !== 378 && man !== 378 && man !== 357 && man !== 336 && man !== 315 && man !== 294 && man !== 273 && man !== 252 && man !== 231 && man !== 189 && man !== 168 && man !== 147 && man !== 126 && man !== 105 && man !== 84 && man !== 63 && man !== 42 && man !== 421 && man !== 0) {
                box[man].classList.remove('man');
                box[man - 1].classList.add('man');
                man--;
            }
        }
        if (e.keyCode === 39 && game) {
            if (man !== 20 && man !== 41 && man !== 62 && man !== 83 && man !== 104 && man !== 125 && man !== 146 && man !== 167 && man !== 188 && man !== 209 && man !== 230 && man !== 251 && man !== 272 && man !== 293 && man !== 314 && man !== 335 && man !== 356 && man !== 377 && man !== 398 && man !== 419 && man !== 440) {
                box[man].classList.remove('man');
                box[man + 1].classList.add('man');
                man++;
            }
        }
        if (e.keyCode === 38 && game) {
            if (man > 20) {
                box[man].classList.remove('man');
                box[man - width].classList.add('man');
                man -= width;
            }
        }
        if (e.keyCode === 40 && game) {
            if (man < 420) {
                box[man].classList.remove('man');
                box[man + width].classList.add('man');
                man += width;
            }
        }
        // console.log(man);
        check();
    }

    box[man].classList.add('man');
    draw1();
    draw2();
    draw3();
    draw4();
    draw5();

    let gameon = setInterval(() => {
        let value1 = randomNumber(357, 362);
        let value11 = randomNumber(362, 368);
        let value12 = randomNumber(368, 372);
        let value13 = randomNumber(372, 377);
        draw1();
        box[value1].classList.remove('obs1');
        box[value1 + 21].classList.remove('obs1');
        box[value11].classList.remove('obs1');
        box[value11 + 21].classList.remove('obs1');
        box[value12].classList.remove('obs1');
        box[value12 + 21].classList.remove('obs1');
        box[value13].classList.remove('obs1');
        box[value13 + 21].classList.remove('obs1');

        let value2 = randomNumber(273, 279);
        let value21 = randomNumber(279, 285);
        let value22 = randomNumber(285, 293);
        draw2();
        box[value2].classList.remove('obs2');
        box[value2 + 21].classList.remove('obs2');
        box[value21].classList.remove('obs2');
        box[value21 + 21].classList.remove('obs2');
        box[value22].classList.remove('obs2');
        box[value22 + 21].classList.remove('obs2');

        let value3 = randomNumber(189, 199);
        let value31 = randomNumber(199, 209);
        draw3();
        box[value3].classList.remove('obs3');
        box[value3 + 21].classList.remove('obs3');
        box[value31].classList.remove('obs3');
        box[value31 + 21].classList.remove('obs3');

        let value4 = randomNumber(105, 115);
        let value41 = randomNumber(115, 125);
        draw4();
        box[value4].classList.remove('obs4');
        box[value4 + 21].classList.remove('obs4');
        box[value41].classList.remove('obs4');
        box[value41 + 21].classList.remove('obs4');

        let value5 = randomNumber(21, 41);
        draw5();
        box[value5].classList.remove('obs5');
        box[value5 + 21].classList.remove('obs5');

        if (time > 500) {
            time -= 50;
        }
    }, time);

    let timeLeft = setInterval(() => {
        left--;
        document.getElementById("time").innerHTML = `${left}`;
        if (left === 0) {
            document.getElementById('gameover').style.display = "block";
            game = false;
            clearInterval(gameon);
            clearInterval(timeLeft);
        }
    }, 1000);


    document.addEventListener('keyup', keylist);
    document.getElementById('left').addEventListener('click', goleft);
    document.getElementById('right').addEventListener('click', goright);
    document.getElementById('up').addEventListener('click', goup);
    document.getElementById('down').addEventListener('click', godown);
});