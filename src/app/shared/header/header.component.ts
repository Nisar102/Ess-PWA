import { HttpErrorResponse } from '@angular/common/http';
import { CompanyService } from './../../components/users/company-setup/company.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private _companyService: CompanyService) { }

  companyList = [];
  userList = [];
  UserId = 0;
  CompanyId = 0;
  CompanyName = "";

  ngOnInit(): void {

    this.userList = JSON.parse(localStorage.getItem('credentials'));
    this.companyList = JSON.parse(localStorage.getItem('companies'));
    this.CompanyName = this.companyList[0]['Name'];

  }

  onCompanyChange(index) {
    for (let i = 0; i < this.companyList.length; i++) {
      if (i === index) {
        this.CompanyId = this.companyList[i]['CompanyId'];
        this.CompanyName = this.companyList[i]['Name'];
      }
    }

    this._companyService.changeConnection(this.CompanyId).subscribe((r: any) => {
      this.route.navigate(['home']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
  }

  AddCompany() {

    this.UserId = this.userList[0]['UserId'];
    this.route.navigate(['/user/company-setup', this.UserId]);
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

}
