import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    { title: 'Phone Number', content: '010-020-0340' },
    { title: 'Email Address', content: 'info@meeting.edu' },
    { title: 'Street Address', content: 'Rio de Janeiro - RJ, 22795-008, Brazil' },
    { title: 'Website URL', content: '<a href="https://www.meeting.edu">www.meeting.edu</a>' }
  ];

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      // Add your form submission logic here
      form.resetForm();
    }
  }
}

