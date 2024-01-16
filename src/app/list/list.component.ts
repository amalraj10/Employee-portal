import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allEmployeeget:employee[]=[]

 constructor(private api:AdminapiService){}

//  lifecycle hook - call just after the components is created and construted is called

ngOnInit(): void {
  this.allEmployee()
}
allEmployee(){
  this.api.getAllEmployeeApi().subscribe({
    next:(res:any)=>{

      this.allEmployeeget = res

      console.log(this.allEmployeeget);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

removeemployee(id:any){
  this.api.deleteEmployeeApi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.allEmployee()
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}


}
