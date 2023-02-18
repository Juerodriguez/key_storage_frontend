import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

const COLUMNS_SCHEMA_EMAILS = [
  {
    key: "id",
    type: "text",
    label: "id"
  },
  {
      key: "email",
      type: "text",
      label: "Email compartido"
  },
  {
      key: "visited",
      type: "text",
      label: "Fue consultada"
  },
  {
    key: "info_ip",
    type: "text",
    label: "IP de acceso"
  },
]

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
  shared = []
  id: string | null = ""
  displayedColumnsEmail: string[] = ['email'];
  displayedColumnsEstudio: string[] = COLUMNS_SCHEMA_EMAILS.map((col) => col.key);
  columnsSchemaEstudio: any = COLUMNS_SCHEMA_EMAILS;

  constructor(private fb: FormBuilder, private keyService: KeyService, private route: ActivatedRoute, private router: Router,) {}

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.show_data();
  }

  show_data() {
    
    this.keyService.getKey(this.id).subscribe((response) => {
      this.keyForm.controls["name"].setValue(response.name),
      this.keyForm.controls["password"].setValue(response.password),
      this.keyForm.controls["created_at"].setValue(response.created_at)
      this.shared = response.shared_at
    });
  }

  delete_key() {
    this.keyService.deleteKey(this.id).subscribe((response) => {
      console.log(response)
      const url = 'keymanager/'
      this.router.navigate([`${url}`]);
    });
  }

  share_view_href(){
    const url = 'keymanager/share_email/'
      this.router.navigate([`${url}${this.id}`]);
  }

}
