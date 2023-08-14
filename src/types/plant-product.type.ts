export interface PlantProduct {
    name: string;
    imagePath: string;
    price: string;
    rating: number;
    favourite: boolean;
    hint: string;
    type: string;
    preferences: {
        humidity: string;
        temperature: number;
        light: string;
        watering: string;
    };
}