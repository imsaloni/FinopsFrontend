import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourcesData } from './resorces-data';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = 'https://localhost:7170/api/subscription';

  constructor(private http: HttpClient) { }

  getAllResources(data: ResourcesData): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?clientId=${data.clientId}&tenantId=${data.tenantId}&objectId=${data.objectId}&clientSecret=${data.clientSecret}&subscriptionId=${data.subscriptionId}`);
  }

  addResource(resource: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, resource);
  }
}

//https://localhost:7173/api/Subscription
