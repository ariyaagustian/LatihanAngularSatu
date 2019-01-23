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

  @Input() bukuParent: Buku[];
  @Output() dariChildParent: EventEmitter<Buku> = new EventEmitter();
  constructor(private bukuservService: BukuservService) { }

  ngOnInit() {
  }

  showname(i) {
    this.bukuParent.splice(i,1);
  }


}