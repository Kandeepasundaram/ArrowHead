import { ListProvService, MemberInfo, Member } from '@arrow-head/shared-services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arrow-head-comp-lvl0',
  templateUrl: './comp-lvl0.component.html',
  styleUrls: ['./comp-lvl0.component.scss']
})
export class CompLvl0Component implements OnInit {
  constructor(private listProvService: ListProvService) {}

  currentUrl = window.location.href;
  hostname = window.location.hostname;
  isLocal = false;

  adults: Member[];

  ngOnInit() {
    this.isLocal = this.hostname === 'localhost';
    this.listProvService.getMembers().subscribe(
      (response: MemberInfo) => {
        error: {
          console.log(response);
        }
        next: {
          console.log(response);
          this.adults = response.members.filter((m) =>{
            return m.status === 'eligible';
          });
        }
      }
    )
  }
}
