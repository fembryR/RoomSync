import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Building } from '../../models/building';
import { BuildingService } from '../../services/building.service';

@Component({
  selector: 'app-buildings',
  imports: [CommonModule, FormsModule],
  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.scss'
})
export class BuildingsComponent implements OnInit {

  nombre = '';
  direccion = '';
  descripcion = '';

  buildings$!: Observable<Building[]>;

  constructor(
    private buildingService: BuildingService
  ) {}

  ngOnInit(): void {
    this.buildings$ = this.buildingService.getBuildings();
  }

  async saveBuilding() {

    if (
      !this.nombre ||
      !this.direccion
    ) {
      return;
    }

    await this.buildingService.addBuilding({
      nombre: this.nombre,
      direccion: this.direccion,
      descripcion: this.descripcion,
      createdAt: new Date()
    });

    this.nombre = '';
    this.direccion = '';
    this.descripcion = '';
  }

}