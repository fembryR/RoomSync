import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-properties',
  imports: [CommonModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements OnInit {

  nombre = '';
  direccion = '';
  valorArriendo = 0;

  properties$!: Observable<Property[]>;

  constructor(
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.properties$ = this.propertyService.getProperties();
  }

  async saveProperty() {

    if (
      !this.nombre ||
      !this.direccion ||
      !this.valorArriendo
    ) {
      return;
    }

    await this.propertyService.addProperty({
      nombre: this.nombre,
      direccion: this.direccion,
      valorArriendo: this.valorArriendo,
      createdAt: new Date()
    });

    this.nombre = '';
    this.direccion = '';
    this.valorArriendo = 0;
  }
}