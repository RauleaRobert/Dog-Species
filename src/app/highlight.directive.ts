import { Directive , Input, ElementRef, Renderer2, OnChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input() appHighlight: string =''; // searchedWord
  @Input() filtredList: string = '';
  finalStr:string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  

  ngOnChanges(): void {
    if(this.appHighlight){

      let str = this.filtredList.split(this.appHighlight)

      if(str[0].length === 0){

        this.finalStr = '<span class="myClass" >' 
                      + `${this.appHighlight.charAt(0).toUpperCase()}` 
                      + `${this.appHighlight.slice(1)}`
                      + '</span>' 
                      + `${str[1]}`;
      }
      if(str[0].length > 0){

        // this.finalStr =  str[0] + '<span class="myClass" >' + this.appHighlight + '</span>' + `${str[1]}`;
        // console.log(this.finalStr);

      }
        

        this.changeText(this.finalStr)

    }
  }
  changeText( finalStr: string) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', finalStr )
  }
}
