import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { Service, ServicesService } from '../../services/services.service';
import { Vehicle, VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {

  public vehicle: Vehicle | undefined;
  public allVehicles: Vehicle[] | undefined;
  public user: string | undefined;
  public showAddVehicleForm: boolean = false;

  constructor(private service: ServicesService, private vService: VehiclesService, private userService: AuthorizeService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(res => {
      this.user = res!.name;
      this.vService.getVehicles().subscribe(res => {
        this.allVehicles = res;
        this.requestServiceForm.controls["plate"].addValidators(vehicleValidator(res, this.user!));
      })
    })    
  }

  requestServiceForm = new FormGroup({
    vehiclePlate: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });
  get vehiclePlate() {
    return this.requestServiceForm.get('vehiclePlate');
  }

  addVehicleForm = new FormGroup({
    type: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
  });

  requestService() {
    let vehiclePlate = this.vehiclePlate!.value;

    if (this.showAddVehicleForm){
      let vehicle: Vehicle = this.addVehicleForm.value;
      vehicle.client = this.user!;
      vehicle.plate = vehiclePlate;
      this.vService.addVehicle(vehicle).subscribe();
    }

    this.vService.getVehicle(vehiclePlate).subscribe(v => {
      let s: Service = {
        id: undefined,
        type: this.requestServiceForm.controls["type"].value,
        state: "In_Queue",
        client: this.user!,
        vehiclePlate: vehiclePlate,
        requestDate: new Date(),
        price: 0,
        assignedWorker: undefined,
        serviceItems: undefined
      } 
      this.service.addServiceRequest(s).subscribe(res => {
        this.showAddVehicleForm = false;
        this.router.navigateByUrl("services-client");
      });
    }, err => {
      if (err.status == '404') {
        this.showAddVehicleForm = true;
      }
    });
  }
}

function vehicleValidator(vehicles: Vehicle[], client: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return vehicles.some(v=> v.plate==control.value && v.client!=client) ? { invalidPlate: true } : null;
  }
}
