import { Component, OnInit } from '@angular/core';
import { AllcatModel } from '../home/Allcat.model';
import { Router } from '@angular/router';
import { AllcategoriesService } from 'src/app/allcategories.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks:AllcatModel[];

  constructor(private drinkService:AllcategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.drinkService.getdrink().subscribe((data)=>{
      this.drinks=JSON.parse(JSON.stringify(data));
    })
  }
  deleteRecipie(recipie:any)
  {
    this.drinkService.deleteRecipie(recipie._id)
      .subscribe((data) => {
        this.drinks = this.drinks.filter(r => r !== recipie);
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
 