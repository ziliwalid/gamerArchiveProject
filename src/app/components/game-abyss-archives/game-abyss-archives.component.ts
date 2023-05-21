import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import { MatDialog } from '@angular/material/dialog';
import { AddingCardComponent } from '../adding-card/adding-card.component';


@Component({
  selector: 'app-game-abyss-archives',
  templateUrl: './game-abyss-archives.component.html',
  styleUrls: ['./game-abyss-archives.component.scss']
})
export class GameAbyssArchivesComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nameGame', 'yearProd','Histoire','Genre','Action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllGames();
  }

  constructor(private  http :  ApiServiceService, private dialog : MatDialog){}

 
    getAllGames(){
      this.http.getAllGames()
      .subscribe({
        next : (res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res);
        }
      })
    }

    openDialog(){
      this.dialog.open(AddingCardComponent,{
          width : '40%'
      }).afterClosed().subscribe({
        next:(res)=>{
          this.getAllGames();
        }
      })
      return true;
    }



    edit(data:any){
      this.dialog.open(AddingCardComponent,{
        width:'30%',
        data
     }).afterClosed().subscribe({
      next:(res)=>{
        this.getAllGames();
      }
    })
    }

    


    deleteRow(id : number){
      this.http.deleteGame(id)
      .subscribe({
        next:(res)=>{
          this.getAllGames();
          alert("Votre jeux a été supprimer");
        }, error:(err)=>{
          console.log(err);
        }
      })
    }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
