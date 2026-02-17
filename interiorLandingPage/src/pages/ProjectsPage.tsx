import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Apartment', 'Villa', 'Kitchen', 'Bedroom', 'Living', 'Dining', 'Office', 'Bathroom', 'Commercial', 'Restaurant', 'Hotel']

const projects = [
  // Apartments (15 projects)
  { id: 1, title: 'Modern 3BHK Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Mumbai', size: '1650 sq.ft', year: '2024' },
  { id: 2, title: 'Luxury High-Rise Residence', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600', location: 'Bangalore', size: '2100 sq.ft', year: '2023' },
  { id: 3, title: 'Compact 2BHK Design', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600', location: 'Pune', size: '950 sq.ft', year: '2024' },
  { id: 4, title: 'Industrial Loft Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600607687644-c7e34c6a9a5c?w=600', location: 'Mumbai', size: '1850 sq.ft', year: '2024' },
  { id: 5, title: 'Penthouse Suite', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600607688962-79b1c1a1d3b3?w=600', location: 'Delhi', size: '3200 sq.ft', year: '2023' },
  { id: 6, title: 'Minimalist 1BHK', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600', location: 'Chennai', size: '650 sq.ft', year: '2024' },
  { id: 7, title: 'Art Deco Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210491369-d753d80a41f3?w=600', location: 'Kolkata', size: '1450 sq.ft', year: '2023' },
  { id: 8, title: 'Smart Home Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600', location: 'Hyderabad', size: '1750 sq.ft', year: '2024' },
  { id: 9, title: 'Scandinavian Style Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600', location: 'Bangalore', size: '1250 sq.ft', year: '2023' },
  { id: 10, title: 'Luxury 4BHK Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Mumbai', size: '2800 sq.ft', year: '2024' },
  { id: 11, title: 'Duplex Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600', location: 'Pune', size: '2400 sq.ft', year: '2023' },
  { id: 12, title: 'Studio Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600566753080-4f4b5a4a5a5a?w=600', location: 'Delhi', size: '450 sq.ft', year: '2024' },
  { id: 13, title: 'Eclectic 3BHK', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600', location: 'Chennai', size: '1550 sq.ft', year: '2023' },
  { id: 14, title: 'Modern Luxury Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Hyderabad', size: '1950 sq.ft', year: '2024' },
  { id: 15, title: 'Coastal Themed Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600', location: 'Goa', size: '1350 sq.ft', year: '2023' },

  // Villas (12 projects)
  { id: 16, title: 'Luxury Villa Interior', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', location: 'Pune', size: '4500 sq.ft', year: '2023' },
  { id: 17, title: 'Beachfront Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', location: 'Goa', size: '5200 sq.ft', year: '2023' },
  { id: 18, title: 'Mediterranean Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600', location: 'Alibaug', size: '6800 sq.ft', year: '2024' },
  { id: 19, title: 'Hilltop Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', location: 'Lonavala', size: '5500 sq.ft', year: '2023' },
  { id: 20, title: 'Modern Farmhouse Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', location: 'Nasik', size: '4200 sq.ft', year: '2024' },
  { id: 21, title: 'Spanish Style Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600', location: 'Goa', size: '5900 sq.ft', year: '2023' },
  { id: 22, title: 'Contemporary Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', location: 'Bangalore', size: '4800 sq.ft', year: '2024' },
  { id: 23, title: 'Tropical Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', location: 'Kerala', size: '6200 sq.ft', year: '2023' },
  { id: 24, title: 'Minimalist Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', location: 'Pune', size: '3900 sq.ft', year: '2024' },
  { id: 25, title: 'Colonial Style Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600', location: 'Coorg', size: '5300 sq.ft', year: '2023' },
  { id: 26, title: 'Eco-Friendly Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', location: 'Ooty', size: '3600 sq.ft', year: '2024' },
  { id: 27, title: 'Luxury Resort Villa', category: 'Villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', location: 'Jaipur', size: '7500 sq.ft', year: '2023' },

  // Kitchens (12 projects)
  { id: 28, title: 'Minimalist Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', location: 'Hyderabad', size: '220 sq.ft', year: '2023' },
  { id: 29, title: 'Scandinavian Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600', location: 'Pune', size: '240 sq.ft', year: '2024' },
  { id: 30, title: 'Modern Kitchen Design', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', location: 'Mumbai', size: '280 sq.ft', year: '2023' },
  { id: 31, title: 'Industrial Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600', location: 'Bangalore', size: '320 sq.ft', year: '2024' },
  { id: 32, title: 'Farmhouse Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', location: 'Pune', size: '350 sq.ft', year: '2023' },
  { id: 33, title: 'Contemporary Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600', location: 'Delhi', size: '260 sq.ft', year: '2024' },
  { id: 34, title: 'Traditional Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', location: 'Chennai', size: '200 sq.ft', year: '2023' },
  { id: 35, title: 'Open Plan Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600', location: 'Hyderabad', size: '400 sq.ft', year: '2024' },
  { id: 36, title: 'Luxury Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', location: 'Mumbai', size: '450 sq.ft', year: '2023' },
  { id: 37, title: 'Compact Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600', location: 'Bangalore', size: '120 sq.ft', year: '2024' },
  { id: 38, title: 'Island Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', location: 'Pune', size: '380 sq.ft', year: '2023' },
  { id: 39, title: 'Modern Farmhouse Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600', location: 'Nasik', size: '300 sq.ft', year: '2024' },

  // Bedrooms (12 projects)
  { id: 40, title: 'Cozy Bedroom Design', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600', location: 'Chennai', size: '320 sq.ft', year: '2024' },
  { id: 41, title: 'Master Bedroom Suite', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?w=600', location: 'Bangalore', size: '450 sq.ft', year: '2023' },
  { id: 42, title: 'Luxury Master Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600', location: 'Mumbai', size: '550 sq.ft', year: '2024' },
  { id: 43, title: 'Minimalist Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?w=600', location: 'Pune', size: '280 sq.ft', year: '2023' },
  { id: 44, title: 'Guest Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600', location: 'Delhi', size: '240 sq.ft', year: '2024' },
  { id: 45, title: 'Kids Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?w=600', location: 'Hyderabad', size: '260 sq.ft', year: '2023' },
  { id: 46, title: 'Contemporary Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600', location: 'Bangalore', size: '340 sq.ft', year: '2024' },
  { id: 47, title: 'Bohemian Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?w=600', location: 'Goa', size: '380 sq.ft', year: '2023' },
  { id: 48, title: 'Scandinavian Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600', location: 'Pune', size: '300 sq.ft', year: '2024' },
  { id: 49, title: 'Modern Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?w=600', location: 'Mumbai', size: '400 sq.ft', year: '2023' },
  { id: 50, title: 'Custom Wardrobe Room', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600', location: 'Chennai', size: '120 sq.ft', year: '2024' },
  { id: 51, title: 'Master Suite with Walk-in', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?w=600', location: 'Bangalore', size: '650 sq.ft', year: '2023' },

  // Living Rooms (10 projects)
  { id: 52, title: 'Contemporary Living Room', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Bangalore', size: '550 sq.ft', year: '2024' },
  { id: 53, title: 'Open Plan Living', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Pune', size: '680 sq.ft', year: '2023' },
  { id: 54, title: 'Luxury Living Room', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Mumbai', size: '750 sq.ft', year: '2024' },
  { id: 55, title: 'Minimalist Living', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Delhi', size: '420 sq.ft', year: '2023' },
  { id: 56, title: 'Family Living Room', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Chennai', size: '480 sq.ft', year: '2024' },
  { id: 57, title: 'Formal Living Room', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Hyderabad', size: '520 sq.ft', year: '2023' },
  { id: 58, title: 'Entertainment Living', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Bangalore', size: '620 sq.ft', year: '2024' },
  { id: 59, title: 'Scandinavian Living', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Pune', size: '380 sq.ft', year: '2023' },
  { id: 60, title: 'Modern Living Design', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Mumbai', size: '590 sq.ft', year: '2024' },
  { id: 61, title: 'Cozy Living Space', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Goa', size: '350 sq.ft', year: '2023' },

  // Dining Rooms (8 projects)
  { id: 62, title: 'Elegant Dining Space', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Delhi', size: '280 sq.ft', year: '2023' },
  { id: 63, title: 'Formal Dining Room', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Mumbai', size: '320 sq.ft', year: '2024' },
  { id: 64, title: 'Modern Dining', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Bangalore', size: '240 sq.ft', year: '2023' },
  { id: 65, title: 'Open Dining', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Pune', size: '260 sq.ft', year: '2024' },
  { id: 66, title: 'Family Dining', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Chennai', size: '300 sq.ft', year: '2023' },
  { id: 67, title: 'Luxury Dining', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Hyderabad', size: '380 sq.ft', year: '2024' },
  { id: 68, title: 'Minimalist Dining', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Delhi', size: '200 sq.ft', year: '2023' },
  { id: 69, title: 'Contemporary Dining', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Mumbai', size: '340 sq.ft', year: '2024' },

  // Offices (8 projects)
  { id: 70, title: 'Modern Home Office', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Hyderabad', size: '180 sq.ft', year: '2024' },
  { id: 71, title: 'Corporate Office', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Bangalore', size: '2500 sq.ft', year: '2023' },
  { id: 72, title: 'Creative Studio', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Mumbai', size: '1200 sq.ft', year: '2024' },
  { id: 73, title: 'Executive Office', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Delhi', size: '400 sq.ft', year: '2023' },
  { id: 74, title: 'Co-working Space', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Pune', size: '3500 sq.ft', year: '2024' },
  { id: 75, title: 'Startup Office', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Bangalore', size: '1800 sq.ft', year: '2023' },
  { id: 76, title: 'Design Studio', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Mumbai', size: '900 sq.ft', year: '2024' },
  { id: 77, title: 'Home Office', category: 'Office', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600', location: 'Chennai', size: '150 sq.ft', year: '2023' },

  // Bathrooms (8 projects)
  { id: 78, title: 'Luxury Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Chennai', size: '95 sq.ft', year: '2023' },
  { id: 79, title: 'Modern Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Mumbai', size: '120 sq.ft', year: '2024' },
  { id: 80, title: 'Master Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Pune', size: '140 sq.ft', year: '2023' },
  { id: 81, title: 'Guest Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Bangalore', size: '65 sq.ft', year: '2024' },
  { id: 82, title: 'Spa Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Goa', size: '180 sq.ft', year: '2023' },
  { id: 83, title: 'Minimalist Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Hyderabad', size: '80 sq.ft', year: '2024' },
  { id: 84, title: 'Contemporary Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Delhi', size: '110 sq.ft', year: '2023' },
  { id: 85, title: 'Family Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', location: 'Chennai', size: '130 sq.ft', year: '2024' },

  // Commercial (7 projects)
  { id: 86, title: 'Retail Store Design', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600', location: 'Mumbai', size: '1200 sq.ft', year: '2024' },
  { id: 87, title: 'Corporate Lobby', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Bangalore', size: '3500 sq.ft', year: '2023' },
  { id: 88, title: 'Showroom Design', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Delhi', size: '2800 sq.ft', year: '2024' },
  { id: 89, title: 'Bank Interior', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600', location: 'Pune', size: '4200 sq.ft', year: '2023' },
  { id: 90, title: 'Clinic Design', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Chennai', size: '1800 sq.ft', year: '2024' },
  { id: 91, title: 'Gym Interior', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Hyderabad', size: '3200 sq.ft', year: '2023' },
  { id: 92, title: 'Spa & Wellness Center', category: 'Commercial', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600', location: 'Goa', size: '2500 sq.ft', year: '2024' },

  // Restaurants (5 projects)
  { id: 93, title: 'Fine Dining Restaurant', category: 'Restaurant', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Mumbai', size: '2200 sq.ft', year: '2024' },
  { id: 94, title: 'Cafe Interior', category: 'Restaurant', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Bangalore', size: '950 sq.ft', year: '2023' },
  { id: 95, title: 'Rooftop Restaurant', category: 'Restaurant', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600', location: 'Pune', size: '1800 sq.ft', year: '2024' },
  { id: 96, title: 'Fast Food Outlet', category: 'Restaurant', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600', location: 'Delhi', size: '600 sq.ft', year: '2023' },
  { id: 97, title: 'Bar & Lounge', category: 'Restaurant', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Mumbai', size: '1500 sq.ft', year: '2024' },

  // Hotels (3 projects)
  { id: 98, title: 'Boutique Hotel', category: 'Hotel', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', location: 'Goa', size: '8500 sq.ft', year: '2024' },
  { id: 99, title: 'Hotel Lobby Design', category: 'Hotel', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', location: 'Jaipur', size: '4200 sq.ft', year: '2023' },
  { id: 100, title: 'Resort Interior', category: 'Hotel', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', location: 'Kerala', size: '12000 sq.ft', year: '2024' },
]

const stats = [
  { label: 'Projects Completed', value: '100+' },
  { label: 'Happy Clients', value: '85+' },
  { label: 'Cities', value: '20+' },
  { label: 'Years Experience', value: '8+' },
]

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    project: '3BHK Apartment, Mumbai',
    quote: 'The team transformed our dream home into reality. Attention to detail and professionalism was outstanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    project: 'Villa Interior, Pune',
    quote: 'Absolutely love our new home! The design perfectly balances aesthetics with functionality.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Kumar',
    project: 'Kitchen Renovation, Bangalore',
    quote: 'Professional, creative, and delivered on time. Highly recommended for interior design needs.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Gupta',
    project: 'Corporate Office, Delhi',
    quote: 'They designed our office space beautifully. Our employees love the new environment!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Mehta',
    project: 'Restaurant, Mumbai',
    quote: 'The restaurant interior they designed has become a huge hit with our customers. Exceptional work!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Anjali Desai',
    project: 'Boutique Hotel, Goa',
    quote: 'Their design sensibilities are unmatched. They perfectly captured the essence of our brand.',
    rating: 5,
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [visibleCount, setVisibleCount] = useState(12)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const visibleProjects = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filtered.length))
  }

  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            OUR <span className="text-amber-400">PROJECTS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg mb-8"
          >
            Explore our portfolio of 100+ completed interior design projects. From cozy apartments to luxury villas, 
            each space tells a unique story of creativity and craftsmanship.
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FEATURED PROJECT</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into one of our most remarkable transformations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
              alt="Featured Project"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white">
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Luxury Villa</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">The Ocean Breeze Villa</h3>
                <p className="text-gray-200 max-w-2xl mb-6">
                  A stunning 5200 sq.ft beachfront villa in Goa featuring contemporary design elements, 
                  custom furniture, and smart home integration. Winner of the 2024 Interior Design Excellence Award.
                </p>
                <button className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">PROJECT GALLERY</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse portfolio of 100+ residential and commercial projects
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setVisibleCount(12)
                }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {cat} {cat !== 'All' && `(${projects.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-amber-400 text-sm font-medium mb-2">
                        {project.category} • {project.location}
                      </span>
                      <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.size} • {project.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button
                onClick={loadMore}
                className="px-10 py-4 bg-transparent border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
              >
                Load More Projects ({visibleCount} of {filtered.length})
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CLIENT TESTIMONIALS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients say about their experience working with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR PROCESS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we bring your dream space to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your vision, requirements, and budget' },
              { step: '02', title: 'Design', desc: 'Our team creates detailed designs and 3D renderings' },
              { step: '03', title: 'Execution', desc: 'Skilled craftsmen bring the design to life' },
              { step: '04', title: 'Handover', desc: 'We deliver your dream space with quality assurance' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">READY TO START YOUR PROJECT?</h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our 100+ happy clients. Let's create something beautiful together.
            </p>
            <button className="px-10 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">{selectedProject.category}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{selectedProject.location}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{selectedProject.size}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{selectedProject.year}</span>
                </div>
                <p className="text-gray-600 mb-6">
                  This project showcases our expertise in {selectedProject.category.toLowerCase()} design. 
                  We worked closely with the client to create a space that perfectly matches their lifestyle 
                  and aesthetic preferences. The result is a harmonious blend of functionality and beauty.
                </p>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Request Similar Design
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}