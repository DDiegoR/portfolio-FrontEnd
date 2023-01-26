import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'modal-certificados',
  templateUrl: './modal-certificados.component.html',
  styleUrls: ['./modal-certificados.component.css']
})
export class ModalCertificadosComponent {
  @Input() imagen!: string;
  
  // Cerrar haciendo click afuera
  @ViewChild('modalBack') modalBack!: ElementRef;
  public show = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if(this.modalBack && e.target === this.modalBack.nativeElement) {     //cuando el target coincide con modalBack
        this.show = false;
      }
    })
  }
  showModal() {
    this.show = true;
  }
  hideModal() {
    this.show = false;
  }
}
