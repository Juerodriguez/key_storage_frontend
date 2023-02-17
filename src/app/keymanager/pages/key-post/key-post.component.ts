import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-key-post',
  templateUrl: './key-post.component.html',
  styleUrls: ['./key-post.component.css']
})
export class KeyPostComponent implements OnInit{

  keyForm = this.fb.group({
    name: ["", [Validators.required]],
    password: ["", [Validators.required]],
    
  });


  constructor(private fb: FormBuilder, private keyService: KeyService) {}

  get f() {
    return this.keyForm.controls;
  }

  ngOnInit(): void {
    this.keyForm.controls["name"].patchValue("Escribe el nombre de la clave")
    this.keyForm.controls["password"].patchValue("Escribe la clave")
    
  }

  onSubmit(): void {
    this.keyForm.markAllAsTouched();
    if (this.keyForm.valid) {
      this.keyService.postKey(this.keyForm.value).subscribe((data) => {
        console.log(data);
        
      });
    }
  }

}
