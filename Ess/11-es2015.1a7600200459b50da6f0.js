(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v53j:function(b,a,t){"use strict";t.r(a);var e=t("3Pt+"),i=t("ofXK"),d=t("tyNb"),c=t("fXoL"),o=t("p6+y");const s=[{path:"",component:(()=>{class b{constructor(b){this._apiService=b,this.EmployeeId="39",this.dateFrom="2020-05-01"}ngOnInit(){}GetPaySlip(){this._apiService.GetPaySlip(this.dateFrom,this.EmployeeId).subscribe(b=>{this.data=b,console.log(JSON.stringify(this.data)),this.ProcessId=this.data.ProcessId,this.EmployeeName=this.data.EmployeeName,this.DepartmentName=this.data.DepartmentName,this.BasicPay=this.data.BasicPay,this.EmployeeCode=this.data.EmployeeCode,this.BranchName=this.data.BranchName,this.Date=this.data.Date,this.PresentDays=this.data.PresentDays,this.Absent=this.data.Absent,this.Lates=this.data.Lates,this.WorkingDays=this.data.WorkingDays,this.Leaves=this.data.ProcessLeavesId,this.EarlyGones=this.data.EarlyGones,this.HalfDays=this.data.HalfDays,this.TotalAllowance=this.data.TotalAllowance,this.OverTimeSalary=this.data.OverTimeSalary,this.AddIncome=this.data.AddIncome,this.TotalSalary=this.data.TotalSalary,this.TotalLoan=this.data.TotalLoan,this.Advance=this.data.Advance,this.Tax=this.data.Tax,this.EOBI=this.data.EOBI,this.FinalSalary=this.data.FinalSalary,this.HoursWorked=this.data.HoursWorked},b=>{console.log(b)})}}return b.\u0275fac=function(a){return new(a||b)(c.Jb(o.a))},b.\u0275cmp=c.Db({type:b,selectors:[["app-payslip"]],decls:118,vars:27,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","mb-3"],[1,"col-xs-4","col-sm-4","col-md-4","col-lg-4"],[1,"form-group"],["type","text","placeholder","date from",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","employeeId",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xs-2","col-sm-2","col-md-2","col-lg-2"],["type","button",1,"btn","btn-default","btn-sm",3,"click"],[1,"col-sm-12"],[1,"col-6"],[1,"col-12","col-xs-12","col-sm-6","col-md-4","col-lg-4","col-xl-3"],[1,"w-100"],[1,"float-left"],[1,"float-right"],[1,"d-flex","justify-content-between"],[1,"col-2"]],template:function(b,a){1&b&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"div",2),c.Mb(3,"div",3),c.bc(4," Payslip "),c.Lb(),c.Mb(5,"div",4),c.Mb(6,"div",5),c.Mb(7,"div",6),c.Mb(8,"div",7),c.Mb(9,"label"),c.bc(10,"Date From"),c.Lb(),c.Mb(11,"input",8),c.Tb("ngModelChange",(function(b){return a.dateFrom=b})),c.Lb(),c.Lb(),c.Lb(),c.Mb(12,"div",6),c.Mb(13,"div",7),c.Mb(14,"label"),c.bc(15,"EmployeeId"),c.Lb(),c.Mb(16,"input",9),c.Tb("ngModelChange",(function(b){return a.EmployeeId=b})),c.Lb(),c.Lb(),c.Lb(),c.Mb(17,"div",10),c.Mb(18,"button",11),c.Tb("click",(function(){return a.GetPaySlip()})),c.bc(19," View "),c.Lb(),c.Lb(),c.Lb(),c.Mb(20,"div",0),c.Mb(21,"div",12),c.Mb(22,"div",13),c.bc(23,"Salary Slip# :"),c.Lb(),c.Mb(24,"div",13),c.bc(25),c.Lb(),c.Lb(),c.Mb(26,"div",12),c.Mb(27,"div",13),c.bc(28,"Salary Slip# :"),c.Lb(),c.Mb(29,"div",13),c.bc(30),c.Lb(),c.Lb(),c.Mb(31,"div",12),c.Mb(32,"div",13),c.bc(33,"Employee Name :"),c.Lb(),c.Mb(34,"div",13),c.bc(35),c.Lb(),c.Lb(),c.Mb(36,"div",12),c.Mb(37,"div",13),c.bc(38,"Department :"),c.Lb(),c.Mb(39,"div",13),c.bc(40),c.Lb(),c.Lb(),c.Lb(),c.Mb(41,"div",0),c.Mb(42,"div",14),c.Mb(43,"div",15),c.Mb(44,"div",16),c.bc(45,"Employee Code :"),c.Lb(),c.Mb(46,"div",17),c.bc(47),c.Lb(),c.Lb(),c.Mb(48,"div",18),c.Mb(49,"div",16),c.bc(50,"Branch :"),c.Lb(),c.Mb(51,"div",17),c.bc(52),c.Lb(),c.Lb(),c.Mb(53,"div",18),c.Mb(54,"div",16),c.bc(55,"Salary Of Month :"),c.Lb(),c.Mb(56,"div",17),c.bc(57),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(58,"div",0),c.Mb(59,"div",19),c.Mb(60,"div"),c.bc(61),c.Lb(),c.Lb(),c.Mb(62,"div",19),c.Mb(63,"div"),c.bc(64),c.Lb(),c.Lb(),c.Mb(65,"div",19),c.Mb(66,"div"),c.bc(67),c.Lb(),c.Lb(),c.Mb(68,"div",19),c.Mb(69,"div"),c.bc(70),c.Lb(),c.Lb(),c.Mb(71,"div",19),c.Mb(72,"div"),c.bc(73),c.Lb(),c.Lb(),c.Lb(),c.Mb(74,"div",0),c.Mb(75,"div",13),c.Mb(76,"div"),c.bc(77),c.Lb(),c.Lb(),c.Mb(78,"div",13),c.Mb(79,"div"),c.bc(80),c.Lb(),c.Lb(),c.Lb(),c.Mb(81,"div",0),c.Mb(82,"div",19),c.Mb(83,"div"),c.bc(84),c.Lb(),c.Lb(),c.Mb(85,"div",19),c.Mb(86,"div"),c.bc(87),c.Lb(),c.Lb(),c.Mb(88,"div",19),c.Mb(89,"div"),c.bc(90),c.Lb(),c.Lb(),c.Mb(91,"div",19),c.Mb(92,"div"),c.bc(93),c.Lb(),c.Lb(),c.Mb(94,"div",19),c.Mb(95,"div"),c.bc(96),c.Lb(),c.Lb(),c.Lb(),c.Mb(97,"div",0),c.Mb(98,"div",19),c.Mb(99,"div"),c.bc(100),c.Lb(),c.Lb(),c.Mb(101,"div",19),c.Mb(102,"div"),c.bc(103),c.Lb(),c.Lb(),c.Mb(104,"div",19),c.Mb(105,"div"),c.bc(106),c.Lb(),c.Lb(),c.Mb(107,"div",19),c.Mb(108,"div"),c.bc(109),c.Lb(),c.Lb(),c.Mb(110,"div",19),c.Mb(111,"div"),c.bc(112),c.Lb(),c.Lb(),c.Lb(),c.Mb(113,"div",0),c.Mb(114,"div",1),c.Mb(115,"div",17),c.Mb(116,"div"),c.bc(117),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&b&&(c.zb(11),c.Vb("ngModel",a.dateFrom),c.zb(5),c.Vb("ngModel",a.EmployeeId),c.zb(9),c.cc(a.ProcessId),c.zb(5),c.cc(a.ProcessId),c.zb(5),c.cc(a.EmployeeName),c.zb(5),c.cc(a.DepartmentName),c.zb(7),c.cc(a.EmployeeCode),c.zb(5),c.cc(a.BranchName),c.zb(5),c.cc(a.Date),c.zb(4),c.dc("present days : ",a.PresentDays,""),c.zb(3),c.dc("Absent: ",a.Absent,""),c.zb(3),c.dc("Late: ",a.Lates,""),c.zb(3),c.dc("Over Time: ",a.OverTimeSalary,""),c.zb(3),c.dc("Worked hours: ",a.HoursWorked,""),c.zb(4),c.dc("Leaves: ",a.Leaves,""),c.zb(3),c.dc("Half Days: ",a.HalfDays,""),c.zb(4),c.dc("Basic Pay: ",a.BasicPay,""),c.zb(3),c.dc("Total Allowance: ",a.TotalAllowance,""),c.zb(3),c.dc("Over Time: ",a.OverTimeSalary,""),c.zb(3),c.dc("Add Income: ",a.AddIncome,""),c.zb(3),c.dc("Total Earnings: ",a.TotalSalary,"s"),c.zb(4),c.dc("Loan: ",a.TotalLoan,""),c.zb(3),c.dc("advance: ",a.Advance,""),c.zb(3),c.dc("Tax: ",a.Tax,""),c.zb(3),c.dc("EOBI: ",a.EOBI,""),c.zb(3),c.dc("Total Deduction: ",a.TotalLoan+a.Advance+a.Tax+a.EOBI,""),c.zb(5),c.dc("Final Salary : ",a.FinalSalary,""))},directives:[e.a,e.f,e.h],styles:[".btn-default[_ngcontent-%COMP%]{margin-top:32px}"]}),b})()}];let l=(()=>{class b{}return b.\u0275mod=c.Hb({type:b}),b.\u0275inj=c.Gb({factory:function(a){return new(a||b)},imports:[[d.c.forChild(s)],d.c]}),b})();t.d(a,"PayslipModule",(function(){return n}));let n=(()=>{class b{}return b.\u0275mod=c.Hb({type:b}),b.\u0275inj=c.Gb({factory:function(a){return new(a||b)},providers:[],imports:[[i.b,e.e,l]]}),b})()}}]);