import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: any[] = [];
  activeLink: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/mocks/menu.json').subscribe(data => {
      this.menuItems = data;
      this.loadSVGs();
    });
  }

  loadSVGs() {
    this.menuItems.forEach((item, index) => {
      this.http.get(item.icon, { responseType: 'text' }).subscribe(svgData => {
        this.menuItems[index].svg = svgData;
      });
    });
  }

}
