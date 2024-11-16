import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './pages/home/home.component';
import { DashedLineChartComponent } from './components/dashed-line-chart/dashed-line-chart.component';
import { TreeMapChartComponent } from './components/tree-map-chart/tree-map-chart.component';
import { SparkLinesComponent } from './components/spark-lines/spark-lines.component';
import {
  ToolbarModule,
  SidebarModule,
} from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashedLineChartComponent,
    TreeMapChartComponent,
    SparkLinesComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    CommonModule,
    ToolbarModule,
    SidebarModule,
    ListViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
