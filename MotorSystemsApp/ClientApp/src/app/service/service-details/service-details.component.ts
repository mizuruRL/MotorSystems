import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { ProductsService } from '../../services/products.service';
import { Service, ServicesService } from '../../services/services.service';
import { ServiceConcludedDialogComponent } from '../service-concluded-dialog/service-concluded-dialog.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  public id: number | undefined;
  public service: Service | undefined;
  public userIsAssignedWorker: boolean = false;
  constructor(private userService: AuthorizeService, private prodService: ProductsService, public dialog: MatDialog, private route: ActivatedRoute, private sService: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sService.getService(this.id!).subscribe(res => {
      this.service = res;
      this.userService.getUser().subscribe(res => {
        if (res!.name == this.service!.assignedWorker) {
          this.userIsAssignedWorker = true;
        }
      })
    });
  }

  openServiceFinishedDialog(): void {
    const dialogRef = this.dialog.open(ServiceConcludedDialogComponent, {
      height: '200px',
      width: '450px',
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res.data) {
        this.removeProductsFromStock();
      }
      else {
        this.router.navigateByUrl('services-worker');
      }
    })
  }

  cancelService() {
    if (this.service) {
      this.service.state = "Cancelled"
      this.sService.updateService(this.service).subscribe(res => {
        this.router.navigateByUrl('services-worker');
      });
    }
  }

  removeProductsFromStock() {
    if (this.service) {
      this.service.serviceItems!.forEach(si => {
        si.items.forEach(sii => {
          let available = sii.product!.availableQuantity;
          available -= sii.quantity;
          if (available < 0) { available = 0 }
          sii.product!.availableQuantity = available;
          this.prodService.updateProduct(sii.product!.id, sii.product!).subscribe(res => {
            console.log(res);
          })
        })
      })
      this.service.state = "Finished";
      this.sService.updateService(this.service).subscribe(res => {
        this.router.navigateByUrl('services-worker');
      });      
    }
  }
}
