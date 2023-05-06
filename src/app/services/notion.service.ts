import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export const NOTION = {
  bearerToken: '',
  database: {
    api: '',
    id: '',
  },
  page: {
    api: '',
    id: '',
  },
};

export const headerOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${NOTION.bearerToken}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2021-05-13',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NotionService {
  private _database$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public database$: Observable<any> = this._database$.asObservable();

  private _pageData$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public pageData$: Observable<any> = this._pageData$.asObservable();

  constructor(private http: HttpClient) {}

  async getDatabase(): Promise<any> {
    const databaseData = await this.http.get(
      `${NOTION.database.api}/${NOTION.database.id}`,
      headerOptions
    );
    this._database$.next(databaseData);
    return databaseData;
  }

  async getPage(): Promise<any> {
    const pageData = await this.http.get(
      `${NOTION.page.api}/${NOTION.page.id}`,
      headerOptions
    );
    this._pageData$.next(pageData);

    return pageData;
  }
}
