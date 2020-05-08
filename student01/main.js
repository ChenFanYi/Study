
//定义按键
var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_POTATE = 38;
var KEY_ACCELERATE = 40;
var KEY_PAUSE = 13;
var KEY_ONE_STOP = 32;

//定义地图大小
var MAP_R = 4;
var MAP_C = 4;
//定义方块大小
var BLOCK_R = 4;
var BLOCK_C = 4;

//定义各种方块
var BLOCKS = [
    //定义I
    [
        [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ],
    //定义L
    [
        [
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    //定义J
    [
        [
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
        ,
        [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    //定义O
    [
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    //定义S
    [
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ]
    ],
    //定义T
    [
        [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ],
    //定义Z
    [
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ]

];
var map = [];
for (var r = 0; r < MAP_R; r++) {
    map.push([]);
    for (let c = 0; c < MAP_C; c++) {
        map[r][c] = {};
        map[r][c].b = 0;

    }
}
var colors = ['darkorange', 'darkviolet', 'mediumblue', 'red', 'lightseagreen', 'yellow', 'lime'];
var enableShadow = true;
var shadow = {};
var currR, currC;
var currType;
var currDir = 0;
var pause = false;

//可以楼下
function canFall(currR, currC) {
    for (let c = 0; c < BLOCK_C; c++) {
        for (let r = BLOCK_R - 1; r >= 0; r--) {
            if (!BLOCKS[currType][currDir[r][c]])
                continue;
            if (currR + r + 1 > MAP_R - 1)
                return false;
            if (map[currR + r + 1][currC + c].b)
                return false;
        }

    }
    return true;
}
//寻找方块的投影坐标
function makeShadow() {
    shadow.r = currR;
    shadow.c = currC;
    while (canFall(shadow.r, shadow.c)) {
        shadow.r++;
    }
}
//落下状态设置到map
function fall(block) {
    for (let r = 0; r < BLOCK_R; r++) {
        for (let c = 0; c < BLOCK_C; c++) {
            if (BLOCKS[currType][currDir][r][c]) {
                map[currR + r][currC + c].b = BLOCKS[currType][currDir][r][c];
                map[currR + r][currC + c].c = currType;
            }
        }

    }
}

//可以左移
function canLeft() {
    for (let r = 0; r < BLOCK_R; r++) {
        for (let c = 0; c < BLOCK_C; c++) {
            if (!BLOCKS[currType][currDir][r][c])
                continue;
            if (currC + c - 1 < 0)
                return false;
            if (map[currR + r][currC + c + 1].b)
                return false;
        }
    }
    return true;
}
//可以右移
function canRight() {
    for (var r = 0; r < BLOCK_R; r++)
        for (var c = BLOCK_C - 1; c >= 0; c--) {
            if (!BLOCKS[currType][currDir][r][c])
                continue;
            if (currC + c + 1 > MAP_C - 1)
                return false;
            if (map[currR + r][currC + c + 1].b)
                return false;
        }
    return true;
}

//可以旋转
function canRotate() {
    return true;
}
//获得满行的行位置
function checkFullRows() {
    let rows = []
    let full;
    for (let r = currR; r < MAP_R; r++) {
        full = map[r][c].b;
        if (full)
            rows.push(r);
    }
    return rows;
}
function showPop(rows) {
    for (let i = 0; i < rows.length; i++) {
        for (let c = 0; c = MAP_C; c++) {
            $(rows[i] + '-' + c).style.backgroundColor = 'transparent';
        }
    }
}

//在map消除指定行位置的行
function popRows(rows) {
    for (let i = 0; i < rows.length; i++) {
        for (let r = rows[i] - 1; r >= 0; r--) {
            for (let c = 0; c < MAP_C; c++) {
                map[r + 1][c].b = map[r][c].b;
                map[r + 1][c].c = map[r][c].c;
            }
        }
    }
}
document.onkeydown = function (event) {
    var keyCode = window.event ? event.keyCode : event.which;

    if (keyCode == KEY_LEFT || keyCode == KEY_RIGHT) {
        easeBlock();
        if (enableShadow)
            easeShadow();
        if (keyCode == KEY_LEFT) {
            if (canLeft())
                --currC;
        } else if (keyCode == KEY_RIGHT) {
            if (canRight())
                ++currC;
        }
        drawBlock();
        if (enableShadow) {
            makeShadow();
            drawShadow();
        }
    } else if (keyCode == KEY_ROTATE) {
        if (canRotate()) {
            easeBlock();
            if (enableShadow)
                easeShadow();
            currDir = [1, 2, 3, 0][currDir];
            drawBlock();
            if (enableShadow) {
                makeShadow();
                drawShadow();
            }
        }
    } else if (keyCode == KEY_ACCELERATE) {
        loop();
    } else if (keyCode == KEY_PAUSE) {
        pause = !pause;
        if (pause)
            clearInterval(timer);
        else
            timer = setInterval(loop, 300);
    } else if (keyCode == KEY_ONE_STOP) {
        easeBlock();
        makeShadow();
        currR = shadow.r;
        currC = shadow.c;
        drawBlock();
    }

    //printMapState();
}
function nextBlock() {
    function randInt(n, m) {
        return Math.floor(Math.random() * (m - n)) + n;
    }

    currR = 0;
    currC = MAP_C / 2 - BLOCK_C / 2;
    currType = randInt(0, BLOCKS.length);
    currDir = randInt(0, 4);
}

function printMapState() {
    var debug = $('debug');
    var html = '';
    for (var r = 0; r < MAP_R; r++) {
        for (var c = 0; c < MAP_C; c++)
            html += map[r][c].b;
        html += '</br>';
    }
    debug.innerHTML = html;
}

onload = function () {
    init();
    nextBlock();
    drawBlock();
    makeShadow();
    drawShadow();

    timer = setInterval(loop, 300);
};

function loop() {
    if (canFall(currR, currC)) {
        easeBlock();
        ++currR;
        drawBlock();
    } else {
        fall();
        if (currR == 0) {
            drawBlock();
            clearInterval(timer);
            alert('Game Over');
            return;
        }
        var rows = checkFullRows();
        if (rows.length > 0) {
            showPop(rows);
            popRows(rows);
            setTimeout(function () {
                drawMap();
            }, 100);
        }
        if (enableShadow)
            easeShadow();
        nextBlock();
        drawBlock();
        if (enableShadow) {
            makeShadow();
            drawShadow();
        }
    }
}
function drawMap() {
    for (var r = 0; r < MAP_R; r++)
        for (var c = 0; c < MAP_C; c++) {
            var div = $(r + '-' + c);
            if (map[r][c].b) {
                div.style.backgroundColor = colors[map[r][c].c];
            } else {
                div.style.backgroundColor = 'transparent';
            }
        }
}

function drawBlock() {
    for (var r = 0; r < BLOCK_R; r++)
        for (var c = 0; c < BLOCK_C; c++) {
            if (BLOCKS[currType][currDir][r][c]) {
                var div = $((currR + r) + '-' + (currC + c));
                div.style.backgroundColor = colors[currType];
                div.style.border = '1px solid ' + colors[currType];
            }
        }
}


function easeBlock() {
    for (var r = 0; r < BLOCK_R; r++)
        for (var c = 0; c < BLOCK_C; c++) {
            if (BLOCKS[currType][currDir][r][c]) {
                var div = $((currR + r) + '-' + (currC + c));
                div.style.backgroundColor = 'transparent';
                div.style.border = '1px solid ' + 'transparent';
            }
        }
}
function drawShadow() {
    for (var r = 0; r < BLOCK_R; r++)
        for (var c = 0; c < BLOCK_C; c++) {
            if (BLOCKS[currType][currDir][r][c]) {
                var div = $((shadow.r + r) + '-' + (shadow.c + c));
                div.style.border = '1px solid blue';
            }
        }
}
function easeShadow() {
    for (var r = 0; r < BLOCK_R; r++)
        for (var c = 0; c < BLOCK_C; c++) {
            if (BLOCKS[currType][currDir][r][c]) {
                var div = $((shadow.r + r) + '-' + (shadow.c + c));
                div.style.border = '1px solid ' + 'transparent';
            }
        }
}

function init() {
    var size = 28;

    var space = $('space');
    space.style.position = 'relative';
    space.style.width = size * MAP_C + (MAP_C + 1) * 3 + 1 + 'px';
    space.style.height = size * MAP_R + (MAP_R + 1) * 3 + 1 + 'px';
    //space.style.backgroundColor = 'lavender';
    space.style.border = '2px solid black';

    for (var r = 0; r < MAP_R; r++) {
        for (var c = 0; c < MAP_C; c++) {
            var div = document.createElement('div');
            div.id = r + '-' + c;
            div.style.position = 'absolute';
            div.style.top = size * r + (r + 1) * 3 + 'px';
            div.style.left = size * c + (c + 1) * 3 + 'px';
            div.style.width = size + 'px';
            div.style.height = size + 'px';
            space.appendChild(div);
        }
    }
}
function $(id) {
    return document.getElementById(id);
}