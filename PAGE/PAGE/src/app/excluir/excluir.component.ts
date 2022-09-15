import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,  MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { LoadingComponent } from '../loading/loading.component';
import { StorageService, User } from '../services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css'],
  providers: [StorageService]
})
export class ExcluirComponent implements OnInit {
  id: any;


  constructor(public dialog: MatDialog, private storageService: StorageService,
    @Inject(MAT_DIALOG_DATA) public data: string
    ) { }

  ngOnInit(): void {
    if(this.data[0] === 'delete'){
      this.id = this.data[1];
    }
  }

  excluindo(){
    const dialogRef = this.dialog.open(LoadingComponent);
    console.log("excluindo"); 
      this.storageService.delete(this.id).subscribe((res => {
        setTimeout(()=>{ 
          dialogRef.close();  
        }, 1000)
      }));
  }
}
