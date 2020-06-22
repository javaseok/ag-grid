import palette from "../palettes";
import { deepMerge, getValue } from "../../util/object";

export class ChartTheme {
    readonly mergedDefaults: any;
    readonly defaults: any = {};
    static readonly baseDefaults: any = (() => {
        const defaults: any = {
            cartesian: {
                width: 600,
                height: 300,
                background: {
                    visible: true,
                    fill: 'white'
                },
                padding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                },
                title: {
                    enabled: true,
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    },
                    text: 'Title',
                    fontStyle: undefined,
                    fontWeight: 'bold',
                    fontSize: 14,
                    fontFamily: 'Verdana, sans-serif',
                    color: 'rgba(70, 70, 70, 1)'
                },
                subtitle: {
                    enabled: true,
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    },
                    text: 'Subtitle',
                    fontStyle: undefined,
                    fontWeight: undefined,
                    fontSize: 12,
                    fontFamily: 'Verdana, sans-serif',
                    color: 'rgba(140, 140, 140, 1)'
                },
                legend: {
                    enabled: true,
                    position: 'right',
                    spacing: 20,
                    item: {
                        paddingX: 16,
                        paddingY: 8,
                        marker: {
                            shape: undefined,
                            size: 15,
                            strokeWidth: 1,
                            padding: 8
                        },
                        label: {
                            color: 'black',
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                axes: {
                    number: {
                        title: {
                            enabled: true,
                            padding: {
                                top: 10,
                                right: 10,
                                bottom: 10,
                                left: 10
                            },
                            text: 'Axis Title',
                            fontStyle: undefined,
                            fontWeight: 'bold',
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            color: 'rgba(70, 70, 70, 1)'
                        },
                        label: {
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            padding: 5,
                            rotation: 0,
                            color: 'rgba(87, 87, 87, 1)',
                            formatter: undefined
                        },
                        line: {
                            width: 1,
                            color: 'rgba(195, 195, 195, 1)'
                        },
                        tick: {
                            width: 1,
                            size: 6,
                            color: 'rgba(195, 195, 195, 1)',
                            count: 10
                        },
                        gridStyle: [{
                            stroke: 'rgba(219, 219, 219, 1)',
                            lineDash: [4, 2]
                        }]
                    },
                    category: {
                        title: {
                            enabled: true,
                            padding: {
                                top: 10,
                                right: 10,
                                bottom: 10,
                                left: 10
                            },
                            text: 'Axis Title',
                            fontStyle: undefined,
                            fontWeight: 'bold',
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            color: 'rgba(70, 70, 70, 1)'
                        },
                        label: {
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            padding: 5,
                            rotation: 0,
                            color: 'rgba(87, 87, 87, 1)',
                            formatter: undefined
                        },
                        line: {
                            width: 1,
                            color: 'rgba(195, 195, 195, 1)'
                        },
                        tick: {
                            width: 1,
                            size: 6,
                            color: 'rgba(195, 195, 195, 1)',
                            count: 10
                        },
                        gridStyle: [{
                            stroke: 'rgba(219, 219, 219, 1)',
                            lineDash: [4, 2]
                        }]
                    },
                    time: {
                        title: {
                            enabled: true,
                            padding: {
                                top: 10,
                                right: 10,
                                bottom: 10,
                                left: 10
                            },
                            text: 'Axis Title',
                            fontStyle: undefined,
                            fontWeight: 'bold',
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            color: 'rgba(70, 70, 70, 1)'
                        },
                        label: {
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            padding: 5,
                            rotation: 0,
                            color: 'rgba(87, 87, 87, 1)',
                            formatter: undefined
                        },
                        line: {
                            width: 1,
                            color: 'rgba(195, 195, 195, 1)'
                        },
                        tick: {
                            width: 1,
                            size: 6,
                            color: 'rgba(195, 195, 195, 1)',
                            count: 10
                        },
                        gridStyle: [{
                            stroke: 'rgba(219, 219, 219, 1)',
                            lineDash: [4, 2]
                        }]
                    }
                },
                series: {
                    column: {
                        visible: true,
                        showInLegend: true,
                        flipXY: false,
                        fills: palette.fills,
                        strokes: palette.strokes,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        xKey: '',
                        xName: '',
                        yKeys: [],
                        yNames: [],
                        grouped: false,
                        normalizedTo: undefined,
                        strokeWidth: 1,
                        highlightStyle: {
                            fill: 'yellow'
                        },
                        label: {
                            enabled: false,
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            color: 'rgba(70, 70, 70, 1)'
                        },
                        shadow: undefined,
                        // shadow: {
                        //     enabled: true,
                        //     color: 'rgba(0, 0, 0, 0.5)',
                        //     xOffset: 0,
                        //     yOffset: 0,
                        //     blur: 5
                        // }
                    },
                    bar: {
                        visible: true,
                        showInLegend: true,
                        flipXY: true,
                        fills: palette.fills,
                        strokes: palette.strokes,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        xKey: '',
                        xName: '',
                        yKeys: [],
                        yNames: [],
                        grouped: false,
                        normalizedTo: undefined,
                        strokeWidth: 1,
                        highlightStyle: {
                            fill: 'yellow'
                        },
                        label: {
                            enabled: false,
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            color: 'rgba(70, 70, 70, 1)'
                        },
                        shadow: undefined,
                        // shadow: {
                        //     enabled: true,
                        //     color: 'rgba(0, 0, 0, 0.5)',
                        //     xOffset: 0,
                        //     yOffset: 0,
                        //     blur: 5
                        // }
                    },
                    line: {
                        visible: true,
                        showInLegend: true,
                        title: undefined,
                        xKey: '',
                        xName: '',
                        yKey: '',
                        yName: '',
                        stroke: palette.fills[0],
                        strokeWidth: 2,
                        strokeOpacity: 1,
                        tooltipRenderer: undefined,
                        highlightStyle: {
                            fill: 'yellow'
                        },
                        marker: {
                            enabled: true,
                            shape: 'circle',
                            size: 8,
                            minSize: 8,
                            fill: palette.fills[0],
                            stroke: palette.strokes[0],
                            strokeWidth: 1,
                            formatter: undefined
                        }
                    },
                    scatter: {
                        visible: true,
                        showInLegend: true,
                        title: undefined,
                        xKey: '',
                        yKey: '',
                        sizeKey: undefined,
                        labelKey: undefined,
                        xName: '',
                        yName: '',
                        sizeName: 'Size',
                        labelName: 'Label',
                        fill: palette.fills[0],
                        stroke: palette.strokes[0],
                        strokeWidth: 2,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        tooltipRenderer: undefined,
                        highlightStyle: {
                            fill: 'yellow'
                        },
                        marker: {
                            enabled: true,
                            shape: 'circle',
                            size: 8,
                            minSize: 8,
                            fill: palette.fills[0],
                            stroke: palette.strokes[0],
                            strokeWidth: 1,
                            formatter: undefined
                        }
                    },
                    area: {
                        visible: true,
                        showInLegend: true,
                        title: undefined,
                        xKey: '',
                        xName: '',
                        yKeys: [],
                        yNames: [],
                        normalizedTo: undefined,
                        fills: palette.fills,
                        strokes: palette.strokes,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        strokeWidth: 2,
                        shadow: undefined,
                        tooltipRenderer: undefined,
                        highlightStyle: {
                            fill: 'yellow'
                        },
                        marker: {
                            enabled: true,
                            shape: 'circle',
                            size: 8,
                            minSize: 8,
                            fill: palette.fills[0],
                            stroke: palette.strokes[0],
                            strokeWidth: 1,
                            formatter: undefined
                        }
                    }
                },
                navigator: {
                    enabled: false,
                    height: 30,
                    min: 0,
                    max: 1,
                    mask: {
                        fill: '#999999',
                        stroke: '#999999',
                        strokeWidth: 1,
                        fillOpacity: 0.2
                    },
                    minHandle: {
                        fill: '#f2f2f2',
                        stroke: '#999999',
                        strokeWidth: 1,
                        width: 8,
                        height: 16,
                        gripLineGap: 2,
                        gripLineLength: 8
                    },
                    maxHandle: {
                        fill: '#f2f2f2',
                        stroke: '#999999',
                        strokeWidth: 1,
                        width: 8,
                        height: 16,
                        gripLineGap: 2,
                        gripLineLength: 8
                    }
                }
            },
            polar: {
                width: 600,
                height: 300,
                background: {
                    visible: true,
                    fill: 'white'
                },
                padding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                },
                title: {
                    enabled: true,
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    },
                    text: 'Title',
                    fontStyle: undefined,
                    fontWeight: 'bold',
                    fontSize: 14,
                    fontFamily: 'Verdana, sans-serif',
                    color: 'rgba(70, 70, 70, 1)'
                },
                subtitle: {
                    enabled: true,
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    },
                    text: 'Subtitle',
                    fontStyle: undefined,
                    fontWeight: undefined,
                    fontSize: 12,
                    fontFamily: 'Verdana, sans-serif',
                    color: 'rgba(140, 140, 140, 1)'
                },
                legend: {
                    enabled: true,
                    position: 'right',
                    spacing: 20,
                    item: {
                        paddingX: 16,
                        paddingY: 8,
                        marker: {
                            shape: undefined,
                            size: 15,
                            strokeWidth: 1,
                            padding: 8
                        },
                        label: {
                            color: 'black',
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                series: {
                    pie: {
                        visible: true,
                        showInLegend: true,
                        title: undefined, // Caption
                        angleKey: '',
                        angleName: '',
                        radiusKey: undefined,
                        radiusName: undefined,
                        labelKey: undefined,
                        labelName: undefined,
                        label: {
                            enabled: true,
                            fontStyle: undefined,
                            fontWeight: undefined,
                            fontSize: 12,
                            fontFamily: 'Verdana, sans-serif',
                            color: 'rgba(70, 70, 70, 1)',
                            offset: 3,
                            minAngle: 20
                        },
                        callout: {
                            colors: palette.strokes,
                            length: 10,
                            strokeWidth: 1
                        },
                        fills: palette.fills,
                        strokes: palette.strokes,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1,
                        rotation: 0,
                        outerRadiusOffset: 0,
                        innerRadiusOffset: 0,
                        highlightStyle: {
                            fill: 'yellow'
                        },
                        shadow: undefined
                    }
                }
            }
        };

        const typeToAliases: { [key in string]: string[] } = {
            cartesian: ['line', 'area', 'bar', 'column'],
            polar: ['pie']
        };
        for (const type in typeToAliases) {
            typeToAliases[type].forEach(alias => {
                defaults[alias] = defaults[type];
            });
        }

        return defaults;
    })();

    constructor() {
        this.mergedDefaults = deepMerge(deepMerge({}, ChartTheme.baseDefaults), this.defaults);
    }

    getDefaults(path: string): any {
        return getValue(this.mergedDefaults, path);
    }
}