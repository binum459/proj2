import { Component, OnInit } from '@angular/core';
import { AllcatModel } from '../home/Allcat.model';
import { AllcategoriesService } from 'src/app/allcategories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  snacks:AllcatModel[];

  constructor(private snackService:AllcategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.snackService.getsnack().subscribe((data)=>{
      this.snacks=JSON.parse(JSON.stringify(data));
    })

  }
  deleteRecipie(recipie:any)
  {
    this.snackService.deleteRecipie(recipie._id)
      .subscribe((data) => {
        this.snacks = this.snacks.filter(r => r !== recipie);
      })
      }
      editRecipie(recipie:any)
      {
        localStorage.setItem("Id", recipie._id.toString());
        this.router.navigate(['update']);
    
      }

meal(){
  this.router.navigate(['/dashboard/recipies']);
}
 
}
