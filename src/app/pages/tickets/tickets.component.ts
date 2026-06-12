import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Observable } from 'rxjs';

import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-tickets',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent implements OnInit {

  asunto = '';
  descripcion = '';

  tickets$!: Observable<Ticket[]>;

  constructor(
    private ticketService: TicketService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.tickets$ =
      this.ticketService.getTickets();
  }

  async saveTicket() {

    await this.ticketService.addTicket({
      asunto: this.asunto,
      descripcion: this.descripcion,
      creadoPor: 'Roomie',
      estado: 'Abierto'
    });

    this.asunto = '';
    this.descripcion = '';
  }

  goBack() {
    this.location.back();
  }

}