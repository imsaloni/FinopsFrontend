import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { resource } from 'src/app/Models/resource';
import { ResourcesService } from 'src/app/service/resources.service';


@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})

export class AddResourceComponent implements OnInit{

  addResourceRequest: resource = {
    id: '',
    name: '',
    owner: '',
    owner_Email_Tag: '',
    ignore_Tag: '',
    target_Productivity: '',
    oee: ''

  };

constructor(private resourceService: ResourcesService, private router: Router)
{ }

ngOnInit(): void {

}
addResource() {
  this.resourceService.addResource(this.addResourceRequest)
  .subscribe ({
    next: (resource) => {
      this.router.navigate(['resource']);
    }

  });
}

deleteResource(id: string){
  this.resourceService.deleteResource(id)
  .subscribe({
   next : (resource) =>{
     this.router.navigate(['resource']);
   }
  })
 }

}
