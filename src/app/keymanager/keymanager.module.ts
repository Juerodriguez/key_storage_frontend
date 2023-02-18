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
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { KeyDecryptSharedComponent } from './pages/key-decrypt-shared/key-decrypt-shared.component';





@NgModule({
  declarations: [
    KeyPostComponent,
    KeyViewallComponent,
    KeyViewdetailComponent,
    KeyShareviewallComponent,
    KeySharepostComponent,
    KeyDecryptSharedComponent
  ],
  imports: [
    CommonModule,
    KeymanagerRoutingModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    ],
})
export class KeymanagerModule {}
