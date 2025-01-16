import { Component } from '@angular/core';
import { AlbumCoverComponent } from "./album-cover/album-cover.component";

@Component({
  selector: 'app-albums',
  imports: [AlbumCoverComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {

}
