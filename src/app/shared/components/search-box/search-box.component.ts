import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?:Subscription;

  @ViewChild('searchbox')
  public searchbox!: ElementRef<HTMLInputElement> 

  @Input()
  public placeholder: string = "";

  @Output()
  public tag = new EventEmitter<string>();

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime( 1000 )
    )
    .subscribe( value => {
        this.tag.emit( value )
    })
    
  }

  ngOnDestroy(): void {

    this.debouncerSuscription?.unsubscribe();

    
  }

  onValue():void{
    return this.tag.emit(this.searchbox.nativeElement.value);
  }

  onKeyPress(  ): void{
    this.debouncer.next( this.searchbox.nativeElement.value);
  }

}
