import { CollectionObject } from './collection-object.model';

export interface Job extends CollectionObject {
    ten_cong_viec: string,
    nha_tuyen_dung: string,
    location: Location,
    mo_ta: string,
    yeu_cau: string,
    dien_thoai: string,
    luong: string
    owner?: string;
    public: boolean;
    invited?: string[];
    rsvps?: RSVP[];
    images?: string[];
    date: Date;
}
interface RSVP {
    userId: string;
    response: string;
}
interface Location {
    name: string;
    lat?: number;
    lng?: number;
}