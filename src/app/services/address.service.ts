import { Injectable } from '@angular/core';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  getAddress(addressId: string) {}

  getAddresssList() {}

  addAddress(address: Address) {}

  addAddresssList(address: Address[]) {}

  deleteAddress(addressId: string) {}
}
