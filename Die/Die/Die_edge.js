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
                            id: 'dicejpeg001',
                            type: 'image',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dicejpeg.001.jpeg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'dicejpeg002',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dicejpeg.002.jpeg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'dicejpeg003',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dicejpeg.003.jpeg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'dicejpeg004',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dicejpeg.004.jpeg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'dicejpeg005',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dicejpeg.005.jpeg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'dicejpeg006',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dicejpeg.006.jpeg",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'shade',
                            type: 'rect',
                            rect: ['100px', '0px', '100px', '100px', 'auto', 'auto'],
                            opacity: '0.34959349593496',
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'Play_btn',
                            type: 'rect',
                            rect: ['13px', '30px', '80px', '40px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'Roll',
                            type: 'text',
                            rect: ['13px', '32px', '80px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-size: 12px; font-weight: 400; letter-spacing: 1px;\">ROLL</span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"],
                            textStyle: ["1px", "", "35px", "", ""]
                        },
                        {
                            id: 'Stop_btn',
                            type: 'rect',
                            rect: ['207px', '30px', '80px', '40px', 'auto', 'auto'],
                            fill: ["rgba(124,156,193,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Stop',
                            type: 'text',
                            rect: ['207px', '30px', '80px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-size: 12px;\">STOP</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["1px", "", "36px", "", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '100px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "One": 969
                    },
                    data: [
                        [
                            "eid99",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${dicejpeg004}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            1377,
                            0,
                            "linear",
                            "${dicejpeg004}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${dicejpeg004}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${dicejpeg005}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${dicejpeg005}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            1626,
                            0,
                            "linear",
                            "${dicejpeg005}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${dicejpeg006}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            1626,
                            0,
                            "linear",
                            "${dicejpeg006}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${dicejpeg002}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            1125,
                            0,
                            "linear",
                            "${dicejpeg002}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${dicejpeg002}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${dicejpeg003}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${dicejpeg003}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            1377,
                            0,
                            "linear",
                            "${dicejpeg003}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Die_edgeActions.js");
})("EDGE-6039913");
