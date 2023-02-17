import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/service/key.service'
import { Router } from '@angular/router';

const COLUMNS_SCHEMA_ESTUDIO = [
  {
    key: "id",
    type: "text",
    label: "id"
  },
  {
      key: "name",
      type: "text",
      label: "Nombre de Clave"
  },
  {
      key: "password",
      type: "text",
      label: "Clave Encriptada"
  },
  {
    key: "created_at",
    type: "Date",
    label: "Fecha de creacion"
  },
]

@Component({
  selector: 'app-key-viewall',
  templateUrl: './key-viewall.component.html',
  styleUrls: ['./key-viewall.component.css']
})
export class KeyViewallComponent implements OnInit {

  
  displayedColumnsEstudio: string[] = COLUMNS_SCHEMA_ESTUDIO.map((col) => col.key);
  columnsSchemaEstudio: any = COLUMNS_SCHEMA_ESTUDIO;
  keyarray = []

  constructor(private keyService: KeyService, private router: Router,) {}

  
  ngOnInit(): void {
    this.show_data();
  }
  show_data() {
    
    this.keyService.getAllKeys().subscribe((response) => {
      
      this.keyarray = response

    });
    
    
    }
  view_detail_href(id: number){
    const KEY_DETAIL = 'keymanager/view_detail/'
    this.router.navigate([`${KEY_DETAIL}${id}`]);

  }
    
}

