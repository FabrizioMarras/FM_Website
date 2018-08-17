/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.3.custom.min.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'droppables',
                            type: 'group',
                            rect: ['0', '75', '550', '312', 'auto', 'auto'],
                            c: [
                            {
                                id: 'basket1',
                                type: 'image',
                                rect: ['0', '6', '113', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                            },
                            {
                                id: 'basket2',
                                type: 'image',
                                rect: ['36', '112', '113', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                            },
                            {
                                id: 'basket3',
                                type: 'image',
                                rect: ['153', '206', '113', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                            },
                            {
                                id: 'basket4',
                                type: 'image',
                                rect: ['296', '212', '113', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                            },
                            {
                                id: 'basket5',
                                type: 'image',
                                rect: ['409', '112', '113', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                            },
                            {
                                id: 'basket6',
                                type: 'image',
                                rect: ['437', '0', '113', '100', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"basket2.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['296', '379', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pear",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['460', '303', 'auto', 'auto', 'auto', 'auto'],
                            text: "Apple",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['506', '186', 'auto', 'auto', 'auto', 'auto'],
                            text: "Plum",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'draggables',
                            type: 'group',
                            rect: ['138', '0', '292', '249', 'auto', 'auto'],
                            c: [
                            {
                                id: 'fruit1',
                                symbolName: 'fruit1',
                                type: 'rect',
                                rect: ['226', '96', '50', '50', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'fruit2',
                                symbolName: 'fruit2',
                                type: 'rect',
                                rect: ['121', '130', '50', '50', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'fruit3',
                                symbolName: 'fruit3',
                                type: 'rect',
                                rect: ['22', '96', '50', '50', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'fruit4',
                                symbolName: 'fruit4',
                                type: 'rect',
                                rect: ['133', '66', '50', '50', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'fruit5',
                                symbolName: 'fruit5',
                                type: 'rect',
                                rect: ['63', '200', '50', '50', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'fruit6',
                                symbolName: 'fruit6',
                                type: 'rect',
                                rect: ['171', '206', '50', '50', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['11', '178', 'auto', 'auto', 'auto', 'auto'],
                            text: "Strawberry",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['57', '287', 'auto', 'auto', 'auto', 'auto'],
                            text: "Kiwi",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['130', '373', 'auto', 'auto', 'auto', 'auto'],
                            text: "orange",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['109', '14', 'auto', 'auto', 'auto', 'auto'],
                            text: "Fill in the baskets with the right type of fruit.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(252,252,252,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(142,154,90,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "fruit1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'fraise',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fraise.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${fraise}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "fruit2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'kiwi',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/kiwi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${kiwi}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "fruit3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'orange',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/orange.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${orange}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "fruit4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'poire',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/poire.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid5",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${poire}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "fruit5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'pomme',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pomme.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${pomme}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "fruit6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 50, 50, 'auto', 'auto'],
                            id: 'prune',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/prune.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid7",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${prune}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("dragNdrop_edgeActions.js");
})("EDGE-988312621");
