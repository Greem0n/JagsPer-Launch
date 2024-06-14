import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JagsPer';

  constructor(private renderer: Renderer2) {}

  // @ViewChild('dotsElement') dotsElement!: ElementRef;

  ngOnInit(): void {
    // this.startAnimation();
  }

  // startAnimation(): void {
  //   console.log('esta entrando');
  //   const dotsArray = this.dotsElement.nativeElement.textContent;
  //   for (let i = 0; i < dotsArray.length; i++) {
  //     if (i % 2 == 0) {
  //       this.dotsElement.nativeElement.textContent += '.';
  //     }
  //     const newSpan = this.renderer.createElement('span');
  //     const text = this.renderer.createText('.');
  //     this.renderer.appendChild(newSpan, text);
  //     this.renderer.addClass(newSpan, 'dot_moving');
  //     setTimeout(() => {}, 500);
  //     this.renderer.appendChild(this.dotsElement.nativeElement, newSpan);
  //   }
  // }
}
