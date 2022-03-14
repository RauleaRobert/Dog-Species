import { Directive , Input, ElementRef, Renderer2, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight') searchedWord: string =''; // searchedWord
  
  name: string = ''

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['searchedWord'].firstChange){
      this.replaceWithHighlight(this.searchedWord.toLocaleLowerCase(), this.el.nativeElement.innerText.toLocaleLowerCase())
      
    }
  }

  replaceWithHighlight(searchWord: string, element: string){
    if(searchWord){
      if(element !== ""){
        // this.divideSubBreeds(element); -> Please ignore this changes in commit
        // console.log(this.divideSubBreeds(element));
        element = element.replace(searchWord , '<span class="myClass" >' + searchWord + '</span>' );
        this.changeText(this.capitalizeFirstLetter(element))
      }
    }else {
      this.deleteSpanClass(this.el.nativeElement.children);
    }
  } 

  deleteSpanClass(htmlCollection: any){
    for(let i =0; i < htmlCollection.length; i++){
      if(htmlCollection[i].tagName === 'SPAN'){
        this.removeCls(htmlCollection[i]) 
      }
    }
  }

  // -> Please ignore following changes in commit

  // divideSubBreeds(elements: string){ // first element is the brees and the rest are the SubBreeds 
  //   let subBreedsList = elements.split(" ");
  //   return this.removeFirstElement(subBreedsList);
  // }

  // removeFirstElement(arr : any){
  //   arr.shift();
  //   return arr;
  // }

  capitalizeFirstLetter(string : string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  changeText( text: string) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', text)
  }

  removeCls(element: string){
    this.renderer.removeClass( element , 'myClass')
  }
}