import { Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-bootstrap-app';

  @ViewChild('openModal', { static: true }) openModal: ElementRef;



  ngOnInit() {
    
  }
  ngAfterViewInit () {
    setTimeout(() =>{
      this.openModal.nativeElement.click();
    }, 5000)
  }

  // public ngOnInit() {  
  //   $(window).on('load',function(){
  //     $('#exampleModal').modal('show');
  // });


  //   setTimeout(function () {
  //     $('.modal').show();
  //     setTimeout(function () {
  //       $("modal").hide();
  //     }, 7000); 
  //   },4000);
  // }

}  
