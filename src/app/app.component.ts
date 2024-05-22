import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba_kevin_ramos';
  items: any[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/']);
                }
            },
            {
              label: 'Empresas',
              icon: 'pi pi-home',
              command: () => {
                  this.router.navigate(['/empresas']);
              }
          },
          {
            label: 'Personas',
            icon: 'pi pi-home',
            command: () => {
                this.router.navigate(['/personas']);
            }
        },
            
        ];
    }
 }
