export type ContentfulSysBase = {
  type: string,
  linkType: string,
  id: string
}

export type ContentfulBackgroundColor = "None" | "Black" | "Grey" | "White"

export type ContentfulArticle = {
  title: string
  description: string
  thumbnail: { sys: ContentfulSysBase },
  articleUrl: string,
  articlePublishDate: string,
  logo: { sys: ContentfulSysBase }
  thumbnailBackgroundColor: ContentfulBackgroundColor,
  logoBackgroundColor: ContentfulBackgroundColor
}

export type ContentfulAsset = {
  metadata: {
    tags: string[]
  },
  sys: {
    space: { sys: ContentfulSysBase },
    id: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    environment: { sys: ContentfulSysBase },
    revision: number,
    locale: string
  },
  fields: {
    title: string,
    description: string,
    file: {
      url: string,
      details: {
        size: number,
        image: {
          width: number,
          height: number
        }
      },
      fileName: string,
      contentType: string
    }
  }
}

export type ContentfulItem<TItem = Record<string, any>> = {
  metadata: { tags: string[] }
  sys: {
    space: { sys: ContentfulSysBase }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: { sys: ContentfulSysBase }
    revision: number
    contentType: { sys: ContentfulSysBase }
    locale: string
  }
  fields: TItem
}

export type ContentfulResponse<TItem = ContentfulItem> = {
  sys: { type: string }
  total: number
  skip: number
  limit: number
  items: TItem[]
  includes: {
    Asset: ContentfulAsset[]
  }
}
