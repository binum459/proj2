import { Component, OnInit } from '@angular/core';
import { AllcategoriesService } from 'src/app/allcategories.service';
import { Router } from '@angular/router';
import { AllcatModel } from '../home/Allcat.model';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {
  allctgs:AllcatModel[];

  constructor(private router:Router,private recipieService:AllcategoriesService) { }
  
  ngOnInit(): void {
    this.recipieService.getrecipie().subscribe((data)=>{
      this.allctgs=JSON.parse(JSON.stringify(data));
    })
  }
  

}
