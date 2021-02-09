import { Component, OnInit } from '@angular/core';
import { AllcategoriesService } from 'src/app/allcategories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  recipieItem= {
    Id :'',
    image:'',
    title:'',
    time:'',
    ingredient:'',
    instruction:''}
    


  constructor(private allctgService:AllcategoriesService,private router:Router) { }

  ngOnInit(): void {
    let Id = localStorage.getItem("Id");
    this.allctgService.getctgs(Id).subscribe((data)=>{
      this.recipieItem=JSON.parse(JSON.stringify(data));
  })
  }

  editRecipie()
  {    
    this.allctgService.editRecipie(this.recipieItem);   
    
    this.router.navigate(['/dashboard/home']);
  }
}
