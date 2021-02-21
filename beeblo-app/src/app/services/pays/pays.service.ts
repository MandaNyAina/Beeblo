import { Injectable } from '@angular/core';
import { Pays } from 'src/app/interface/pays';
import pays from 'src/assets/json/pays.json';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  private paysList: Pays[] = pays as Array<Pays>;
  constructor() { }

  public getAllPays(): Pays[] {
    return this.paysList;
  }

  public getPaysByCode(code: string, filterKey: string = null): Pays | string {
    let data_filtered = this.paysList.filter((p: Pays) => {
      if (p.numericCode == code) return p;
    })[0];

    if (filterKey) return data_filtered[filterKey];
    return data_filtered;
  }

}
