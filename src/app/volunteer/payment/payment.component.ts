import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { DEFAULT_TOAST_TIME } from 'src/app/const';
import { BackendService } from 'src/app/services/backend.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  constructor(private readonly backendService:BackendService,private readonly toastrService:ToastrService,private readonly activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.queryParams['action']
    if(params === 'bank'){
     this.backendService.syncBankAccount().pipe(take(1)).subscribe({
      next:(res)=>{
        
      },
      error:(error)=>{
       this.toastrService.error('',"Bank Account Syncing Failed",DEFAULT_TOAST_TIME) 
      }
    })
    }
  }
  addBank(){
    this.backendService.addBankAccount().pipe(take(1)).subscribe({
      next:(res)=>{
        window.location.href = res.link;
      },
      error:(error)=>{
       this.toastrService.error('',"Bank Account Addition Failed",DEFAULT_TOAST_TIME) 
      }
    })
  }

}
