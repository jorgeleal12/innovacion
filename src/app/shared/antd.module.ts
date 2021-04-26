import { NgModule } from "@angular/core";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
    exports: [
        NzLayoutModule,
        NzMenuModule,
        NzGridModule,
        NzInputModule,
        NzFormModule,
        NzCardModule,
        NzButtonModule,
        NzNotificationModule,
        NzLayoutModule,  
        IconsProviderModule,
        NzTableModule,
        NzSelectModule
    ]})
export class NgZorroAntdModule { }