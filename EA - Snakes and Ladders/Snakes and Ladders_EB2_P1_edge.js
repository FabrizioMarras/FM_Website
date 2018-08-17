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
                            rect: ['-536px', '-503px', '1431px', '1432px', 'auto', 'auto'],
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
                            id: 'Inst01BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst01',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; font-weight: 100; color: rgb(255, 255, 255); letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\">Describe yourself, your job, and your current tasks.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "100", "none", "", "break-word", "normal"],
                            textStyle: ["0px", "", "", "", ""]
                        },
                        {
                            id: 'Inst02BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst02',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; font-weight: 100; color: rgb(255, 255, 255); letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\">Name one of the skills needed to be a good leader.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst03BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst03',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; font-weight: 100; color: rgb(255, 255, 255); letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\">What does the term ‘boat and motor’ mean in a business context?</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "0px", "", "", ""]
                        },
                        {
                            id: 'Inst04BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst04',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; font-weight: 100; letter-spacing: 1px; color: rgb(255, 255, 255);\">INSTRUCTIONS</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\">The customer looked angry. Is the word ‘angry’ an adjective or an adverb?</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\"></span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["0", "", "", "", ""]
                        },
                        {
                            id: 'Inst05BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst05',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\">Describe what motivates you in your job.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst06BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst06',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 16px; text-decoration: underline;\"></span><span style=\"font-size: 10px;\">What, in your opinion, is &nbsp;the best distribution channel for beer.</span></p><p style=\"margin: 0px; line-height: 10px;\"><span style=\"font-size: 10px;\">​</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst07BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst07',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 07</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst08BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst08',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; font-weight: 100; color: rgb(255, 255, 255); letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 08</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst09BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst09',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 09</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst10BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst10',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 10</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst11BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst11',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; font-weight: 100; color: rgb(255, 255, 255); letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 11</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst12BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst12',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 12</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst13BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst13',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 13</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Inst14BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['47px', '259px', '306px', '21px', 'auto', 'auto'],
                            fill: ["rgba(194,178,143,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Inst14',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '252px', '305px', '111px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​&nbsp;<span style=\"font-size: 10px; color: rgb(255, 255, 255); font-weight: 100; letter-spacing: 1px;\">INSTRUCTIONS</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 16px; text-decoration: underline;\">​</span><span style=\"font-size: 10px;\">Sentence 14</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Continue_Button',
                            display: 'none',
                            type: 'group',
                            rect: ['242px', '337px', '111px', '32', 'auto', 'auto'],
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
                            rect: ['null', 'null', '350', '413px', 'auto', 'auto'],
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
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst05BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            2505,
                            0,
                            "linear",
                            "${Inst05BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Inst05BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "letter-spacing",
                            640,
                            0,
                            "linear",
                            "${Inst01}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst12BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Inst12BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            5634,
                            0,
                            "linear",
                            "${Inst12BG}",
                            'block',
                            'none'
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
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst02BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Inst02BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Inst02BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst04BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Inst04BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            2505,
                            0,
                            "linear",
                            "${Inst04BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst01BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Inst01BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Inst01BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst14BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            6071,
                            0,
                            "linear",
                            "${Inst14BG}",
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
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst03BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Inst03BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Inst03BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst07BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Inst07BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            3847,
                            0,
                            "linear",
                            "${Inst07BG}",
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
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst13BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            5634,
                            0,
                            "linear",
                            "${Inst13BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            6071,
                            0,
                            "linear",
                            "${Inst13BG}",
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
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst10BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            4421,
                            0,
                            "linear",
                            "${Inst10BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            4823,
                            0,
                            "linear",
                            "${Inst10BG}",
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
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst06BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Inst06BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Inst06BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst11BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            4823,
                            0,
                            "linear",
                            "${Inst11BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Inst11BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst09BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            4139,
                            0,
                            "linear",
                            "${Inst09BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            4421,
                            0,
                            "linear",
                            "${Inst09BG}",
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
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Inst08BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            3847,
                            0,
                            "linear",
                            "${Inst08BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            4139,
                            0,
                            "linear",
                            "${Inst08BG}",
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
                            rect: ['0px', '0px', '136px', '128px', 'auto', 'auto'],
                            id: 'HorseGreen4abc6d',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/HorseGreen4abc6d.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '136px', '128px']
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
                            rect: ['0px', '0px', '104px', '128px', 'auto', 'auto'],
                            id: 'HorseGoldc2b28f',
                            type: 'image',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Snakes%20and%20Ladders_EB2_P1_edgeActions.js");
})("EDGE-36316926");
