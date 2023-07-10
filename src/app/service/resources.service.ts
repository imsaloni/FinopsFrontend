import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { resource } from '../Models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {

  baseApiUrl:  string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllResources(): Observable<resource[]> {
    return this.http.get<resource[]>(this.baseApiUrl + '/api/Finops');
  }

  addResource(addResourceRequest: resource): Observable<resource> {
    addResourceRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<resource>(this.baseApiUrl + '/api/Finops', addResourceRequest);
  }

  getResource(id: string): Observable<resource> {
    return this.http.get<resource>(this.baseApiUrl + '/api/Finops/' + id);
  }

  updateResource(
    id: string,
    updateResourceRequest: resource
  ): Observable<resource> {
    return this.http.put<resource>(
      this.baseApiUrl + '/api/Finops/' + id,
      updateResourceRequest
    );
  }

  deleteResource(id: string): Observable<resource> {
    return this.http.delete<resource>(
      this.baseApiUrl + '/api/Finops/' + id
    );
  }
}
