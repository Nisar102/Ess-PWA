
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private route: Router) { }

  ngOnInit(): void {
    // this.service._getVoucherByVoucherNo('BP-000012').subscribe((r: any) => {
    //   console.log('home component' + JSON.stringify(r));
    // });
  }

}
