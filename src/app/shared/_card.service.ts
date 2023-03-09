import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardInfo } from 'src/app/models/cardInfo';


//TODO: get this to work

@Injectable()
export class cardService {

    private _jsonURL: string;
    cards!: cardInfo[];

    constructor(@Inject(String) private url: string, private http: HttpClient) {
        this._jsonURL = url;
    }

    fillCards(cards: cardInfo[]): cardInfo[] {
        this.getJSON().subscribe(data => {
            cards = data.card;

            console.log(cards)
        });
        return cards;
    }

    getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    getCards(): cardInfo[] {
        return this.cards;
    }


}