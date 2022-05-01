import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './services/orders.service';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductRemoveComponent } from './product/product-remove/product-remove.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { WorkerMenuComponent } from './worker/worker-menu/worker-menu.component';
import { OrderDeliveredDialogComponent } from './order/order-delivered-dialog/order-delivered-dialog.component';
import { OrderCancelledDialogComponent } from './order/order-cancelled-dialog/order-cancelled-dialog.component';
import { ServicesClientComponent } from './services-client/services-client.component';
import { ServicesService } from './services/services.service';
import { ServiceRequestComponent } from './service/service-request/service-request.component';
import { VehiclesService } from './services/vehicles.service';
import { ServicesWorkerComponent } from './services-worker/services-worker.component';
import { WorkerService } from './services/worker.service';
import { ClientService } from './services/client.service';
import { WorkerGuard } from './worker/worker.guard';
import { AdminGuard } from './admin/admin.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { ServiceItemAddComponent } from './service/service-item-add/service-item-add.component';
import { UserManagementComponent, UserManagementDialog } from './user-management/user-management.component';
import { ServiceConcludedDialogComponent } from './service/service-concluded-dialog/service-concluded-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    OrdersComponent,
    ProductAddComponent,
    ProductRemoveComponent,
    OrderDetailsComponent,
    OrderCreateComponent,
    WorkerMenuComponent,
    OrderDeliveredDialogComponent,
    OrderCancelledDialogComponent,
    ServicesClientComponent,
    ServiceRequestComponent,
    ServicesWorkerComponent,
    NotAuthorizedComponent,
    ServiceDetailsComponent,
    ServiceItemAddComponent,
    UserManagementComponent,
    UserManagementDialog,
    ServiceConcludedDialogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'products', component: ProductsComponent, canActivate: [WorkerGuard] },
      { path: 'products/create', component: ProductCreateComponent, canActivate: [WorkerGuard] },
      { path: 'products/:id', component: ProductDetailsComponent, canActivate: [WorkerGuard] },
      { path: 'products/add/:id', component: ProductAddComponent, canActivate: [WorkerGuard] },
      { path: 'products/remove/:id', component: ProductRemoveComponent, canActivate: [WorkerGuard] },
      { path: 'orders', component: OrdersComponent, canActivate: [WorkerGuard]},
      { path: 'orders/:id', component: OrderDetailsComponent, canActivate: [WorkerGuard] },
      { path: 'order/create', component: OrderCreateComponent, canActivate: [AdminGuard] },
      { path: 'worker', component: WorkerMenuComponent, canActivate: [WorkerGuard]},
      { path: 'services-client', component: ServicesClientComponent, canActivate: [AuthorizeGuard] },
      { path: 'services-worker', component: ServicesWorkerComponent, canActivate: [WorkerGuard] },
      { path: 'service-request', component: ServiceRequestComponent, canActivate: [AuthorizeGuard]},
      { path: 'not-authorized', component: NotAuthorizedComponent },
      { path: 'user-management', component: UserManagementComponent, canActivate: [AdminGuard] },
      { path: 'services/:id', component: ServiceDetailsComponent, canActivate: [AuthorizeGuard] },
      { path: 'service-item-add/:id', component: ServiceItemAddComponent, canActivate: [WorkerGuard] },
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    ProductsService, OrdersService, ServicesService, AuthorizeGuard, VehiclesService, WorkerService, WorkerGuard, ClientService, AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
