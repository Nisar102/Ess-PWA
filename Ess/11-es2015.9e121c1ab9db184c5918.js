(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v53j:function(b,a,t){"use strict";t.r(a);var e=t("3Pt+"),i=t("ofXK"),d=t("tyNb"),o=t("fXoL"),s=t("p6+y");const c=[{path:"",component:(()=>{class b{constructor(b){this._apiService=b,this.EmployeeId="39",this.dateFrom="2020-05-01"}ngOnInit(){}GetPaySlip(){this._apiService.GetPaySlip(this.dateFrom,this.EmployeeId).subscribe(b=>{this.data=b,console.log(JSON.stringify(this.data)),this.ProcessId=this.data.ProcessId,this.EmployeeName=this.data.EmployeeName,this.DepartmentName=this.data.DepartmentName,this.BasicPay=this.data.BasicPay,this.EmployeeCode=this.data.EmployeeCode,this.BranchName=this.data.BranchName,this.Date=this.data.Date,this.PresentDays=this.data.PresentDays,this.Absent=this.data.Absent,this.Lates=this.data.Lates,this.WorkingDays=this.data.WorkingDays,this.Leaves=this.data.ProcessLeavesId,this.EarlyGones=this.data.EarlyGones,this.HalfDays=this.data.HalfDays,this.TotalAllowance=this.data.TotalAllowance,this.OverTimeSalary=this.data.OverTimeSalary,this.AddIncome=this.data.AddIncome,this.TotalSalary=this.data.TotalSalary,this.TotalLoan=this.data.TotalLoan,this.Advance=this.data.Advance,this.Tax=this.data.Tax,this.EOBI=this.data.EOBI,this.FinalSalary=this.data.FinalSalary,this.HoursWorked=this.data.HoursWorked},b=>{console.log(b)})}}return b.\u0275fac=function(a){return new(a||b)(o.Jb(s.a))},b.\u0275cmp=o.Db({type:b,selectors:[["app-payslip"]],decls:102,vars:26,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","mb-3"],[1,"col-xs-4","col-sm-4","col-md-4","col-lg-4"],[1,"form-group"],["type","text","placeholder","date from",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","employeeId",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xs-2","col-sm-2","col-md-2","col-lg-2"],["type","button",1,"btn","btn-default","btn-sm",3,"click"],[1,"col-xs-12","col-sm-8","col-md-6","col-lg-4"],[1,"float-left"],[1,"float-right"],[1,"col-4"],[1,"col-2"],[1,"col-6"]],template:function(b,a){1&b&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"div",2),o.Mb(3,"div",3),o.bc(4," Payslip "),o.Lb(),o.Mb(5,"div",4),o.Mb(6,"div",5),o.Mb(7,"div",6),o.Mb(8,"div",7),o.Mb(9,"label"),o.bc(10,"Date From"),o.Lb(),o.Mb(11,"input",8),o.Tb("ngModelChange",(function(b){return a.dateFrom=b})),o.Lb(),o.Lb(),o.Lb(),o.Mb(12,"div",6),o.Mb(13,"div",7),o.Mb(14,"label"),o.bc(15,"EmployeeId"),o.Lb(),o.Mb(16,"input",9),o.Tb("ngModelChange",(function(b){return a.EmployeeId=b})),o.Lb(),o.Lb(),o.Lb(),o.Mb(17,"div",10),o.Mb(18,"button",11),o.Tb("click",(function(){return a.GetPaySlip()})),o.bc(19," View "),o.Lb(),o.Lb(),o.Lb(),o.Mb(20,"div",0),o.Mb(21,"div",12),o.Mb(22,"div",13),o.Mb(23,"h6"),o.bc(24,"this is testing"),o.Lb(),o.Lb(),o.Mb(25,"div",14),o.bc(26," testing slip No "),o.Lb(),o.Lb(),o.Mb(27,"div",15),o.Mb(28,"div"),o.bc(29),o.Lb(),o.Mb(30,"div"),o.bc(31),o.Lb(),o.Mb(32,"div"),o.bc(33),o.Lb(),o.Lb(),o.Kb(34,"div",15),o.Mb(35,"div",15),o.Mb(36,"div"),o.bc(37),o.Lb(),o.Mb(38,"div"),o.bc(39),o.Lb(),o.Mb(40,"div"),o.bc(41),o.Lb(),o.Lb(),o.Lb(),o.Mb(42,"div",0),o.Mb(43,"div",16),o.Mb(44,"div"),o.bc(45),o.Lb(),o.Lb(),o.Mb(46,"div",16),o.Mb(47,"div"),o.bc(48),o.Lb(),o.Lb(),o.Mb(49,"div",16),o.Mb(50,"div"),o.bc(51),o.Lb(),o.Lb(),o.Mb(52,"div",16),o.Mb(53,"div"),o.bc(54),o.Lb(),o.Lb(),o.Mb(55,"div",16),o.Mb(56,"div"),o.bc(57),o.Lb(),o.Lb(),o.Lb(),o.Mb(58,"div",0),o.Mb(59,"div",17),o.Mb(60,"div"),o.bc(61),o.Lb(),o.Lb(),o.Mb(62,"div",17),o.Mb(63,"div"),o.bc(64),o.Lb(),o.Lb(),o.Lb(),o.Mb(65,"div",0),o.Mb(66,"div",16),o.Mb(67,"div"),o.bc(68),o.Lb(),o.Lb(),o.Mb(69,"div",16),o.Mb(70,"div"),o.bc(71),o.Lb(),o.Lb(),o.Mb(72,"div",16),o.Mb(73,"div"),o.bc(74),o.Lb(),o.Lb(),o.Mb(75,"div",16),o.Mb(76,"div"),o.bc(77),o.Lb(),o.Lb(),o.Mb(78,"div",16),o.Mb(79,"div"),o.bc(80),o.Lb(),o.Lb(),o.Lb(),o.Mb(81,"div",0),o.Mb(82,"div",16),o.Mb(83,"div"),o.bc(84),o.Lb(),o.Lb(),o.Mb(85,"div",16),o.Mb(86,"div"),o.bc(87),o.Lb(),o.Lb(),o.Mb(88,"div",16),o.Mb(89,"div"),o.bc(90),o.Lb(),o.Lb(),o.Mb(91,"div",16),o.Mb(92,"div"),o.bc(93),o.Lb(),o.Lb(),o.Mb(94,"div",16),o.Mb(95,"div"),o.bc(96),o.Lb(),o.Lb(),o.Lb(),o.Mb(97,"div",0),o.Mb(98,"div",1),o.Mb(99,"div",14),o.Mb(100,"div"),o.bc(101),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&b&&(o.zb(11),o.Vb("ngModel",a.dateFrom),o.zb(5),o.Vb("ngModel",a.EmployeeId),o.zb(13),o.dc("Salary Slip# : ",a.ProcessId,""),o.zb(2),o.dc("Employee Name: ",a.EmployeeName,""),o.zb(2),o.dc("Department : ",a.DepartmentName,""),o.zb(4),o.dc("Employee Code : ",a.EmployeeCode,""),o.zb(2),o.dc("Branch : ",a.BranchName,""),o.zb(2),o.dc("Salary Of Month : ",a.Date,""),o.zb(4),o.dc("present days : ",a.PresentDays,""),o.zb(3),o.dc("Absent: ",a.Absent,""),o.zb(3),o.dc("Late: ",a.Lates,""),o.zb(3),o.dc("Over Time: ",a.OverTimeSalary,""),o.zb(3),o.dc("Worked hours: ",a.HoursWorked,""),o.zb(4),o.dc("Leaves: ",a.Leaves,""),o.zb(3),o.dc("Half Days: ",a.HalfDays,""),o.zb(4),o.dc("Basic Pay: ",a.BasicPay,""),o.zb(3),o.dc("Total Allowance: ",a.TotalAllowance,""),o.zb(3),o.dc("Over Time: ",a.OverTimeSalary,""),o.zb(3),o.dc("Add Income: ",a.AddIncome,""),o.zb(3),o.dc("Total Earnings: ",a.TotalSalary,"s"),o.zb(4),o.dc("Loan: ",a.TotalLoan,""),o.zb(3),o.dc("advance: ",a.Advance,""),o.zb(3),o.dc("Tax: ",a.Tax,""),o.zb(3),o.dc("EOBI: ",a.EOBI,""),o.zb(3),o.dc("Total Deduction: ",a.TotalLoan+a.Advance+a.Tax+a.EOBI,""),o.zb(5),o.dc("Final Salary : ",a.FinalSalary,""))},directives:[e.a,e.f,e.h],styles:[".btn-default[_ngcontent-%COMP%]{margin-top:32px}"]}),b})()}];let l=(()=>{class b{}return b.\u0275mod=o.Hb({type:b}),b.\u0275inj=o.Gb({factory:function(a){return new(a||b)},imports:[[d.c.forChild(c)],d.c]}),b})();t.d(a,"PayslipModule",(function(){return n}));let n=(()=>{class b{}return b.\u0275mod=o.Hb({type:b}),b.\u0275inj=o.Gb({factory:function(a){return new(a||b)},providers:[],imports:[[i.b,e.e,l]]}),b})()}}]);