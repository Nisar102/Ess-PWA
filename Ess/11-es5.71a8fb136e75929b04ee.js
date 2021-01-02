function _classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(b,a){for(var e=0;e<a.length;e++){var d=a[e];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(b,d.key,d)}}function _createClass(b,a,e){return a&&_defineProperties(b.prototype,a),e&&_defineProperties(b,e),b}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v53j:function(b,a,e){"use strict";e.r(a);var d,c,t=e("3Pt+"),i=e("ofXK"),o=e("tyNb"),n=e("fXoL"),l=e("p6+y"),r=[{path:"",component:(d=function(){function b(a){_classCallCheck(this,b),this._apiService=a,this.EmployeeId="39",this.dateFrom="2020-05-01"}return _createClass(b,[{key:"ngOnInit",value:function(){}},{key:"GetPaySlip",value:function(){var b=this;this._apiService.GetPaySlip(this.dateFrom,this.EmployeeId).subscribe((function(a){b.data=a,console.log(JSON.stringify(b.data)),b.ProcessId=b.data.ProcessId,b.EmployeeName=b.data.EmployeeName,b.DepartmentName=b.data.DepartmentName,b.BasicPay=b.data.BasicPay,b.EmployeeCode=b.data.EmployeeCode,b.BranchName=b.data.BranchName,b.Date=b.data.Date,b.PresentDays=b.data.PresentDays,b.Absent=b.data.Absent,b.Lates=b.data.Lates,b.WorkingDays=b.data.WorkingDays,b.Leaves=b.data.ProcessLeavesId,b.EarlyGones=b.data.EarlyGones,b.HalfDays=b.data.HalfDays,b.TotalAllowance=b.data.TotalAllowance,b.OverTimeSalary=b.data.OverTimeSalary,b.AddIncome=b.data.AddIncome,b.TotalSalary=b.data.TotalSalary,b.TotalLoan=b.data.TotalLoan,b.Advance=b.data.Advance,b.Tax=b.data.Tax,b.EOBI=b.data.EOBI,b.FinalSalary=b.data.FinalSalary,b.HoursWorked=b.data.HoursWorked}),(function(b){console.log(b)}))}}]),b}(),d.\u0275fac=function(b){return new(b||d)(n.Jb(l.a))},d.\u0275cmp=n.Db({type:d,selectors:[["app-payslip"]],decls:118,vars:27,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","mb-3"],[1,"col-xs-4","col-sm-4","col-md-4","col-lg-4"],[1,"form-group"],["type","text","placeholder","date from",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","employeeId",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xs-2","col-sm-2","col-md-2","col-lg-2"],["type","button",1,"btn","btn-default","btn-sm",3,"click"],[1,"col-12","col-xs-12","col-sm-6","col-md-4","col-lg-4","col-xl-3"],[1,"w-100"],[1,"float-left"],[1,"float-right"],[1,"d-flex","justify-content-between"],[1,"col-2"],[1,"col-6"]],template:function(b,a){1&b&&(n.Mb(0,"div",0),n.Mb(1,"div",1),n.Mb(2,"div",2),n.Mb(3,"div",3),n.bc(4," Payslip "),n.Lb(),n.Mb(5,"div",4),n.Mb(6,"div",5),n.Mb(7,"div",6),n.Mb(8,"div",7),n.Mb(9,"label"),n.bc(10,"Date From"),n.Lb(),n.Mb(11,"input",8),n.Tb("ngModelChange",(function(b){return a.dateFrom=b})),n.Lb(),n.Lb(),n.Lb(),n.Mb(12,"div",6),n.Mb(13,"div",7),n.Mb(14,"label"),n.bc(15,"EmployeeId"),n.Lb(),n.Mb(16,"input",9),n.Tb("ngModelChange",(function(b){return a.EmployeeId=b})),n.Lb(),n.Lb(),n.Lb(),n.Mb(17,"div",10),n.Mb(18,"button",11),n.Tb("click",(function(){return a.GetPaySlip()})),n.bc(19," View "),n.Lb(),n.Lb(),n.Lb(),n.Mb(20,"div",0),n.Mb(21,"div",12),n.Mb(22,"div",13),n.Mb(23,"div",14),n.bc(24,"Salary Slip# :"),n.Lb(),n.Mb(25,"div",15),n.bc(26),n.Lb(),n.Lb(),n.Mb(27,"div",13),n.Mb(28,"div",14),n.bc(29,"Salary Slip# :"),n.Lb(),n.Mb(30,"div",15),n.bc(31),n.Lb(),n.Lb(),n.Mb(32,"div",13),n.Mb(33,"div",14),n.bc(34,"Employee Name :"),n.Lb(),n.Mb(35,"div",15),n.bc(36),n.Lb(),n.Lb(),n.Mb(37,"div",13),n.Mb(38,"div",14),n.bc(39,"Department :"),n.Lb(),n.Mb(40,"div",15),n.bc(41),n.Lb(),n.Lb(),n.Lb(),n.Mb(42,"div",12),n.Mb(43,"div",13),n.Mb(44,"div",14),n.bc(45,"Employee Code :"),n.Lb(),n.Mb(46,"div",15),n.bc(47),n.Lb(),n.Lb(),n.Mb(48,"div",16),n.Mb(49,"div",14),n.bc(50,"Branch :"),n.Lb(),n.Mb(51,"div",15),n.bc(52),n.Lb(),n.Lb(),n.Mb(53,"div",16),n.Mb(54,"div",14),n.bc(55,"Salary Of Month :"),n.Lb(),n.Mb(56,"div",15),n.bc(57),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(58,"div",0),n.Mb(59,"div",17),n.Mb(60,"div"),n.bc(61),n.Lb(),n.Lb(),n.Mb(62,"div",17),n.Mb(63,"div"),n.bc(64),n.Lb(),n.Lb(),n.Mb(65,"div",17),n.Mb(66,"div"),n.bc(67),n.Lb(),n.Lb(),n.Mb(68,"div",17),n.Mb(69,"div"),n.bc(70),n.Lb(),n.Lb(),n.Mb(71,"div",17),n.Mb(72,"div"),n.bc(73),n.Lb(),n.Lb(),n.Lb(),n.Mb(74,"div",0),n.Mb(75,"div",18),n.Mb(76,"div"),n.bc(77),n.Lb(),n.Lb(),n.Mb(78,"div",18),n.Mb(79,"div"),n.bc(80),n.Lb(),n.Lb(),n.Lb(),n.Mb(81,"div",0),n.Mb(82,"div",17),n.Mb(83,"div"),n.bc(84),n.Lb(),n.Lb(),n.Mb(85,"div",17),n.Mb(86,"div"),n.bc(87),n.Lb(),n.Lb(),n.Mb(88,"div",17),n.Mb(89,"div"),n.bc(90),n.Lb(),n.Lb(),n.Mb(91,"div",17),n.Mb(92,"div"),n.bc(93),n.Lb(),n.Lb(),n.Mb(94,"div",17),n.Mb(95,"div"),n.bc(96),n.Lb(),n.Lb(),n.Lb(),n.Mb(97,"div",0),n.Mb(98,"div",17),n.Mb(99,"div"),n.bc(100),n.Lb(),n.Lb(),n.Mb(101,"div",17),n.Mb(102,"div"),n.bc(103),n.Lb(),n.Lb(),n.Mb(104,"div",17),n.Mb(105,"div"),n.bc(106),n.Lb(),n.Lb(),n.Mb(107,"div",17),n.Mb(108,"div"),n.bc(109),n.Lb(),n.Lb(),n.Mb(110,"div",17),n.Mb(111,"div"),n.bc(112),n.Lb(),n.Lb(),n.Lb(),n.Mb(113,"div",0),n.Mb(114,"div",1),n.Mb(115,"div",15),n.Mb(116,"div"),n.bc(117),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb()),2&b&&(n.zb(11),n.Vb("ngModel",a.dateFrom),n.zb(5),n.Vb("ngModel",a.EmployeeId),n.zb(10),n.cc(a.ProcessId),n.zb(5),n.cc(a.ProcessId),n.zb(5),n.cc(a.EmployeeName),n.zb(5),n.cc(a.DepartmentName),n.zb(6),n.cc(a.EmployeeCode),n.zb(5),n.cc(a.BranchName),n.zb(5),n.cc(a.Date),n.zb(4),n.dc("present days : ",a.PresentDays,""),n.zb(3),n.dc("Absent: ",a.Absent,""),n.zb(3),n.dc("Late: ",a.Lates,""),n.zb(3),n.dc("Over Time: ",a.OverTimeSalary,""),n.zb(3),n.dc("Worked hours: ",a.HoursWorked,""),n.zb(4),n.dc("Leaves: ",a.Leaves,""),n.zb(3),n.dc("Half Days: ",a.HalfDays,""),n.zb(4),n.dc("Basic Pay: ",a.BasicPay,""),n.zb(3),n.dc("Total Allowance: ",a.TotalAllowance,""),n.zb(3),n.dc("Over Time: ",a.OverTimeSalary,""),n.zb(3),n.dc("Add Income: ",a.AddIncome,""),n.zb(3),n.dc("Total Earnings: ",a.TotalSalary,"s"),n.zb(4),n.dc("Loan: ",a.TotalLoan,""),n.zb(3),n.dc("advance: ",a.Advance,""),n.zb(3),n.dc("Tax: ",a.Tax,""),n.zb(3),n.dc("EOBI: ",a.EOBI,""),n.zb(3),n.dc("Total Deduction: ",a.TotalLoan+a.Advance+a.Tax+a.EOBI,""),n.zb(5),n.dc("Final Salary : ",a.FinalSalary,""))},directives:[t.a,t.f,t.h],styles:[".btn-default[_ngcontent-%COMP%]{margin-top:32px}"]}),d)}],s=((c=function b(){_classCallCheck(this,b)}).\u0275mod=n.Hb({type:c}),c.\u0275inj=n.Gb({factory:function(b){return new(b||c)},imports:[[o.c.forChild(r)],o.c]}),c);e.d(a,"PayslipModule",(function(){return L}));var v,L=((v=function b(){_classCallCheck(this,b)}).\u0275mod=n.Hb({type:v}),v.\u0275inj=n.Gb({factory:function(b){return new(b||v)},providers:[],imports:[[i.b,t.e,s]]}),v)}}]);