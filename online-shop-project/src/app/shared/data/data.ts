import { Item } from '../models/item.interface';

const generateUniqueId = (): string => {
  return Math.random().toString(16);
};

export const items: Item[] = [
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey1.jpg',
    name: 'Golden Meadow Honey',
    description:
      'A rich and golden honey, sourced from the wild meadows of Whispering Pines, with a mild floral taste.',
    seller: {
      name: 'Whispering Pines Apiaries',
      phone: '+1 555 222 3333',
      email: 'contact@whisperingpinesapiaries.com',
    },
    price: 14.9459,
    isPublic: false,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey350x220.jpg',
    name: 'Amber Essence Honey',
    description:
      'Smooth and luxurious, this honey has hints of caramel and is harvested from the golden fields of Evergreen Valley.',
    seller: {
      name: 'Evergreen Valley Bees',
      phone: '+1 555 234 5678',
      email: 'info@evergreenvalleybees.com',
    },
    price: 16.4932,
    isPublic: true,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey3.jpg',
    name: 'Spring Blossom Honey',
    description:
      'Light and aromatic, crafted from the nectar of early spring blooms in the fields of Willowbrook.',
    seller: {
      name: 'Willowbrook Bee Farms',
      phone: '+1 555 345 6789',
      email: 'sales@willowbrookbeefarms.com',
    },
    price: 12.9559,
    isPublic: false,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey4.jpg',
    name: 'Midnight Forest Honey',
    description:
      'A deep, dark honey with a strong flavor profile, harvested from the midnight blooms of the ancient Wraithwood Forest.',
    seller: {
      name: 'Wraithwood Apiary',
      phone: '+1 555 456 7890',
      email: 'support@wraithwoodapiary.com',
    },
    price: 18.9659,
    isPublic: false,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey5.jpg',
    name: 'Sundew Meadow Honey',
    description:
      'Fresh and light honey, collected from the rare Sundew wildflowers in the meadows near Windmill Ridge.',
    seller: {
      name: 'Windmill Ridge Beekeepers',
      phone: '+1 555 567 8901',
      email: 'contact@windmillridgebeekeepers.com',
    },
    price: 13.4789,
    isPublic: true,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey6.jpg',
    name: 'Crimson Blossom Honey',
    description:
      'Bright red honey with a tangy taste, produced from the unique crimson flowers of the Bloodmoon Orchard.',
    seller: {
      name: 'Bloodmoon Orchard Honey',
      phone: '+1 555 678 9012',
      email: 'info@bloodmoonorchardhoney.com',
    },
    price: 20.4944,
    isPublic: false,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey7.jpg',
    name: 'Golden Horizon Honey',
    description:
      'Golden, thick honey with a buttery smooth taste, harvested from the expansive fields of Sunlit Hills.',
    seller: {
      name: 'Sunlit Hills Apiary',
      phone: '+1 555 789 0123',
      email: 'sales@sunlithillsapiary.com',
    },
    price: 17.3254,
    isPublic: true,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey8.jpg',
    name: 'Mystic Grove Honey',
    description:
      'A mysterious, deep-flavored honey from the enchanted forests of the Mystic Grove, known for its herbal undertones.',
    seller: {
      name: 'Mystic Grove Beekeepers',
      phone: '+1 555 890 1234',
      email: 'contact@mysticgrovebeekeepers.com',
    },
    price: 22.4535,
    isPublic: false,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honey9.jpg',
    name: 'Silver Dew Honey',
    description:
      'Fresh and clean-tasting honey with a subtle floral fragrance, collected from the pristine Silver Dew Meadows.',
    seller: {
      name: 'Silver Dew Apiaries',
      phone: '+1 555 901 2345',
      email: 'info@silverdewaparies.com',
    },
    price: 15.5436,
    isPublic: true,
    isAddedToCart: false,
  },
  {
    id: generateUniqueId(),
    imageUrl: '/images/honeyHD.jpg',
    name: 'Sunset Ridge Honeycomb',
    description:
      'Raw honeycomb straight from the hive, offering a pure, natural taste with the texture of fresh beeswax.',
    seller: {
      name: 'Sunset Ridge Bee Farm',
      phone: '+1 555 012 3456',
      email: 'support@sunsetridgebeefarm.com',
    },
    price: 25.3464,
    isPublic: true,
    isAddedToCart: false,
  },
];
