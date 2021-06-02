import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

  img:string="https://images.unsplash.com/photo-1618338425935-7bc1c43d4faf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80";
  
  imgarr = [
    'https://images.unsplash.com/photo-1617915778714-b4ee8665aeb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80', 
    'https://images.unsplash.com/photo-1581175920817-d5712ad66e74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 
    'https://images.unsplash.com/photo-1614551171253-5f4ca3bb84e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  ];

  i:number = 0;

  interval=null;

  sstop = true;
  sshow = false;

  pre(){
   this.i-- ;
   if(this.i < 0 ) this.i = this.imgarr.length - 1 ;
   this.img = this.imgarr[this.i]; 
  }

  next(){
   this.i++ ;
   if(this.i >= this.imgarr.length ) this.i = 0 ;
   this.img = this.imgarr[this.i]; 
  }

 
  
  show(){
    this.interval = setInterval(() => {
      this.next()
    },1400);
    this.sshow= true;
    this.sstop= false;
  }

  stop(){
   if (this.interval){
     clearInterval(this.interval);
     this.sshow= false;
     this.sstop= true;
   }
  }

}
