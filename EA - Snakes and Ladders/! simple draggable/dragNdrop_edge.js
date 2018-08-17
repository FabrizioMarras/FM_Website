/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'droppables',
                type: 'group',
                rect: ['0px', '75px','550','312','auto', 'auto'],
                c: [
                {
                    id: 'basket1',
                    type: 'image',
                    rect: ['0px', '6px','113px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                },
                {
                    id: 'basket2',
                    type: 'image',
                    rect: ['36px', '112px','113px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                },
                {
                    id: 'basket3',
                    type: 'image',
                    rect: ['153px', '206px','113px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                },
                {
                    id: 'basket4',
                    type: 'image',
                    rect: ['296px', '212px','113px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                },
                {
                    id: 'basket5',
                    type: 'image',
                    rect: ['409px', '112px','113px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                },
                {
                    id: 'basket6',
                    type: 'image',
                    rect: ['437px', '0px','113px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                }]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['296px', '379px','auto','auto','auto', 'auto'],
                text: "Pear",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['460', '303','auto','auto','auto', 'auto'],
                text: "Apple",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['506px', '186px','auto','auto','auto', 'auto'],
                text: "Plum",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'draggables',
                type: 'group',
                rect: ['138px', '0px','292px','249px','auto', 'auto'],
                c: [
                {
                    id: 'fruit1',
                    type: 'rect',
                    rect: ['226', '96','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'fruit2',
                    type: 'rect',
                    rect: ['121', '130','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'fruit3',
                    type: 'rect',
                    rect: ['22', '96','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'fruit4',
                    type: 'rect',
                    rect: ['133', '66','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'fruit5',
                    type: 'rect',
                    rect: ['63', '200','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'fruit6',
                    type: 'rect',
                    rect: ['171', '206','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                }]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['11px', '178px','auto','auto','auto', 'auto'],
                text: "Strawberry",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['57', '287px','auto','auto','auto', 'auto'],
                text: "Kiwi",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['130px', '373px','auto','auto','auto', 'auto'],
                text: "orange",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['109px', '14px','auto','auto','auto', 'auto'],
                text: "Fill in the baskets with the right type of fruit.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(252,252,252,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'fruit6',
                symbolName: 'fruit6',
                autoPlay: {

                }
            },
            {
                id: 'fruit5',
                symbolName: 'fruit5',
                autoPlay: {

                }
            },
            {
                id: 'fruit4',
                symbolName: 'fruit4',
                autoPlay: {

                }
            },
            {
                id: 'fruit1',
                symbolName: 'fruit1',
                autoPlay: {

                }
            },
            {
                id: 'fruit2',
                symbolName: 'fruit2',
                autoPlay: {

                }
            },
            {
                id: 'fruit3',
                symbolName: 'fruit3',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '186px'],
                ["style", "left", '506px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text3}": [
                ["style", "top", '287px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_fruit4}": [
                ["style", "cursor", 'pointer']
            ],
            "${_basket1}": [
                ["style", "height", '100px'],
                ["style", "top", '6px'],
                ["style", "left", '0px'],
                ["style", "width", '113px']
            ],
            "${_fruit6}": [
                ["style", "cursor", 'pointer']
            ],
            "${_basket5}": [
                ["style", "height", '100px'],
                ["style", "top", '112px'],
                ["style", "left", '409px'],
                ["style", "width", '113px']
            ],
            "${_fruit1}": [
                ["style", "cursor", 'pointer']
            ],
            "${_basket2}": [
                ["style", "height", '100px'],
                ["style", "top", '112px'],
                ["style", "left", '36px'],
                ["style", "width", '113px']
            ],
            "${_Text4}": [
                ["style", "top", '373px'],
                ["style", "left", '130px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_fruit5}": [
                ["style", "cursor", 'pointer']
            ],
            "${_basket3}": [
                ["style", "top", '206px'],
                ["style", "height", '100px'],
                ["style", "left", '153px'],
                ["style", "width", '113px']
            ],
            "${_droppables}": [
                ["style", "top", '75px'],
                ["style", "left", '0px']
            ],
            "${_fruit3}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(142,154,90,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '550px']
            ],
            "${_Text6}": [
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_basket4}": [
                ["style", "top", '212px'],
                ["style", "height", '100px'],
                ["style", "left", '296px'],
                ["style", "width", '113px']
            ],
            "${_basket6}": [
                ["style", "top", '0px'],
                ["style", "height", '100px'],
                ["style", "left", '437px'],
                ["style", "width", '113px']
            ],
            "${_fruit2}": [
                ["style", "cursor", 'pointer']
            ],
            "${_draggables}": [
                ["style", "top", '0px'],
                ["style", "height", '249px'],
                ["style", "left", '138px'],
                ["style", "width", '292px']
            ],
            "${_Text5}": [
                ["style", "top", '379px'],
                ["style", "left", '296px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text2}": [
                ["style", "top", '178px'],
                ["style", "left", '11px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text8}": [
                ["color", "color", 'rgba(252,252,252,1.00)'],
                ["style", "top", '14px'],
                ["style", "left", '109px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"fruit1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'fraise',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fraise.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fraise}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "transform", "${_fraise}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"fruit2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'kiwi',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/kiwi.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_kiwi}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid3", tween: [ "transform", "${_kiwi}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"fruit3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'orange',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/orange.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_orange}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "transform", "${_orange}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"fruit4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'poire',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/poire.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_poire}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid5", tween: [ "transform", "${_poire}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"fruit5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'pomme',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pomme.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ],
            "${_pomme}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid6", tween: [ "transform", "${_pomme}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"fruit6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'prune',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/prune.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_prune}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid7", tween: [ "transform", "${_prune}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-988312621");
