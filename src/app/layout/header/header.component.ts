import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  TUI_DARK_MODE,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiIcon,
  TuiOption,
} from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';
import { Themes } from '../../shared/constants/themesEnum';

@Component({
  selector: '[appHeader]',
  imports: [
    RouterLink,
    RouterLinkActive,
    TuiButton,
    TuiChevron,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiOption,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themes: any = [];
  test: string = '';
  protected readonly darkMode = inject(TUI_DARK_MODE);

  ngOnInit(): void {
    this.initThemes();
  }

  private initThemes(): void {
    const items = [];

    for (const [key, value] of Object.entries(Themes)) {
      items.push({
        label: value,
        routerLink: '/albums',
      });
    }

    this.themes = [
      {
        label: 'Thèmes',
        items: items,
      },
      {
        label: '',
        items: [
          {
            label: 'Tous les albums',
            routerLink: '',
          },
        ],
      },
    ];
  }
}
