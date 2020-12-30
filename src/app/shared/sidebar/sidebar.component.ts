import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route: Router) { }

  navigateToRoute(Form) {


    this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.route.navigate(['home/list', Form]);
    });

  }

  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init');
  }

}
