import {Bug} from '../dto/bug'

export abstract class Engine {
    private _name: string;
    private _output_path: string;
    private _analyze_cmd: string;
    private _build_cmd: string = "";
    private _clean_build_cmd: string = "";
    protected _report_file: string = "";

    abstract get_analysis_cmd(): string[];
    abstract get_incremental_cmd(): string[];
    abstract get_file_bugs_map(): Map<string, Bug[]>;
    abstract get_patch_cmd(key: string): string[];
    abstract make_patch(key: string): void;
    abstract apply_patch(src: string, patched: string): void;
    abstract get_error_key(bug: Bug): string;
    
    constructor(name:string, analyze_cmd:string, output_path:string){
        this._name = name;
        this._analyze_cmd = analyze_cmd;
        this._output_path = output_path;
    }
    
    public get name() {
        return this._name;
    }

    public get output_path(): string {
        return this._output_path;
    }

    public set output_path(value: string) {
        this._output_path = value;
    }

    public get analyze_cmd(): string {
        return this._analyze_cmd;
    }

    public get build_cmd(): string {
        return this._build_cmd;
    }
    public set build_cmd(value: string) {
        this._build_cmd = value;
    }

    public get clean_build_cmd(): string {
        return this._clean_build_cmd;
    }
    public set clean_build_cmd(value: string) {
        this._clean_build_cmd = value;
    }
}