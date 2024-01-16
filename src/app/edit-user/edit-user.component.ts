import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { ActivatedRoute } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

employee : employee = {}

constructor(private route:ActivatedRoute,private api:AdminapiService){}

ngOnInit(): void {
  this.route.params.subscribe((res:any)=>{
console.log(res.id);

const{id}=res
this.viewEmployee(id)

  })
}
viewEmployee(id:string){
  this.api.viewEmployeeApi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.employee=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

}
