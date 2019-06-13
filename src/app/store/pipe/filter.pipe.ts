import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
       const resultPosts = [];
       for(const pro of value){
         if(pro.nombre.indexOf(arg) >  -1){
           resultPosts.push(pro)
         };
       };
       return resultPosts;
  }

}
