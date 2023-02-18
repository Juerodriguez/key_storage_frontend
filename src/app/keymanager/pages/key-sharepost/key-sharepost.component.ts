import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-key-sharepost',
  templateUrl: './key-sharepost.component.html',
  styleUrls: ['./key-sharepost.component.css']
})
export class KeySharepostComponent implements OnInit{

  sharePostForm = this.fb.group({
    email: ["", [Validators.required]],
  });
  id: string | null = ""

  constructor(private fb: FormBuilder, private keyService: KeyService, private route: ActivatedRoute, private router: Router,) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    this.sharePostForm.markAllAsTouched();
    if (this.sharePostForm.valid) {
      this.keyService.shareKey(this.id, this.sharePostForm.value).subscribe((data) => {
        const url = 'keymanager/'
        this.router.navigate([`${url}`]);
        
      });
    }
  }

}
