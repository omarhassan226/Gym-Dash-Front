import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './pages/home/home.component';
import { DashedLineChartComponent } from './components/dashed-line-chart/dashed-line-chart.component';
import { TreeMapChartComponent } from './components/tree-map-chart/tree-map-chart.component';
import { SparkLinesComponent } from './components/spark-lines/spark-lines.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DashedLineChartComponent, TreeMapChartComponent, SparkLinesComponent],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
