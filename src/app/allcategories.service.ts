
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class AllcategoriesService {

item={Id :'',
    image:'',
    title:'',
    time:'',
    ingredient:'',
    instruction:''

}
  constructor(private http:HttpClient) { }
  getctgs(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getctg(){
    return this.http.get('http://localhost:3000/home')
  }
  getsnack(){
    return this.http.get('http://localhost:3000/snacks')
  }
  getdrink(){
    return this.http.get('http://localhost:3000/drinks')
  }
  getdsrt(){
    return this.http.get('http://localhost:3000/desserts')
  }
  getrecipie(){
    return this.http.get('http://localhost:3000/recipies')
  }

  deleteRecipie(id:any)
  {
    return this.http.delete("http://localhost:3000/remove/"+id)
  }
  editRecipie(recipie:any)
  {
    
    return this.http.put("http://localhost:3000/update",recipie)
    .subscribe(data =>{console.log(data)})
  }
  newRecipie(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"recipie":item})
    .subscribe(data =>{console.log(data)})
  }
}
