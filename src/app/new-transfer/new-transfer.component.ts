import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output()
  aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  constructor(private serviceTransference: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    const emitirValor: Transferencia = { valor: this.valor, destino: this.destino };

    this.serviceTransference.adicionar(emitirValor).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
      (error) => console.error(error));

  }


  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
