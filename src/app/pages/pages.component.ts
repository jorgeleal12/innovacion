import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor( private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  exit(): void {
    this.tokenService.remove();
  }
}
