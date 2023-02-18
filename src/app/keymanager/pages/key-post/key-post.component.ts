import { Component } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-key-post',
  templateUrl: './key-post.component.html',
  styleUrls: ['./key-post.component.css']
})
export class KeyPostComponent{

  keyForm = this.fb.group({
    name: ["", [Validators.required]],
    password: ["", [Validators.required]],
    
  });


  constructor(private fb: FormBuilder, private keyService: KeyService, private router: Router,) {}

  get f() {
    return this.keyForm.controls;
  }


  onSubmit(): void {
    this.keyForm.markAllAsTouched();
    if (this.keyForm.valid) {
      this.keyService.postKey(this.keyForm.value).subscribe((data) => {
        const url = 'keymanager/'
        this.router.navigate([`${url}`]);
        
      });
    }
  }

}
