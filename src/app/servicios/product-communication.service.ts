import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCommunicationService {
  private productAddedSource = new Subject<void>();

  productAdded$ = this.productAddedSource.asObservable();

  notifyProductAdded() {
    this.productAddedSource.next();
  }

  private productEditedSource = new Subject<void>();
  productEdited$ = this.productEditedSource.asObservable();

  notifyProductEdited() {
    this.productEditedSource.next();
  }
}
