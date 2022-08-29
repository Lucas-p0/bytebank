import { Component, EventEmitter, Output } from '@angular/core';

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
    console.log('Valor',this.valor);
    console.log('Destino',this.destino);
    const valorEmitir = (this.valor, this.destino);
    this.aoTransferir.emit(valorEmitir);
  }
}
