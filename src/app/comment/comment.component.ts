import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
comment='';
comm='';
postComment=[];
postComm=[];
post(){
  this.postComment.push(this.comment);
  this.comment='';
  this.postComm .push(this.comm);
  this.comm='';
}
  constructor() { }

  ngOnInit(): void {
  }

}
