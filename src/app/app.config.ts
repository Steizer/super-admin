export class AppConfig {
    apiendpoint: string;
    title: string;
    mode: number;
}

export const CONFIG1: AppConfig = {
    apiendpoint: 'blabla',
    title: 'main api',
    mode: 1
}

export const CONFIG2: AppConfig = {
    apiendpoint: 'blabla2',
    title: 'fallback api',
    mode: 2
}