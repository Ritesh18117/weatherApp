import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  responseData: any;
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData().subscribe(
      (data) => {
        this.responseData = data;
        console.log(this.responseData);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
