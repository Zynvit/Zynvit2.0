import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cloudinary',
  templateUrl: './cloudinary.component.html',
  styleUrls: ['./cloudinary.component.scss'],
})
export class CloudinaryComponent  implements OnInit {

  constructor() { }
  @Input() videoUrl!: string;
  ngOnInit() {}

}
