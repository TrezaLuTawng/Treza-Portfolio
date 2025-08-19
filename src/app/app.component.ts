import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone:true,

    imports: [
      ProjectsComponent,
      EducationComponent,
      CertificatesComponent,
      NgClass
    ],
    templateUrl: './app.component.html',
    // styleUrl: './app.component.css'
    styleUrls: ['./app.component.css'] 
    
})
export class AppComponent {
  // title = 'lu-portfolio';
  title = 'lu-portfolio';
  private m_projectsActive = false;
  private m_educationActive = false;
  private m_certificatesActive = false;

  public Projects(): void {
    this.m_projectsActive = !this.m_projectsActive;
  }

  public get projectsActive(): boolean {
    return this.m_projectsActive;
  }

  public Education(): void {
    this.m_educationActive = !this.m_educationActive;
  }

  public get educationActive(): boolean {
    return this.m_educationActive;
  }

  public Certificates(): void {
    this.m_certificatesActive = !this.m_certificatesActive;
  }

  public get certificatesActive(): boolean {
    return this.m_certificatesActive;
  }
  public CollapseAll(): void {
    this.m_projectsActive = false;
    this.m_educationActive = false;
    this.m_certificatesActive = false;

  }
  public ExpandAll(): void {
    this.m_projectsActive = true;
    this.m_educationActive = true;
    this.m_certificatesActive = true;

  }
}
