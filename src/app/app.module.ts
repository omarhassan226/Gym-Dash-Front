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
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColumnChartsComponent } from './components/column-charts/column-charts.component';
import { CircleChartComponent } from './components/circle-chart/circle-chart.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfirmationModelComponent } from './components/confirmation-model/confirmation-model.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashedLineChartComponent,
    TreeMapChartComponent,
    SparkLinesComponent,
    SidebarComponent,
    NavbarComponent,
    ColumnChartsComponent,
    CircleChartComponent,
    LoginComponent,
    SignupComponent,
    UsersPageComponent,
    DashboardComponent,
    ConfirmationModelComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    SidebarModule,
    ListViewModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
