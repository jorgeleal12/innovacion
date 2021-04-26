import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {


  loader: boolean;

  @Input() set loading(value: boolean) {
    this.loader = value;
  }

  constructor() { }

  onChange: any = () => { };

  // tslint:disable-next-line: member-ordering
  @Output() AuChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
