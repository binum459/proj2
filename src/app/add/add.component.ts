import { Component, OnInit } from '@angular/core';
import { AllcategoriesService } from 'src/app/allcategories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  recipieItem= {
    Id :'',
    image:'',
    title:'',
    time:'',
    ingredient:'',
    instruction:''}

  constructor(private allctgService:AllcategoriesService,private router:Router) { }

  ngOnInit(): void {
  }
  AddRecipie()
  {    
    this.allctgService.newRecipie(this.recipieItem);
    this.router.navigate(['/dashboard/home']);
  }

}
