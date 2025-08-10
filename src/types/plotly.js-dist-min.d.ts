declare module 'plotly.js-dist-min' {
    interface PlotData {
        x: number[];
        y: number[];
        type: string;
        mode?: string;
        line?: {
            color: string;
            width?: number;
        };
        fill?: string;
        fillcolor?: string;
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
            title?: { 
                text: string; 
                font?: { family: string; size: number; color: string; }
            };
            showgrid?: boolean;
            gridcolor?: string;
            tickformat?: string;
            tickfont?: { family: string; size: number; color: string; };
            fixedrange?: boolean;
        };
        yaxis?: {
            title?: { 
                text: string; 
                font?: { family: string; size: number; color: string; }
            };
            showticklabels?: boolean;
            showgrid?: boolean;
            gridcolor?: string;
            tickformat?: string;
            tick0?: number;
            dtick?: number;
            tickfont?: { family: string; size: number; color: string; };
            fixedrange?: boolean;
        };
        plot_bgcolor?: string;
        paper_bgcolor?: string;
        height?: number;
        font?: { family: string; };
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