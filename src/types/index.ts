export type PageData = {
  header: {
    cta1: string
    cta2: string
    navigation: string[]
  }
  hero: {
    headline1: string
    headline2: string
    headline3: string
    subheadline: string
  }
  primaryfeatures: {
    headline: string
    subheadline: string
    features: Array<{
      title: string
      description: string
    }>
  }
  footer: {
    copyright1: string
    copyright2: string
    navigation: Array<string>
  }
}
