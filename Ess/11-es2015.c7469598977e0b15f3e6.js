(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v53j:function(i,b,a){"use strict";a.r(b);var e=a("JqCM"),t=a("3Pt+"),d=a("ofXK"),c=a("tyNb"),o=a("fXoL"),s=a("p6+y");function n(i,b){if(1&i&&(o.Ob(0,"div",1),o.Ob(1,"div",21),o.Ob(2,"p"),o.ic(3),o.Nb(),o.Nb(),o.Nb()),2&i){const i=o.Xb();o.Ab(3),o.jc(i.message)}}const l=[{path:"",component:(()=>{class i{constructor(i,b){this._apiService=i,this.spinner=b,this.EmployeeId="39",this.dateFrom="2020-05-01",this.message="No data to display"}ngOnInit(){}GetPaySlip(){this.spinner.show(),this._apiService.GetPaySlip(this.dateFrom,this.EmployeeId).subscribe(i=>{this.data=i,this.spinner.hide(),0===this.data.length&&(this.message="No record found"),console.log(JSON.stringify(this.data)),this.ProcessId=this.data.ProcessId,this.EmployeeName=this.data.EmployeeName,this.DepartmentName=this.data.DepartmentName,this.BasicPay=this.data.BasicPay,this.EmployeeCode=this.data.EmployeeCode,this.BranchName=this.data.BranchName,this.Date=this.data.Date,this.PresentDays=this.data.PresentDays,this.Absent=this.data.Absent,this.Lates=this.data.Lates,this.WorkingDays=this.data.WorkingDays,this.Leaves=this.data.ProcessLeavesId,this.EarlyGones=this.data.EarlyGones,this.HalfDays=this.data.HalfDays,this.TotalAllowance=this.data.TotalAllowance,this.OverTimeSalary=this.data.OverTimeSalary,this.AddIncome=this.data.AddIncome,this.TotalSalary=this.data.TotalSalary,this.TotalLoan=this.data.TotalLoan,this.Advance=this.data.Advance,this.Tax=this.data.Tax,this.EOBI=this.data.EOBI,this.FinalSalary=this.data.FinalSalary,this.HoursWorked=this.data.HoursWorked},i=>{this.spinner.hide(),console.log(i)})}}return i.\u0275fac=function(b){return new(b||i)(o.Lb(s.a),o.Lb(e.c))},i.\u0275cmp=o.Fb({type:i,selectors:[["app-payslip"]],decls:170,vars:28,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","col-12",4,"ngIf"],[1,"row","mb-3"],[1,"col-xs-4","col-sm-4","col-md-4","col-lg-4"],[1,"form-group"],["type","text","placeholder","date from",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","employeeId",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xs-2","col-sm-2","col-md-2","col-lg-2"],["type","button",1,"btn","btn-default","btn-sm",3,"click"],[1,"col-12","col-sm-12","col-md-6","col-lg-3"],[1,"d-flex","justify-content-between"],[1,"p-1","data-lab"],[1,"col-6","col-sm-6","col-md-3","col-lg-4"],[1,"row","mt-2"],[1,"d-flex","justify-content-end"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-clip-rotate",3,"fullScreen"],[2,"color","white"],[1,"text-center","p-3"]],template:function(i,b){1&i&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"div",2),o.Ob(3,"div",3),o.ic(4," Payslip "),o.Nb(),o.Ob(5,"div",4),o.hc(6,n,4,1,"div",5),o.Ob(7,"div",6),o.Ob(8,"div",7),o.Ob(9,"div",8),o.Ob(10,"label"),o.ic(11,"Date From"),o.Nb(),o.Ob(12,"input",9),o.Vb("ngModelChange",(function(i){return b.dateFrom=i})),o.Nb(),o.Nb(),o.Nb(),o.Ob(13,"div",7),o.Ob(14,"div",8),o.Ob(15,"label"),o.ic(16,"EmployeeId"),o.Nb(),o.Ob(17,"input",10),o.Vb("ngModelChange",(function(i){return b.EmployeeId=i})),o.Nb(),o.Nb(),o.Nb(),o.Ob(18,"div",11),o.Ob(19,"button",12),o.Vb("click",(function(){return b.GetPaySlip()})),o.ic(20," View "),o.Nb(),o.Nb(),o.Nb(),o.Ob(21,"div",0),o.Ob(22,"div",13),o.Ob(23,"div",14),o.Ob(24,"div",15),o.ic(25,"Salary Slip# :"),o.Nb(),o.Ob(26,"div",15),o.ic(27),o.Nb(),o.Nb(),o.Ob(28,"div",14),o.Ob(29,"div",15),o.ic(30,"Employee Name :"),o.Nb(),o.Ob(31,"div",15),o.ic(32),o.Nb(),o.Nb(),o.Ob(33,"div",14),o.Ob(34,"div",15),o.ic(35,"Department :"),o.Nb(),o.Ob(36,"div",15),o.ic(37),o.Nb(),o.Nb(),o.Nb(),o.Ob(38,"div",13),o.Ob(39,"div",14),o.Ob(40,"div",15),o.ic(41,"Employee Code :"),o.Nb(),o.Ob(42,"div",15),o.ic(43),o.Nb(),o.Nb(),o.Ob(44,"div",14),o.Ob(45,"div",15),o.ic(46,"Branch :"),o.Nb(),o.Ob(47,"div",15),o.ic(48),o.Nb(),o.Nb(),o.Ob(49,"div",14),o.Ob(50,"div",15),o.ic(51,"Salary Of Month :"),o.Nb(),o.Ob(52,"div",15),o.ic(53),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(54,"div",0),o.Ob(55,"div",16),o.Ob(56,"div",14),o.Ob(57,"div",15),o.ic(58,"present days :"),o.Nb(),o.Ob(59,"div",15),o.ic(60),o.Nb(),o.Nb(),o.Nb(),o.Ob(61,"div",16),o.Ob(62,"div",14),o.Ob(63,"div",15),o.ic(64,"Absent :"),o.Nb(),o.Ob(65,"div",15),o.ic(66),o.Nb(),o.Nb(),o.Nb(),o.Ob(67,"div",16),o.Ob(68,"div",14),o.Ob(69,"div",15),o.ic(70,"Late:"),o.Nb(),o.Ob(71,"div",15),o.ic(72),o.Nb(),o.Nb(),o.Nb(),o.Ob(73,"div",16),o.Ob(74,"div",14),o.Ob(75,"div",15),o.ic(76,"Over Time:"),o.Nb(),o.Ob(77,"div",15),o.ic(78),o.Nb(),o.Nb(),o.Nb(),o.Ob(79,"div",16),o.Ob(80,"div",14),o.Ob(81,"div",15),o.ic(82,"Worked hours:"),o.Nb(),o.Ob(83,"div",15),o.ic(84),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(85,"div",17),o.Ob(86,"div",16),o.Ob(87,"div",14),o.Ob(88,"div",15),o.ic(89,"Leaves :"),o.Nb(),o.Ob(90,"div",15),o.ic(91),o.Nb(),o.Nb(),o.Nb(),o.Ob(92,"div",16),o.Ob(93,"div",14),o.Ob(94,"div",15),o.ic(95,"Half Days :"),o.Nb(),o.Ob(96,"div",15),o.ic(97),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(98,"div",17),o.Ob(99,"div",16),o.Ob(100,"div",14),o.Ob(101,"div",15),o.ic(102,"Basic Pay:"),o.Nb(),o.Ob(103,"div",15),o.ic(104),o.Nb(),o.Nb(),o.Nb(),o.Ob(105,"div",16),o.Ob(106,"div",14),o.Ob(107,"div",15),o.ic(108,"Total Allowance :"),o.Nb(),o.Ob(109,"div",15),o.ic(110),o.Nb(),o.Nb(),o.Nb(),o.Ob(111,"div",16),o.Ob(112,"div",14),o.Ob(113,"div",15),o.ic(114,"Over Time:"),o.Nb(),o.Ob(115,"div",15),o.ic(116),o.Nb(),o.Nb(),o.Nb(),o.Ob(117,"div",16),o.Ob(118,"div",14),o.Ob(119,"div",15),o.ic(120,"Add Income:"),o.Nb(),o.Ob(121,"div",15),o.ic(122),o.Nb(),o.Nb(),o.Nb(),o.Ob(123,"div",16),o.Ob(124,"div",14),o.Ob(125,"div",15),o.ic(126,"Total Earnings:"),o.Nb(),o.Ob(127,"div",15),o.ic(128),o.Nb(),o.Nb(),o.Nb(),o.Ob(129,"div",16),o.Ob(130,"div",14),o.Ob(131,"div",15),o.ic(132,"Loan:"),o.Nb(),o.Ob(133,"div",15),o.ic(134),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(135,"div",0),o.Ob(136,"div",16),o.Ob(137,"div",14),o.Ob(138,"div",15),o.ic(139,"advance:"),o.Nb(),o.Ob(140,"div",15),o.ic(141),o.Nb(),o.Nb(),o.Nb(),o.Ob(142,"div",16),o.Ob(143,"div",14),o.Ob(144,"div",15),o.ic(145,"Tax:"),o.Nb(),o.Ob(146,"div",15),o.ic(147),o.Nb(),o.Nb(),o.Nb(),o.Ob(148,"div",16),o.Ob(149,"div",14),o.Ob(150,"div",15),o.ic(151,"EOBI:"),o.Nb(),o.Ob(152,"div",15),o.ic(153),o.Nb(),o.Nb(),o.Nb(),o.Ob(154,"div",16),o.Ob(155,"div",14),o.Ob(156,"div",15),o.ic(157," Total Deduction: "),o.Nb(),o.Ob(158,"div",15),o.ic(159),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(160,"div",0),o.Ob(161,"div",1),o.Ob(162,"div",18),o.Ob(163,"div",15),o.ic(164," Final Salary : "),o.Nb(),o.Ob(165,"div",15),o.ic(166),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(167,"ngx-spinner",19),o.Ob(168,"p",20),o.ic(169," Loading... "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&i&&(o.Ab(6),o.ac("ngIf",!b.data.length),o.Ab(6),o.ac("ngModel",b.dateFrom),o.Ab(5),o.ac("ngModel",b.EmployeeId),o.Ab(10),o.jc(b.ProcessId),o.Ab(5),o.jc(b.EmployeeName),o.Ab(5),o.jc(b.DepartmentName),o.Ab(6),o.jc(b.EmployeeCode),o.Ab(5),o.jc(b.BranchName),o.Ab(5),o.jc(b.Date),o.Ab(7),o.jc(b.PresentDays),o.Ab(6),o.jc(b.Absent),o.Ab(6),o.jc(b.Lates),o.Ab(6),o.jc(b.OverTimeSalary),o.Ab(6),o.jc(b.HoursWorked),o.Ab(7),o.jc(b.Leaves),o.Ab(6),o.jc(b.HalfDays),o.Ab(7),o.jc(b.BasicPay),o.Ab(6),o.jc(b.TotalAllowance),o.Ab(6),o.jc(b.OverTimeSalary),o.Ab(6),o.jc(b.AddIncome),o.Ab(6),o.jc(b.TotalSalary),o.Ab(6),o.jc(b.TotalLoan),o.Ab(7),o.jc(b.Advance),o.Ab(6),o.jc(b.Tax),o.Ab(6),o.jc(b.EOBI),o.Ab(6),o.kc(" ",b.TotalLoan+b.Advance+b.Tax+b.EOBI," "),o.Ab(7),o.kc(" ",b.FinalSalary," "),o.Ab(1),o.ac("fullScreen",!0))},directives:[d.i,t.a,t.f,t.h,e.a],styles:[".btn-default[_ngcontent-%COMP%]{margin-top:32px}.data-lab[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}"]}),i})()}];let v=(()=>{class i{}return i.\u0275mod=o.Jb({type:i}),i.\u0275inj=o.Ib({factory:function(b){return new(b||i)},imports:[[c.c.forChild(l)],c.c]}),i})();a.d(b,"PayslipModule",(function(){return O}));let O=(()=>{class i{}return i.\u0275mod=o.Jb({type:i}),i.\u0275inj=o.Ib({factory:function(b){return new(b||i)},providers:[],imports:[[d.b,t.e,e.b,v]]}),i})()}}]);