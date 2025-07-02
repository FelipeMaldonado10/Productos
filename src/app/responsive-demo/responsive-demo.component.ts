import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-demo',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './responsive-demo.component.html',
  styleUrls: ['./responsive-demo.component.css']
})
export class ResponsiveDemoComponent implements OnInit {
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }
}
