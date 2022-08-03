import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeBenchBakeryComponent implements OnInit {
  title = 'bakery';

  constructor() { }

  ngOnInit(): void {
  }

}
