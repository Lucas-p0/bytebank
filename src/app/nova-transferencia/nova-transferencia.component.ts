import { Component, Output } from '@angular/core';
import * as EventEmitter from 'events';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.components.css'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  transferir() {
    console.log('Soliciatada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
  }
}
