import Image from "next/image";

export default function Home() {
  return (
  <div className="flex items-center justify-center px-auto mx-auto text-white">
    <div className="flex flex-col md:flex-row  p-6 gap-32 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
      <div className="flex flex-col bg-gray-600 leading-4 items-center h-[21em] w-72 border-2 overflow-hidden space-y-3 p-4 rounded-lg">
        <Image
          src="/lipstick.jpg"
          alt="Next.js Logo"
          width={250}
          height={128}
          className="" 
        />
        <h1 className="font-serif font-bold ">Lipstick</h1>
        <p className="font-serif text-center text-[10px] px-2">Looking for a striking red lipstick, more natural shade?, you&apos;ll find liquid, waterproof, creamy and transfer-free lipsticks.</p>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Buy Now</button>
      </div>
      <div className="flex flex-col bg-gray-600 leading-4 items-center h-[21em] w-72 border-2 overflow-hidden space-y-3 p-4 rounded-lg">
        <Image
          src="/skin-care-products.jpg"
          alt="Next.js Logo"
          width={250}
          height={128}
          className="p-1"
        />
        <h1 className="font-serif font-bold ">face-Cream</h1>
        <p className="font-serif text-center text-[10px] px-2">Get radiant skin with the best Face Whitening Cream in Pakistan. You will have a fresh, glowing complexion after using our face cream.</p>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Buy Now</button>
      </div>
      <div className="flex flex-col bg-gray-600 leading-4 items-center h-[21em] w-72 border-2 overflow-hidden space-y-3 p-4 rounded-lg">
        <Image
          src="/cream.jpg"
          alt="Next.js Logo"
          width={250}
          height={128}
          className="p-1"
        />
       <h1 className="font-serif font-bold ">Skin-Care</h1>
        <p className="font-serif text-center text-[10px] px-2">Acne Defence Face Wash. Best-Sunscreen-in-Pakistan Sunscreen SPF 60. Oil Control Face Wash. Hydra Power Face Wash. Triple Correction Eye Serum.</p>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Buy Now</button>
      </div>
      <div className="flex flex-col bg-gray-600 leading-4 items-center h-[21em] w-72 border-2 overflow-hidden space-y-3 p-4 rounded-lg">
        <Image
          src="/headphones.jpg"
          alt="Next.js Logo"
          width={250}
          height={128}
          className="p-1"
        />
        <h1 className="font-serif font-bold ">Headphone</h1>
        <p className="font-serif text-center text-[10px] px-2">True Stereo Headphones With Built in Mic 10m Transmission Bluetooth Wireless Earbuds,Headsets for all Bluetooth smart devices</p>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Buy Now</button>
      </div>
    </div>
  </div>
  );
}
