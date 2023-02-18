import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-key-decrypt-shared',
  templateUrl: './key-decrypt-shared.component.html',
  styleUrls: ['./key-decrypt-shared.component.css']
})
export class KeyDecryptSharedComponent implements OnInit{


  keyForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    created_at: new Date(),
    
    
  });
  shared = []
  id: string | null = ""
  email_id: string | null = ""
  password: string | null = ""

  constructor(private fb: FormBuilder, private keyService: KeyService, private route: ActivatedRoute, private router: Router,) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.email_id = this.route.snapshot.paramMap.get('email_id');
    this.show_data();
  }
  
  show_data() {
    
    this.keyService.revealKey(this.id, this.email_id).subscribe((response) => {
      
      this.password = response.password
    });
  }
}
