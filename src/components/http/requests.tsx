import {Sarvis} from "sarvis";

export const s = new Sarvis({
    base_url: "http://localhost:5222"
});

export interface IStatusInfo {
    id: number,
	serial: string;
    mac: string;
    time: string;
}

export const isStatusInfo = (obj: any): obj is IStatusInfo => {
    return 'mac' in obj && 'serial' in obj;
}

export const getStatusInfo = (): Promise<IStatusInfo> => {
    return s.get('/api/measurements/current');
}

export const getStatuses = (): Promise<IStatusInfo[]> => {
    return s.get('/api/measurements');
}