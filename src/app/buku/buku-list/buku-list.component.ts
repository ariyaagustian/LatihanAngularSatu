import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Buku} from '../buku.model';
import {BukuservService} from '../bukuserv.service';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css'],
  providers: [BukuservService]
})
export class BukuListComponent implements OnInit {
  private totalBuku: any;
  constructor(private bukuservService: BukuservService) { }

  @Input() bukuParent: Buku[];
  total: number;
  @Output() dariChildParent: EventEmitter<Buku> = new EventEmitter();
  totalQty: any;
  private buku: any[];


  ngOnInit() {
  }

  deleteBuku(i) {
    this.bukuParent.splice(i,1);
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.bukuParent.length; i++) {
      if (this.bukuParent[i].qty) {
        total += this.bukuParent[i].qty;
        this.totalQty = total;
      }
    }
    return total;
  }

  getBuku() {
    this.buku = [];
    for (let i = 0; i < this.bukuParent.length; i++) {
      if (this.bukuParent[i].nama_buku) {
        this.buku.push(this.bukuParent[i].nama_buku);
        this.totalBuku = this.buku;
      }
    }
    console.log(this.buku);
    return alert('Buku yang dipinjam adalah : ' + this.buku);
  }

}
