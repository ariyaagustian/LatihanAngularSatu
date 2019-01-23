import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Buku} from '../buku.model';

@Component({
  selector: 'app-buku-pilih',
  templateUrl: './buku-pilih.component.html',
  styleUrls: ['./buku-pilih.component.css']
})
export class BukuPilihComponent implements OnInit {


  @Output() bukuPilih = new EventEmitter<Buku>();
  bukuInfo = new Buku();

  constructor() { }

  ngOnInit() {
  }

  pilihBuku() {
    console.log(this.bukuInfo);
    this.bukuPilih.emit(this.bukuInfo);
    this.bukuInfo = new Buku();
  }

}
