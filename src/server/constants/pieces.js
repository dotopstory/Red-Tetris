const tetI = [
    [
        0,0,0,0,
        1,1,1,1,
        0,0,0,0,
        0,0,0,0,
    ],
    [
        0,0,1,0,
        0,0,1,0,
        0,0,1,0,
        0,0,1,0,
    ],
    [
        0,0,0,0,
        0,0,0,0,
        1,1,1,1,
        0,0,0,0,
    ],
    [
        0,1,0,0,
        0,1,0,0,
        0,1,0,0,
        0,1,0,0,
    ],
];
const tetO = [
    [
        1,1,
        1,1,
    ],
];
const tetT = [
    [
        0,1,0,
        1,1,1,
        0,0,0,
    ],
    [
        0,1,0,
        0,1,1,
        0,1,0,
    ],
    [
        0,0,0,
        1,1,1,
        0,1,0,
    ],
    [
        0,1,0,
        1,1,0,
        0,1,0,
    ],
];
const tetJ = [
    [
        1,0,0,
        1,1,1,
        0,0,0,
    ],
    [
        0,1,1,
        0,1,0,
        0,1,0,
    ],
    [
        0,0,0,
        1,1,1,
        0,0,1,
    ],
    [
        0,1,0,
        0,1,0,
        1,1,0,
    ],
];
const tetL = [
    [
        0,0,1,
        1,1,1,
        0,0,0,
    ],
    [
        0,1,0,
        0,1,0,
        0,1,1,
    ],
    [
        0,0,0,
        1,1,1,
        1,0,0,
    ],
    [
        1,1,0,
        0,1,0,
        0,1,0,
    ],
];
const tetZ = [
    [
        1,1,0,
        0,1,1,
        0,0,0,
    ],
    [
        0,0,1,
        0,1,1,
        0,1,0,
    ],
    [
        0,0,0,
        1,1,0,
        0,1,1,
    ],
    [
        0,1,0,
        1,1,0,
        1,0,0,
    ],
];
const tetS = [
    [
        0,1,1,
        1,1,0,
        0,0,0,
    ],
    [
        0,1,0,
        0,1,1,
        0,0,1,
    ],
    [
        0,0,0,
        0,1,1,
        1,1,0,
    ],
    [
        1,0,0,
        1,1,0,
        0,1,0,
    ],
];

export const pieces = [
    tetI,
    tetO,
    tetT,
    tetL,
    tetJ,
    tetZ,
    tetS,
];