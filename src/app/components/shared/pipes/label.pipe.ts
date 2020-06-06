import { Pipe, PipeTransform } from '@angular/core';

export type WeaponType = 'pistol'
| 'submachine-gun'
| 'shotgun'
| 'automatic-rifle'
| 'sniper-rifle'
| 'machine-gun'
| 'knife'
| 'sword'
| 'axe';

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  transform(value: WeaponType): string {
    switch (value) {
      case 'pistol':
        return 'Пистолет';

      case 'submachine-gun':
        return 'Пистолет-пулемет';

      case 'shotgun':
        return 'Дробовик';

      case 'automatic-rifle':
        return 'Автоматическая винтовка';

      case 'sniper-rifle':
        return 'Снайперская винтовка';

      case 'machine-gun':
        return 'Пулемёт';

      case 'knife':
        return 'Нож';

      case 'sword':
        return 'Меч';

      case 'axe':
        return 'Топор';
    }
  }

}
