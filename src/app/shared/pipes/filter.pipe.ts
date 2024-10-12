import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  /**
   *
   * @param haystack
   * @param needle
   * @param properties
   * @returns
   */
  transform(haystack: any, needle: string, ...properties: string[]) {
    if (!needle) return haystack;

    return haystack.filter((hay: any) => {
      return properties.some((property) => {
        return hay[property]?.toLowerCase().includes(needle.toLowerCase());
      });
    });
  }
}
