import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-angular';

export const landingPageResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  const urlPath = `/${route.url.join('/')}`;
  const searchParams = getBuilderSearchParams(route.queryParams);

  console.log('Resolving content for path:', urlPath);

  return fetchOneEntry({
    apiKey: 'bdd96eed1a2648e789e2e0d740aca175', // Replace with your Builder.io Public API Key
    model: 'page',
    userAttributes: {
      urlPath,
    },
    options: searchParams,
  });
};
