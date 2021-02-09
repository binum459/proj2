import { Component, OnInit } from '@angular/core';
import { AllcatModel } from './Allcat.model';
import { AllcategoriesService } from 'src/app/allcategories.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allctgs:AllcatModel[]

  constructor(private allctgService:AllcategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.allctgService.getctg().subscribe((data)=>{
      this.allctgs=JSON.parse(JSON.stringify(data));
    })
     
  }
 
  
  deleteRecipie(recipie:any)
  {
    this.allctgService.deleteRecipie(recipie._id)
      .subscribe((data) => {
        this.allctgs = this.allctgs.filter(r => r !== recipie);
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
