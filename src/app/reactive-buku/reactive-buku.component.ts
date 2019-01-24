import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BukuReactive} from './reactive-buku.model';
import {Buku} from '../buku/buku.model';


@Component({
  selector: 'app-reactive-buku',
  templateUrl: './reactive-buku.component.html',
  styleUrls: ['./reactive-buku.component.css']
})
export class ReactiveBukuComponent implements OnInit {

  bukuForm: FormGroup;
  bukuList: BukuReactive[] = [];
  totalQty: number;
  private totalBuku: BukuReactive[];
  private buku: any[];

  constructor() {
  }

  ngOnInit() {
    this.bukuForm = new FormGroup({
      isbn: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      namaBuku: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      qty: new FormControl(null, [Validators.required])
    });
  }

  kirim() {
    const bukuReactiveModel = new BukuReactive();
    bukuReactiveModel.isbn = this.bukuForm.get('isbn').value;
    bukuReactiveModel.namaBuku = this.bukuForm.get('namaBuku').value;
    bukuReactiveModel.qty = this.bukuForm.get('qty').value;
    console.log(bukuReactiveModel);
    this.bukuList.push(bukuReactiveModel);
    this.bukuForm.reset();
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }return null;
  }

  deleteBuku(i) {
    this.bukuList.splice(i, 1);
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.bukuList.length; i++) {
      if (this.bukuList[i].qty) {
        total += this.bukuList[i].qty;
        this.totalQty = total;
      }
    }
    return total;
  }

  getBuku() {
    this.buku = [];
    for (let i = 0; i < this.bukuList.length; i++) {
      if (this.bukuList[i].namaBuku) {
        this.buku.push(this.bukuList[i].namaBuku);
        this.totalBuku = this.buku;
      }
    }
    console.log(this.buku);
    return alert('Buku yang dipinjam adalah : ' + this.buku);
  }
}
