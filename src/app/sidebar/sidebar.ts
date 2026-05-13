import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() moduleName: string = '';
  isDashboardMenuOpen = ['dashboard', 'dashboard2', 'dashboard3'].includes(this.moduleName);
  toggleDashboardMenu(event: Event) {
    // 1. Stop the browser from jumping to the top of the page
    event.preventDefault();

    // 2. THE MAGIC BULLET: Stop the click from bubbling up to AdminLTE's jQuery script!
    event.stopPropagation();

    // 3. Toggle the menu
    this.isDashboardMenuOpen = !this.isDashboardMenuOpen;
  }
}
