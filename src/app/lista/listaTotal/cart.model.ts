//import{Injectable} from '@angular/core';
//import { Productos } from '../modelos/Productos';
//@Injectable()
//export class Cart{
  //  lines:CartLine[]=[];
    //itemCount: number =0;
    //cartPrice:number=0;
    //addLine(producto:Productos, quantity:number=1){

      //  let line =this.lines.find(predicate: line=> line.producto.tipo_producto===producto.tipo_producto);
       // if(line == undefined){
         //   line.quantity +=quantity;
        //}
        //else{
          //  this.lines.push(new CartLine(producto.quantity));
        //}
        //this.recalculate();
    //}
    //updateQuantity(producto:Productos, quantity:number){

      //  const line= this.lines.find( predicate: b =>b.producto.precio===producto.precio);
        
        //if(line !== undefined){
          //  line.quantity= quantity;
        //}
        //this.recalculate();
    //}
    //removeLine(id: number){
      //  const index = this.lines.finIndex(predicate: line=>line.producto_tipo===id);
        //this.lines.splice(index, deleteCount: 1);
    //}
    //private recalculate(){

      //  this.itemCount=0;
        //this.cartPrice=0;
        //this.lines.forEach(callbackfn: l=>{
        //this.itemCount += l.quantity;
        //this.cartPrice += (l.quantity * l.producto.precio);
        //}) ;

    //}
//}
//export class CartLine{
  //  Cart > recalculate() > callback forEach()
//}