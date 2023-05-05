import { Component, OnInit } from '@angular/core';
import { Iplayers } from '../Shared/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
playersInfo :Iplayers[] =[
  {
fName : "Virat",
lName : "Kohli",
nickName : " Chiku",
jersynum :  18,
age   : 34,
email :  "viratkohli18@gmail.com"
},
{
fName : "Rohit",
lName : "Sharma",
nickName : " Hit-Man",
jersynum :  45,
age    : 35,
email :  "rohitsharma45@gmail.com"
},
{
fName : "Sachin",
lName : "Tendulkar",
nickName : "Master-Blaster",
jersynum :  10,
age   : 49,
email :  "sachint10@gmail.com"
},
{
fName : "Yuvraj",
lName : "Singh",
nickName : "Yuvi",
jersynum :  12,
age   : 40,
email :  "yuvis12@gmail.com"
},
{
fName : "Hardik",
lName : "Pandya",
nickName : "Hairy",
jersynum :  33,
age   : 29,
email :  "hardikp29@gmail.com"
}  
]
  constructor() { }

  ngOnInit(): void {
  }

}
