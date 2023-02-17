import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-key-viewdetail',
  templateUrl: './key-viewdetail.component.html',
  styleUrls: ['./key-viewdetail.component.css']
})
export class KeyViewdetailComponent implements OnInit{

  keyForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    created_at: new Date(),
    
    
  });
  shared_at = []
  id: string | null = ""

  constructor(private fb: FormBuilder, private keyService: KeyService, private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.show_data();
  }

  show_data() {
    
    this.keyService.getKey(this.id).subscribe((response) => {
      console.log(response)
      

    });
  }

}
