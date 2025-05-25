import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  skillsbox : Array<any>= [
  {
    skillname :'nodejs',
    skillInfo :`<strong>nodejs</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'express',
    skillInfo :`<strong>express</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'mysql',
    skillInfo :`<strong>mysql</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'springboot',
    skillInfo :`<strong>springboot</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  }
 ]

 defaultskill : string ='express'
  constructor() { }

  ngOnInit(): void {
  }

  onClick(skill :any){
    this.defaultskill=skill.skillname
  }
}
