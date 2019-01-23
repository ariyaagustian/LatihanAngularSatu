import { Component, OnInit } from '@angular/core';
import {Buku} from './buku.model';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  bukuList: Buku[] = [];


  constructor() { }

  ngOnInit() {
  }
  onBukuPilih(bukuInfo: Buku) {
    console.log(bukuInfo);
    this.bukuList.push(bukuInfo);
  }

}
