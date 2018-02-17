import { NgModule } from '@angular/core';
import { SingleFileComponent } from './single-file/single-file';
import { MediaComponent } from './media/media';
@NgModule({
	declarations: [SingleFileComponent,
    MediaComponent],
	imports: [],
	exports: [SingleFileComponent,
    MediaComponent]
})
export class ComponentsModule {}
