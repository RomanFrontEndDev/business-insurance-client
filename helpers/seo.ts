import type { CreateSeoMetaParams } from '@/type/Seo';

/**
 * Хелпер который помогает с настройкой сео.
 */
export const createSeoMeta = (params: CreateSeoMetaParams) => ({
    title:          params.title,
    ogTitle:        params.title,
    description:    params.description || '',
    ogDescription:  params.description || '',
    ogImage:        params.ogImage || '/logo-og.jpg',
    ogImageWidth:   '1200',
    ogImageHeight:  '600',
    'og-site_name': 'Business Insurance',
    ogType:         'website' as const,
    twitterCard:    'summary_large_image' as const,
});
