import { Directive , Input, ElementRef, Renderer2, OnChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input() appHighlight: string =''; // searchedWord
  @Input() filtredList: string = ''; // filteredList
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnChanges(): void {
    this.replaceWithHighlight(this.appHighlight.toLocaleLowerCase(), this.filtredList)
  }

  replaceWithHighlight(searchWorld: string, list: string){
    if(searchWorld){
      list = list.replace(`${searchWorld}` , `${'<span class="myClass" >' + `${searchWorld}` + '</span>'}` );
      this.changeText(list)
    }else {
      this.changeText(this.filtredList)
    }
  } 

  changeText( list: string) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', list)
  }
}