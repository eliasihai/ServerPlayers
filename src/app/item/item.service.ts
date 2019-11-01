import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})

export class ItemService {
 

    getItems(): Promise<Item[]> {
        return fetch('http://192.168.1.34:3000/players').then(res =>res.json());
    }

    getItem(id: number): Promise<Item> {
        return fetch('http://192.168.1.34:3000/players/' + id).then(res =>res.json());
    }
}
