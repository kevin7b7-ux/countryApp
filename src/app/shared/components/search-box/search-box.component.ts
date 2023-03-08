import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @ViewChild('searchbox')
  public searchbox!: ElementRef<HTMLInputElement> 

  @Input()
  public placeholder: string = "";

  @Output()
  public tag = new EventEmitter<string>();

  onValue():void{
    return this.tag.emit(this.searchbox.nativeElement.value)
  }

}
