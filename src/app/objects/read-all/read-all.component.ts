import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-read-all',
  standalone: true,
  imports: [
    CommonModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.scss'
})
export class ReadAllComponent {
  objects: any[] = [];
  originalObjects: any[] = [];

  loading: boolean = true;
  search = new FormControl('');

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router) {

    /**
     * Subscribe to the search form control value changes
     * 
     * Filter the objects based on the search value
     */
    this.search.valueChanges.subscribe(value => {

      console.log('search value:', value)

      this.objects = this.originalObjects.filter(object => 
        object.name.toLowerCase().includes(value?.toLowerCase()) ||
         object.description.toLowerCase().includes(value?.toLowerCase())
      )
    });

    /**
     * Handling page messages
     */
    this.activatedRoute.queryParams.subscribe((params: Params) => {

      // If the query parameter `deleted` is set to `true`, display a success message
      if (params?.['deleted'] === 'true') {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Record has been deleted!'});
        this.router.navigate([], { queryParams: { deleted: null }, queryParamsHandling: 'merge' }); // clear param
      }

      // If the query parameter `created` is set to `true`, display a success message
      if (params?.['created'] === 'true') {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Record has been created!'});
        this.router.navigate([], { queryParams: { created: null }, queryParamsHandling: 'merge' }); // clear param
      }
    });
  }

  ngOnInit() {
    /**
     * Fetch all objects from the API
     */
    this.http.get('http://127.0.0.1:5000/objects').subscribe(
      (data:any) => {
        this.originalObjects = data.objects ?? [];
        this.objects = data.objects ?? [];
        setTimeout(() => this.loading = false, 800); // simulate loading
      }
    );
  }
}
