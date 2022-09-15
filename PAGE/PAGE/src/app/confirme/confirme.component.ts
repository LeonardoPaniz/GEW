import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-confirme',
  templateUrl: './confirme.component.html',
  styleUrls: ['./confirme.component.css'],
  providers: [StorageService],
})
export class ConfirmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
