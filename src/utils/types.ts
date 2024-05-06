export type Hero = {
    "id": number,
    "name": string,
    "height": string,
    "mass": string,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string
};

export interface Character {
    name: string;
    img: string;
    url: string;
}

export interface Characters {
    [key: string]: Character;
}

export interface Item {
    item: {
        title:string,
        route: string
    }
}