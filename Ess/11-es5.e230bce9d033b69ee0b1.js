function _classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(b,a){for(var e=0;e<a.length;e++){var d=a[e];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(b,d.key,d)}}function _createClass(b,a,e){return a&&_defineProperties(b.prototype,a),e&&_defineProperties(b,e),b}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v53j:function(b,a,e){"use strict";e.r(a);var d,t,c=e("3Pt+"),o=e("ofXK"),i=e("tyNb"),n=e("fXoL"),l=e("p6+y"),r=[{path:"",component:(d=function(){function b(a){_classCallCheck(this,b),this._apiService=a,this.EmployeeId="39",this.dateFrom="2020-05-01"}return _createClass(b,[{key:"ngOnInit",value:function(){}},{key:"GetPaySlip",value:function(){var b=this;this._apiService.GetPaySlip(this.dateFrom,this.EmployeeId).subscribe((function(a){b.data=a,console.log(JSON.stringify(b.data)),b.ProcessId=b.data.ProcessId,b.EmployeeName=b.data.EmployeeName,b.DepartmentName=b.data.DepartmentName,b.BasicPay=b.data.BasicPay,b.EmployeeCode=b.data.EmployeeCode,b.BranchName=b.data.BranchName,b.Date=b.data.Date,b.PresentDays=b.data.PresentDays,b.Absent=b.data.Absent,b.Lates=b.data.Lates,b.WorkingDays=b.data.WorkingDays,b.Leaves=b.data.ProcessLeavesId,b.EarlyGones=b.data.EarlyGones,b.HalfDays=b.data.HalfDays,b.TotalAllowance=b.data.TotalAllowance,b.OverTimeSalary=b.data.OverTimeSalary,b.AddIncome=b.data.AddIncome,b.TotalSalary=b.data.TotalSalary,b.TotalLoan=b.data.TotalLoan,b.Advance=b.data.Advance,b.Tax=b.data.Tax,b.EOBI=b.data.EOBI,b.FinalSalary=b.data.FinalSalary,b.HoursWorked=b.data.HoursWorked}),(function(b){console.log(b)}))}}]),b}(),d.\u0275fac=function(b){return new(b||d)(n.Jb(l.a))},d.\u0275cmp=n.Db({type:d,selectors:[["app-payslip"]],decls:110,vars:27,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","mb-3"],[1,"col-xs-4","col-sm-4","col-md-4","col-lg-4"],[1,"form-group"],["type","text","placeholder","date from",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","employeeId",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xs-2","col-sm-2","col-md-2","col-lg-2"],["type","button",1,"btn","btn-default","btn-sm",3,"click"],[1,"col-xs-12","col-sm-12","col-md-6","col-lg-4"],[1,"d-flex","justify-content-between"],[1,"p-2"],[1,"p-1"],[1,"col-4"],[1,"col-2"],[1,"col-6"],[1,"float-right"]],template:function(b,a){1&b&&(n.Mb(0,"div",0),n.Mb(1,"div",1),n.Mb(2,"div",2),n.Mb(3,"div",3),n.bc(4," Payslip "),n.Lb(),n.Mb(5,"div",4),n.Mb(6,"div",5),n.Mb(7,"div",6),n.Mb(8,"div",7),n.Mb(9,"label"),n.bc(10,"Date From"),n.Lb(),n.Mb(11,"input",8),n.Tb("ngModelChange",(function(b){return a.dateFrom=b})),n.Lb(),n.Lb(),n.Lb(),n.Mb(12,"div",6),n.Mb(13,"div",7),n.Mb(14,"label"),n.bc(15,"EmployeeId"),n.Lb(),n.Mb(16,"input",9),n.Tb("ngModelChange",(function(b){return a.EmployeeId=b})),n.Lb(),n.Lb(),n.Lb(),n.Mb(17,"div",10),n.Mb(18,"button",11),n.Tb("click",(function(){return a.GetPaySlip()})),n.bc(19," View "),n.Lb(),n.Lb(),n.Lb(),n.Mb(20,"div",0),n.Mb(21,"div",12),n.Mb(22,"div",13),n.Mb(23,"div",14),n.bc(24,"Salary Slip# :"),n.Lb(),n.Mb(25,"div",14),n.bc(26),n.Lb(),n.Lb(),n.Mb(27,"div",13),n.Mb(28,"div",15),n.bc(29,"Salary Slip# :"),n.Lb(),n.Mb(30,"div",15),n.bc(31),n.Lb(),n.Lb(),n.Mb(32,"div",13),n.Mb(33,"div",15),n.bc(34,"Employee Name :"),n.Lb(),n.Mb(35,"div",15),n.bc(36),n.Lb(),n.Lb(),n.Mb(37,"div",13),n.Mb(38,"div",15),n.bc(39,"Department :"),n.Lb(),n.Mb(40,"div",15),n.bc(41),n.Lb(),n.Lb(),n.Lb(),n.Kb(42,"div",16),n.Mb(43,"div",16),n.Mb(44,"div"),n.bc(45),n.Lb(),n.Mb(46,"div"),n.bc(47),n.Lb(),n.Mb(48,"div"),n.bc(49),n.Lb(),n.Lb(),n.Lb(),n.Mb(50,"div",0),n.Mb(51,"div",17),n.Mb(52,"div"),n.bc(53),n.Lb(),n.Lb(),n.Mb(54,"div",17),n.Mb(55,"div"),n.bc(56),n.Lb(),n.Lb(),n.Mb(57,"div",17),n.Mb(58,"div"),n.bc(59),n.Lb(),n.Lb(),n.Mb(60,"div",17),n.Mb(61,"div"),n.bc(62),n.Lb(),n.Lb(),n.Mb(63,"div",17),n.Mb(64,"div"),n.bc(65),n.Lb(),n.Lb(),n.Lb(),n.Mb(66,"div",0),n.Mb(67,"div",18),n.Mb(68,"div"),n.bc(69),n.Lb(),n.Lb(),n.Mb(70,"div",18),n.Mb(71,"div"),n.bc(72),n.Lb(),n.Lb(),n.Lb(),n.Mb(73,"div",0),n.Mb(74,"div",17),n.Mb(75,"div"),n.bc(76),n.Lb(),n.Lb(),n.Mb(77,"div",17),n.Mb(78,"div"),n.bc(79),n.Lb(),n.Lb(),n.Mb(80,"div",17),n.Mb(81,"div"),n.bc(82),n.Lb(),n.Lb(),n.Mb(83,"div",17),n.Mb(84,"div"),n.bc(85),n.Lb(),n.Lb(),n.Mb(86,"div",17),n.Mb(87,"div"),n.bc(88),n.Lb(),n.Lb(),n.Lb(),n.Mb(89,"div",0),n.Mb(90,"div",17),n.Mb(91,"div"),n.bc(92),n.Lb(),n.Lb(),n.Mb(93,"div",17),n.Mb(94,"div"),n.bc(95),n.Lb(),n.Lb(),n.Mb(96,"div",17),n.Mb(97,"div"),n.bc(98),n.Lb(),n.Lb(),n.Mb(99,"div",17),n.Mb(100,"div"),n.bc(101),n.Lb(),n.Lb(),n.Mb(102,"div",17),n.Mb(103,"div"),n.bc(104),n.Lb(),n.Lb(),n.Lb(),n.Mb(105,"div",0),n.Mb(106,"div",1),n.Mb(107,"div",19),n.Mb(108,"div"),n.bc(109),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb()),2&b&&(n.zb(11),n.Vb("ngModel",a.dateFrom),n.zb(5),n.Vb("ngModel",a.EmployeeId),n.zb(10),n.cc(a.ProcessId),n.zb(5),n.cc(a.ProcessId),n.zb(5),n.cc(a.EmployeeName),n.zb(5),n.cc(a.DepartmentName),n.zb(4),n.dc("Employee Code : ",a.EmployeeCode,""),n.zb(2),n.dc("Branch : ",a.BranchName,""),n.zb(2),n.dc("Salary Of Month : ",a.Date,""),n.zb(4),n.dc("present days : ",a.PresentDays,""),n.zb(3),n.dc("Absent: ",a.Absent,""),n.zb(3),n.dc("Late: ",a.Lates,""),n.zb(3),n.dc("Over Time: ",a.OverTimeSalary,""),n.zb(3),n.dc("Worked hours: ",a.HoursWorked,""),n.zb(4),n.dc("Leaves: ",a.Leaves,""),n.zb(3),n.dc("Half Days: ",a.HalfDays,""),n.zb(4),n.dc("Basic Pay: ",a.BasicPay,""),n.zb(3),n.dc("Total Allowance: ",a.TotalAllowance,""),n.zb(3),n.dc("Over Time: ",a.OverTimeSalary,""),n.zb(3),n.dc("Add Income: ",a.AddIncome,""),n.zb(3),n.dc("Total Earnings: ",a.TotalSalary,"s"),n.zb(4),n.dc("Loan: ",a.TotalLoan,""),n.zb(3),n.dc("advance: ",a.Advance,""),n.zb(3),n.dc("Tax: ",a.Tax,""),n.zb(3),n.dc("EOBI: ",a.EOBI,""),n.zb(3),n.dc("Total Deduction: ",a.TotalLoan+a.Advance+a.Tax+a.EOBI,""),n.zb(5),n.dc("Final Salary : ",a.FinalSalary,""))},directives:[c.a,c.f,c.h],styles:[".btn-default[_ngcontent-%COMP%]{margin-top:32px}"]}),d)}],s=((t=function b(){_classCallCheck(this,b)}).\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(b){return new(b||t)},imports:[[i.c.forChild(r)],i.c]}),t);e.d(a,"PayslipModule",(function(){return L}));var v,L=((v=function b(){_classCallCheck(this,b)}).\u0275mod=n.Hb({type:v}),v.\u0275inj=n.Gb({factory:function(b){return new(b||v)},providers:[],imports:[[o.b,c.e,s]]}),v)}}]);