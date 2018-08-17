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
            js+"jquery-1.10.2.js",
            js+"jquery-ui-1.10.4.custom.js",
            js+"jquery-ui-1.10.4.custom.min.js",
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
                            id: 'GameBoard',
                            type: 'image',
                            rect: ['-516px', '-503px', '1431px', '1432px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Snakes%26laddersBoard.jpg",'0px','0px'],
                            transform: [[],[],[],['0.26','0.26']]
                        },
                        {
                            id: 'Box01',
                            type: 'rect',
                            rect: ['127px', '47px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box02',
                            type: 'rect',
                            rect: ['211px', '47px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box03',
                            type: 'rect',
                            rect: ['291px', '47px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box04',
                            type: 'rect',
                            rect: ['291px', '94px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box05',
                            type: 'rect',
                            rect: ['291px', '139px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box06',
                            type: 'rect',
                            rect: ['211px', '139px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box07',
                            type: 'rect',
                            rect: ['127px', '139px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box08',
                            type: 'rect',
                            rect: ['48px', '139px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box09',
                            type: 'rect',
                            rect: ['48px', '187px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box10',
                            type: 'rect',
                            rect: ['48px', '235px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box11',
                            type: 'rect',
                            rect: ['127px', '235px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box12',
                            type: 'rect',
                            rect: ['211px', '235px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box13',
                            type: 'rect',
                            rect: ['291px', '235px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Box14',
                            type: 'rect',
                            rect: ['291px', '282px', '62px', '39px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'HG',
                            symbolName: 'HG',
                            type: 'rect',
                            rect: ['-37px', '-26px', '136', '128', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'HGold',
                            type: 'image',
                            rect: ['39px', '15px', '34px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"HorseGoldc2b28f.png",'0px','0px']
                        },
                        {
                            id: 'HB',
                            type: 'image',
                            rect: ['69px', '11px', '34px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"HorseBlue7c9cc1.png",'0px','0px']
                        },
                        {
                            id: 'HO',
                            type: 'image',
                            rect: ['5px', '54px', '34px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"HorseOrangeffa800.png",'0px','0px']
                        },
                        {
                            id: 'HP',
                            type: 'image',
                            rect: ['31px', '70px', '34px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"HorsePurplea36bb8.png",'0px','0px']
                        },
                        {
                            id: 'HR',
                            type: 'image',
                            rect: ['56px', '38px', '34px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"HorseREDe85151.png",'0px','0px']
                        },
                        {
                            id: 'BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['31px', '238px', '338px', '143px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgba(194,178,143,1.00)","solid"]
                        },
                        {
                            id: 'Inst01',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 01</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst02',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 02</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst03',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 03</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst04',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 04</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst05',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 05</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst06',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 06</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst07',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 07</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst08',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 08</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst09',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 09</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst10',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 10</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst11',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 11</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst12',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 12</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst13',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 13</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst14',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 12px; text-decoration: underline;\">INSTRUCTIONS:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 14</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Continue_Button',
                            display: 'none',
                            type: 'group',
                            rect: ['242px', '337px', '111', '32', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'Button',
                                type: 'rect',
                                rect: ['0px', '5px', '111px', '21px', 'auto', 'auto'],
                                fill: ["rgba(124,156,193,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Continue',
                                type: 'text',
                                rect: ['13px', '0px', '85px', '32px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​CONTINUE</p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1.00)", "100", "none", "normal", "break-word", "normal"],
                                textStyle: ["1px", "", "32px", "", "none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '400px', '413px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    labels: {
                        "Start": 0,
                        "I01": 500,
                        "I02": 1000,
                        "I03": 1500,
                        "I04": 2000,
                        "I05": 2505,
                        "I06": 3000,
                        "I07": 3500,
                        "I08": 3847,
                        "I09": 4139,
                        "I10": 4421,
                        "I11": 4823,
                        "I12": 5250,
                        "I13": 5634,
                        "I14": 6071
                    },
                    data: [
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            6071,
                            0,
                            "linear",
                            "${Inst14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            2505,
                            0,
                            "linear",
                            "${Inst05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Inst05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            500,
                            0,
                            "linear",
                            "${BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${HG}",
                            '0.25',
                            '0.25'
                        ],
                        [
                            "eid110",
                            "left",
                            0,
                            0,
                            "linear",
                            "${HG}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            4139,
                            0,
                            "linear",
                            "${Inst09}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            4421,
                            0,
                            "linear",
                            "${Inst09}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Inst06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Inst06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "top",
                            0,
                            0,
                            "linear",
                            "${HG}",
                            '-26px',
                            '-26px'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Inst07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            3847,
                            0,
                            "linear",
                            "${Inst07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${HG}",
                            '0.25',
                            '0.25'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Inst12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            5634,
                            0,
                            "linear",
                            "${Inst12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            5634,
                            0,
                            "linear",
                            "${Inst13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            6071,
                            0,
                            "linear",
                            "${Inst13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Inst03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Inst03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Inst03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Inst03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            4823,
                            0,
                            "linear",
                            "${Inst11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Inst11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Continue_Button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Inst02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Inst02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Inst02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Inst01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Inst01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            4421,
                            0,
                            "linear",
                            "${Inst10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            4823,
                            0,
                            "linear",
                            "${Inst10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst08}",
                            'none',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            3847,
                            0,
                            "linear",
                            "${Inst08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            4139,
                            0,
                            "linear",
                            "${Inst08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Inst04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            2505,
                            0,
                            "linear",
                            "${Inst04}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "HG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'HorseGreen4abc6d',
                            type: 'image',
                            rect: ['0px', '0px', '136px', '128px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/HorseGreen4abc6d.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '136px', '128px']
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
            "HGold": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'HorseGoldc2b28f',
                            rect: ['0px', '0px', '104px', '128px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/HorseGoldc2b28f.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Snakes%20and%20Ladders_Template_edgeActions.js");
})("EDGE-36316926");
