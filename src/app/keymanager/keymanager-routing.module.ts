import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyPostComponent } from './pages/key-post/key-post.component'
import { KeyViewallComponent } from './pages/key-viewall/key-viewall.component'
import { KeyViewdetailComponent } from './pages/key-viewdetail/key-viewdetail.component'
import { KeySharepostComponent } from './pages/key-sharepost/key-sharepost.component'
 
const routes: Routes = [
  { path: '', component: KeyViewallComponent},
  { path: 'create', component: KeyPostComponent },
  { path: 'view_detail/:id', component: KeyViewdetailComponent },
  { path: 'share_email/:id', component: KeySharepostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeymanagerRoutingModule {}
