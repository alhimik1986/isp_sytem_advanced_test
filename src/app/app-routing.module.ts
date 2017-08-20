import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { MainComponent } from './core/components/main/main.component';

const routes: Routes = [
    //{ path: '', redirectTo: '', pathMatch: 'full' }, // Перенаправление на другой route
	{ path: '', component: MainComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes/*, {useHash: true}*/)],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}
