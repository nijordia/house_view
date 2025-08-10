declare module 'plotly.js-dist-min' {
    interface PlotData {
        x: number[];
        y: number[];
        type: string;
        mode?: string;
        line?: {
            color: string;
        };
        hovertemplate?: string;
    }

    interface Layout {
        margin?: {
            t: number;
            b: number;
            l: number;
            r: number;
        };
        xaxis?: {
            title: string;
            showgrid: boolean;
            tickformat: string;
            tickangle: number;
            fixedrange: boolean;
        };
        yaxis?: {
            showticklabels: boolean;
            showgrid: boolean;
            fixedrange: boolean;
        };
        height?: number;
        width?: number;
    }

    interface Config {
        displayModeBar: boolean;
    }

    export function newPlot(
        container: HTMLElement,
        data: PlotData[],
        layout: Layout,
        config: Config
    ): Promise<void>;

    const Plotly: {
        newPlot: typeof newPlot;
    };
    export default Plotly;
}