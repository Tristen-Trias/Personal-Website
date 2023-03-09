import { Component, Inject, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //TODO: create json files for everything
  private _jsonURL = 'assets/data/test.json';

  cards?: cardInfo[];

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.fillCards();
  }

  ngOnInit(): void {
  }

  fillCards(): void {
    this.getJSON().subscribe(data => {
      this.cards = data.card;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '750px',
      data: {name: "test", animal: "test"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent { 

  header?: string;
  headerSubtitle?: string;
  subtitleLink?: string;
  lSubtitle?: string;
  rSubtitle?: string;
  listHeader?: string;
  list2Header?: string;
  body?: string[];
  body2?: string[];

  card?: cardInfo;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.card = {
      header: this.header,
      headerSubtitle: this.headerSubtitle,
      subtitleLink: this.subtitleLink,
      lSubtitle: this.lSubtitle,
      rSubtitle: this.rSubtitle,
      listHeader: this.listHeader,
      body: this.body,
    }
    console.log(this.card)
    this.dialogRef.close();

    //TODO: create a working backend
  }
}
