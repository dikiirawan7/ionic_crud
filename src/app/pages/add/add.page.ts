import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})

export class AddPage implements OnInit {
  constructor(
    public api:AddService
    ) { }

  ngOnInit() {
  }
  
  username:string='';
  phone:string='';
  gander:string='';

  tambah(){
    let body={
      username:this.username,
      phone:this.phone,
      gander:this.gander
    };

    this.api.addData(body).subscribe(
      res=>{
        
        alert('oke');

      },(err)=>{
        console.log(err);
      }

    );
    
  }
}
