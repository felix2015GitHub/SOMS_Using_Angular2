import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from './members';
import { MembersService } from './members.service';

@Component({
  	selector: 'my-members',
  	templateUrl: 'app/members.component.html'
})

export class MembersComponent implements OnInit {

	members: Member[] = [];

	constructor(
		private router: Router ,
		private membersService: MembersService) { 
	}

	ngOnInit() {
	    this.membersService.getMembers()
	      	.then(members => this.members = members);
	}

  	addMember() {
      	this.router.navigate(['/addMember']);
    }
}
