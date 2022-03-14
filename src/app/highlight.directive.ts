import { Directive , Input, ElementRef, Renderer2, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight') searchedWord: string =''; // searchedWord

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.el.nativeElement.innerText);
    if(!changes['searchedWord'].firstChange){
      this.replaceWithHighlight(this.searchedWord.toLocaleLowerCase(), this.el.nativeElement.innerText.toLocaleLowerCase())
      
    }
  }

  replaceWithHighlight(searchWord: string, element: string){
    
    if(searchWord){
      if(element !== ""){
        let subBreedItems = this.divideSubBreeds(this.el.nativeElement.innerText); 
          element = element.replace(searchWord , '<span class="myClass" >' + searchWord + '</span>' );
          element = element.split('\n')[0].toString();
            if(subBreedItems.length > 0){
              element = element + '<ul>';
                for(let i = 0; i < subBreedItems.length; i++){
                  element = element + '<li>'  + subBreedItems[i] + '</li>';
                };
              element = element + '</ul>';
           };
        this.changeText(this.capitalizeFirstLetter(element));
      }
    }else {
      this.deleteSpanClass(this.el.nativeElement.children);
    }
  } 

  deleteSpanClass(htmlCollection: any){
    for(let i =0; i < htmlCollection.length; i++){
      if(htmlCollection[i].tagName === 'SPAN'){
        this.removeCls(htmlCollection[i]);
      }
    }
  }

  divideSubBreeds(elements: string){ // first element is the brees and the rest are the SubBreeds 
    let subBreedsList = elements.split("\n");
    return this.removeFirstElement(subBreedsList);
  }

  removeFirstElement(arr : any){
    arr.shift();
    return arr;
  }

  capitalizeFirstLetter(string : string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  changeText( text: string) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', text);
  }

  removeCls(element: string){
    this.renderer.removeClass( element , 'myClass');
  }
}