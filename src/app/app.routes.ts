import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { BuildingsComponent } from './pages/buildings/buildings.component';
import { RoomieDashboardComponent } from './pages/roomie-dashboard/roomie-dashboard.component';
import { RoomiePaymentsComponent } from './pages/roomie-payments/roomie-payments.component';
import { adminGuard } from './guards/admin.guard';
import { roomieGuard } from './guards/roomie.guard';
import { PaymentsComponent } from './pages/payments/payments.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TicketsComponent } from './pages/tickets/tickets.component';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [adminGuard]
    },
    {
        path: 'properties',
        component: PropertiesComponent
    },
    {
        path: 'expenses',
        component: ExpensesComponent
    },
    {
        path: 'buildings',
        component: BuildingsComponent
    },
    {
        path: 'roomie-dashboard',
        component: RoomieDashboardComponent,
        canActivate: [roomieGuard]
    },
    {
        path: 'roomie-payments',
        component: RoomiePaymentsComponent,
        canActivate: [roomieGuard]
    },
    {
        path: 'payments',
        component: PaymentsComponent,
        canActivate: [adminGuard]
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'tickets',
        component: TicketsComponent
    }
    
];