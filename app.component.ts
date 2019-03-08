import { Component} from '@angular/core';
import{ TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Dynamic Table';
  public data=[];
  constructor(private _tableService:TableService){}
 ngOnInit(){
    this.data=this._tableService.getData();
 }
}

