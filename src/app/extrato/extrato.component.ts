import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private serviceTransference: TransferenciaService) { }

  ngOnInit(): void {
    this.serviceTransference.todas().subscribe(
      (transferencias:Transferencia[])=>{
        console.table(transferencias);
        this.transferencias = transferencias;
      }
    );
  }

}
