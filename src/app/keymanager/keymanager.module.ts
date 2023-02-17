import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'

import { KeymanagerRoutingModule } from './keymanager-routing.module';
import { KeyPostComponent } from './pages/key-post/key-post.component';
import { KeyViewallComponent } from './pages/key-viewall/key-viewall.component';
import { KeyViewdetailComponent } from './pages/key-viewdetail/key-viewdetail.component';
import { KeyShareviewallComponent } from './pages/key-shareviewall/key-shareviewall.component';
import { KeySharepostComponent } from './pages/key-sharepost/key-sharepost.component';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KeyPostComponent,
    KeyViewallComponent,
    KeyViewdetailComponent,
    KeyShareviewallComponent,
    KeySharepostComponent
  ],
  imports: [
    CommonModule,
    KeymanagerRoutingModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ],
})
export class KeymanagerModule {}
