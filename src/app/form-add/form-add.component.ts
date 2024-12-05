import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../service/form-service.service';
import { FormClass } from '../class/form-class';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent implements OnInit{
  submitted!: boolean;
  subForm!:FormGroup;
  data:any[]=[];
  isActive=false;

  constructor(private fb:FormBuilder,private formService:FormServiceService<FormClass>){}

  get f(){
    return this.subForm.controls;
  }

  ngOnInit(): void {
    this.subForm = this.fb.group({
        name: ['',Validators.compose([Validators.required])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        password: ['',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])],
        mobile: ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]{10}$')])],
        address: ['',Validators.compose([Validators.required])],
        status: ['A']
    });
  }

  Status(index:any) {
    this.isActive = !this.isActive;
    if(this.isActive==true){
      this.data[index].status = 'I';
    }else{
      this.data[index].status = 'A';
    }
  }

  delete(index:any){
      if(confirm("Are you want delete this?")){
        this.data.splice(index,1);
      }
  }

  edit(index:any){
    this.subForm.patchValue(this.data[index]);
    console.log(this.data[index]);
  }

  update(index:any){
    this.data.push(this.data[index]);
  }

  onSubmit(){
    this.submitted=true;
    if(this.subForm.invalid){
       return;
    }
    this.data.push(this.subForm.value);
    // this.formService.save(this.subForm.value).subscribe((response:FormResponse<FormClass>)=>{
    //   this.data = response;
    //   if(this.data){
    //     alert("Saved data successfully!");
    //     setTimeout(()=>{
    //       this.subForm.reset();
    //     },1000);
    //   }
    // },(error) => {
    //     console.error(error);
    // });
  }

}
