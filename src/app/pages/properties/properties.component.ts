import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Property } from '../../models/property';
import { PropertyService } from '../../services/property.service';
import { Building } from '../../models/building';
import { BuildingService } from '../../services/building.service';

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

  buildings$!: Observable<Building[]>;

  buildingId = '';
  buildingName = '';

  constructor(
    private propertyService: PropertyService,
    private buildingService: BuildingService
  ) {}

  ngOnInit(): void {

    this.properties$ =
      this.propertyService.getProperties();

    this.buildings$ =
      this.buildingService.getBuildings();
  }

  async saveProperty() {

    if (
      !this.nombre ||
      !this.direccion ||
      !this.valorArriendo ||
      !this.buildingName
    ) {
      return;
    }

    await this.propertyService.addProperty({
      nombre: this.nombre,
      direccion: this.direccion,
      valorArriendo: this.valorArriendo,
      buildingId: '',
      buildingName: this.buildingName,
      createdAt: new Date()
    });

    this.nombre = '';
    this.direccion = '';
    this.valorArriendo = 0;
    this.buildingId = '';
    this.buildingName = '';
  }
}