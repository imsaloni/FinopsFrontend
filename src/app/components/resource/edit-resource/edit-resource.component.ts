import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { resource } from 'src/app/Models/resource';
import { ResourcesService } from 'src/app/service/resources.service';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css']
})
export class EditResourceComponent implements OnInit{

  resourceDetails:  resource = {
    id: '',
    name: '',
    owner: '',
    owner_Email_Tag: '',
    ignore_Tag: '',
    target_Productivity: '',
    oee: ''

  };


  constructor(private route: ActivatedRoute,private resourceService:
    ResourcesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
       const id = params.get('id');

       if (id){
       this.resourceService.getResource(id)
       .subscribe({
        next:(response) => {
         this.resourceDetails = response ;
        }
       });

       }
      }
    })
  }
     updateResource(){
      this.resourceService.updateResource(this.resourceDetails.id, this.resourceDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['resource']);
        }
        });

      }

      deleteResource(id: string){
       this.resourceService.deleteResource(id)
       .subscribe({
        next : (response) =>{
          this.router.navigate(['resource']);
        }
       })
      }



}


