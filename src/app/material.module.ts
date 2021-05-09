import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatToolbarModule],
  exports: [MatTableModule, MatPaginatorModule, MatToolbarModule],
})
export class MaterialModule {}
