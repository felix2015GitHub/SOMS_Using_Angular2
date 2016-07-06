import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from './members';
import { MEMBERS } from './mock-members';
//import { AddMemberService } from './addMember.service';

@Component({
  selector: 'my-addMember',
  templateUrl: 'app/addMember.component.html'
})

export class AddMemberComponent {

	constructor(
		private router: Router) { 
	}

	active = true;

	onSubmit() {		
		this.router.navigate(['/members']);
	}
}
