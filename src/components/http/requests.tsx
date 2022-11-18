import {Sarvis} from "sarvis";

export const s = new Sarvis({
    base_url: "http://192.168.2.4"
});

export interface IStatusInfo {
	serial: string;
    mac: string;
}

export const isStatusInfo = (obj: any): obj is IStatusInfo => {
    return 'mac' in obj && 'serial' in obj;
}

export const getStatusInfo = (): Promise<IStatusInfo> => {
    return s.get('/status');
}