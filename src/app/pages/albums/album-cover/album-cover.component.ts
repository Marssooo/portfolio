import { Component, input } from '@angular/core';

@Component({
  selector: 'app-album-cover',
  imports: [],
  templateUrl: './album-cover.component.html',
  styleUrl: './album-cover.component.scss'
})
export class AlbumCoverComponent {
  albumName = input<string>();

}
