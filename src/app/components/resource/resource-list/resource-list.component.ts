import { Component, OnInit } from '@angular/core';
import { resource } from 'src/app/Models/resource';
import { ResourcesService } from 'src/app/service/resources.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  resources: resource[] = [];

  constructor(private resourcesService: ResourcesService) {}

  ngOnInit(): void {
    this.resourcesService.getAllResources()
    .subscribe({
      next : (resources) => {
        this.resources = resources;

      },
      error: (response) => {
        console.log(response);
      }
    })

  }

}
function subscribe(arg0: { next: (resources: any) => void; error: (response: any) => void; }) {
  throw new Error('Function not implemented.');
}

