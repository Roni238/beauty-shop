import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'data',
      source: {
        include: '**/*.json',
        exclude: ['**/*.md', '**/*.md/**', '**/*.json.md']
      },
      schema: z.object({
        title: z.string(),
        description: z.string().min(10, 'Описание должно быть не менее 10 символов'),
        createdAt: z.string().datetime(),
        
        preview: z.string().optional(),
        image: z.string().url('Должен быть валидный URL').optional(),
        
        publicLink: z.string()
          .optional()
          .default('')
          .describe('Уникальная ссылка на статью')
          .editor({ 
            input: 'computed',
            compute: (data) => {
              if (data.publicLink && data.publicLink !== '') {
                return data.publicLink
              }

              return uuidv4()
            },
            readonly: true,
            persist: true 
          })
      
      })
    })}


})