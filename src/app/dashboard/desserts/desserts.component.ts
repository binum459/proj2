import { Component, OnInit } from '@angular/core';
import { AllcatModel } from '../home/Allcat.model';
import { AllcategoriesService } from 'src/app/allcategories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
  desserts:AllcatModel[];

  constructor(private dessertService:AllcategoriesService, private router:Router) { }

  ngOnInit(): void {

    this.dessertService.getdsrt().subscribe((data)=>{
      this.desserts=JSON.parse(JSON.stringify(data));
    })

  }
  deleteRecipie(recipie:any)
  {
    this.dessertService.deleteRecipie(recipie._id)
      .subscribe((data) => {
        this.desserts = this.desserts.filter(r => r !== recipie);
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
