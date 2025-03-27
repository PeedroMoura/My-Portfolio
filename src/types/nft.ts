export interface OpenSeaAttribute {
  trait_type: string;
  value: number | string;
  display_type?: "number" | "boost_number" | "boost_percentage" | "date";
  max_value?: number;
}

export interface OpenSeaMetadata {
  name: string;
  description: string;
  external_url: string;
  image: string;
  image_data?: string;
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
  attributes: Readonly<OpenSeaAttribute[]>;
}
