import { Component ,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-adding-card',
  templateUrl: './adding-card.component.html',
  styleUrls: ['./adding-card.component.scss']
})
export class AddingCardComponent implements OnInit{

  
  actionBtn : string ="Save";

  constructor(
    private formBuilder : FormBuilder,
    private ApiService : ApiServiceService,
    private dialogRef : MatDialogRef<AddingCardComponent>,
    @Inject(MAT_DIALOG_DATA) public editDataGame : any,
  ){}
  Games : any;
  GameForm !: FormGroup;

  ngOnInit(): void {

    this.GameForm = this.formBuilder.group({
      yearOfProd : ['', Validators.required],
      gameName : ['', Validators.required],
      story : ['',Validators.required],
      genre : ['', Validators.required]
    })

    if(this.editDataGame){
      this.actionBtn= "Update";
      this.GameForm.controls['yearOfProd'].setValue(this.editDataGame.yearOfProd);
      this.GameForm.controls['gameName'].setValue(this.editDataGame.gameName);
      this.GameForm.controls['story'].setValue(this.editDataGame.story);
      this.GameForm.controls['genre'].setValue(this.editDataGame.genre);
    }
  }
  

  addGame() {
    if (!this.editDataGame) {
      this.ApiService.addGame(this.GameForm.value)
        .subscribe({
          next: (res) => {
            alert("Game Added");
            this.GameForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            console.log(err);
          }
        });
    } else {
      this.updateGame();
    }
  }
  
  updateGame() {
    const formValues = this.GameForm.value; // Extract the form values
    
    this.ApiService.editGame(formValues, this.editDataGame.id)
      .subscribe({
        next: (res) => {
          alert("Game Updated");
          this.GameForm.reset();
          this.dialogRef.close();
        }
      });
  }
  

}
