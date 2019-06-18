import { Component } from '@angular/core';
import { item } from './app.interface';
import { cart } from './app.interface';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex6';
  id:any;
  total:number=0;

  items: item[]=[
    {
      
      title:'watch',
      cost: 400  
    },
    {
    
      title:'cap',
      cost: 100
        },
    {
      
      title:'wallet',
      cost: 300
    }
  ]

  carts: cart[]=[
   ]
  
  add(id:any){
    this.carts.push(this.items[id]);
    this.total=this.total+this.items[id].cost;
  }
  
  delete(item:any,n:number){
    this.carts.splice(n,1);
    // if(this.carts.length==0)
    // this.total=0;
    // else
    this.total=this.total-item.cost;
    
  }

}
