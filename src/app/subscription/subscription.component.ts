import { Component } from '@angular/core';
import { ResourcesData } from '../resorces-data';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})

export class SubscriptionComponent {
  subscriptionData: ResourcesData = {
    clientId: '',
    tenantId: '',
    objectId: '',
    clientSecret: '',
    subscriptionId: ''
  };
  verificationStatus: string = '';

  constructor(private SubscriptionService: SubscriptionService) { }

  verifyResources() {
    this.SubscriptionService.getAllResources(this.subscriptionData).subscribe(
      response => {
        if (response.length > 0) {
          this.verificationStatus = 'Valid Subscription';
        } else {
          this.verificationStatus = 'Invalid Subscription';
        }
      },
      error => {
        console.log(error);
        this.verificationStatus = 'Error occurred while verifying resources';
      }
    );
  }
}
