export type ProductCategory = 'all' | 'fabrics' | 'sarees' | 'lehengas' | 'suits' | 'brocades';

export type PageView = 'home' | 'fabrics' | 'brocades' | 'sarees' | 'lehengas' | 'suits' | 'about' | 'wholesale' | 'stores';

export type TexturePatternType = 
  | 'zari-brocade' 
  | 'raw-silk-slub' 
  | 'chanderi-gold' 
  | 'velvet-rich' 
  | 'chikankari-georgette' 
  | 'dola-silk' 
  | 'pure-mulberry' 
  | 'linen-weave';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  priceUnit: 'per meter' | 'per piece';
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  isMasterWeave?: boolean;
  composition: string;
  width: string;
  gsm: number;
  weaveType: string;
  transparency: 'Opaque' | 'Semi-Sheer' | 'Sheer';
  suitableFor: string[];
  care: string;
  description: string;
  colorName: string;
  colorHex: string;
  availableColors: ProductColor[];
  swatchAvailable: boolean;
  swatchPrice: number;
  texturePattern: TexturePatternType;
  accentGradient: string;
  moqMeters?: number;
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  product: Product;
  purchaseType: 'fabric_meters' | 'swatch_sample' | 'ready_garment';
  quantity: number; // meters or pieces
  selectedColor: string;
  unitPrice: number;
}

export interface GarmentRequirement {
  id: string;
  name: string;
  description: string;
  baseMeters: number;
  liningMeters: number;
  borderMeters: number;
  recommendedFabricTypes: string[];
  iconName: string;
}

export interface ConsultationBooking {
  name: string;
  phone: string;
  email: string;
  type: 'video_call' | 'chandni_chowk' | 'faridabad_plant';
  date: string;
  timeSlot: string;
  interestedCategory: string;
  notes: string;
}

export interface WholesaleQuoteRequest {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  gstNumber?: string;
  monthlyMeters: string;
  interestedFabrics: string[];
  requireCustomDyeingOrPrinting: boolean;
  notes: string;
}
