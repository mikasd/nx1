import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class UiModule {}
