import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { NotionService } from 'src/app/services/notion.service';

@Component({
  selector: 'app-notion',
  templateUrl: './notion.component.html',
  styleUrls: ['./notion.component.css'],
})
export class NotionComponent {
  name = 'Angular ' + VERSION.major;

  page$!: Observable<any>;
  database$!: Observable<any>;

  constructor(public notionService: NotionService) {}

  ngOnInit() {
    this.getPageData();
    this.getDatabase();
  }

  private getPageData() {
    this.notionService.getPage().then((res: any) => {
      this.page$ = res;
      console.log('page data: ', res);
    });
  }

  private getDatabase() {
    this.notionService.getDatabase().then((res: any) => {
      this.database$ = res;
      console.log('database data: ', res);
    });
  }
}
