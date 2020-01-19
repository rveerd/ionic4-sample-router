import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  title: string;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.title = route.snapshot.paramMap.get('title');
  }

  ngOnInit() {
  }

}
