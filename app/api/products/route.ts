import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Standard Home Tank",
      price: 40.00,
      description: "20kg • Home Safety Valve",
      image: "/images/gas_tank.png",
      category: "Gas"
    },
    {
      id: 2,
      name: "Commercial Cylinder",
      price: 85.00,
      description: "50kg • High Capacity Valve",
      image: "/images/gas_tank.png",
      category: "Gas"
    },
    {
      id: 3,
      name: "Makala Vert Charcoal",
      price: 15.00,
      description: "10kg • Regenerative Agri-charcoal",
      image: "/images/charcoal.png",
      category: "Charcoal"
    }
  ];

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Simulate order processing
  console.log('Order received:', body);
  return NextResponse.json({ success: true, orderId: 'MV-' + Math.random().toString(36).substr(2, 9).toUpperCase() });
}
