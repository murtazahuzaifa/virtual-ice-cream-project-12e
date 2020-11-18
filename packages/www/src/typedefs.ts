import { ColorState } from './components/ColorPalette';
export interface IceCreamType {
    id: string,
    ts: string,
    receiverName: string,
    senderName: string,
    message: string,
    iceCreamColor: ColorState,
}