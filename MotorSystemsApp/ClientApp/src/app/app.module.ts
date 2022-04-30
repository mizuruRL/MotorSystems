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
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
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
import { ServiceEditComponent } from './service/service-edit/service-edit.component';
import { WorkerService } from './services/worker.service';
import { ClientService } from './services/client.service';
import { WorkerGuard } from './worker/worker.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { ServiceItemAddComponent } from './service/service-item-add/service-item-add.component';
import { UserManagementComponent, UserManagementDialog } from './user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
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
    ServiceEditComponent,
    NotAuthorizedComponent,
    ServiceDetailsComponent,
    ServiceItemAddComponent,
    UserManagementComponent,
    UserManagementDialog,
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
      { path: 'products', component: ProductsComponent },
      { path: 'product/create', component: ProductCreateComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'products/add/:id', component: ProductAddComponent },
      { path: 'products/remove/:id', component: ProductRemoveComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/:id', component: OrderDetailsComponent },
      { path: 'order/create', component: OrderCreateComponent },
      { path: 'worker', component: WorkerMenuComponent, canActivate: [AuthorizeGuard, /*WorkerGuard*/] },
      { path: 'services-client', component: ServicesClientComponent, canActivate: [AuthorizeGuard] },
      { path: 'services-worker', component: ServicesWorkerComponent, canActivate: [AuthorizeGuard] },
      { path: 'service-request', component: ServiceRequestComponent },
      { path: 'service-edit/:id', component: ServiceEditComponent },
      { path: 'service-details/:id', component: ServiceDetailsComponent },
      { path: 'not-authorized', component: NotAuthorizedComponent },
      { path: 'user-management', component: UserManagementComponent },
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    ProductsService, OrdersService, ServicesService, AuthorizeGuard, VehiclesService, WorkerService, WorkerGuard, ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
