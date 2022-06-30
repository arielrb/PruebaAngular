export interface Task {
    id?: number, //cuando creamos una task quep odria o no estar
    text: string;
    day: string;
    reminder: boolean;
}