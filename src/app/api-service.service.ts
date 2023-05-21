import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }



  getAllGames(){
    return this.http.get<any>(`http://localhost:8080/api/v1/Games`);
  }

  addGame(data:any){
    return this.http.post(`http://localhost:8080/api/v1/Games`,data);
  }
  editGame(data:any,id:number){
    return this.http.put<any>(`http://localhost:8080/api/v1/Games/`+id,data);
  }

  deleteGame(id:number){
    return this.http.delete<any>(`http://localhost:8080/api/v1/Games/`+id);
  }
}
