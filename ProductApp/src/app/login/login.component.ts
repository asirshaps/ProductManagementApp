import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserDetails={email:"",password:""};
  constructor(private productService:ProductService, private router:Router) { }
  loginUser()
              {
                
                this.productService.registerUser(this.loginUserDetails)
                .subscribe(
                  
                  res=>{
                          console.log(res),
                          localStorage.setItem("token",res["token"]);
                          // alert("success");
                          this.router.navigate([''])
                  },
                  err=>{
                        console.log(err)
                        alert("incorrect values");
                  }
                )
                
              }
              


  ngOnInit() {
  }

}
