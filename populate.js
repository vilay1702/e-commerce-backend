const data = [
  {
    name: "accent chair",
    price: 25999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681749482/react-comfy-store-products/iuYyO9RP_o_upinxq.jpg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    name: "albany sectional",
    price: 109999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750782/react-comfy-store-products/product-2_lusrzx.jpg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    name: "albany table",
    price: 309999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750874/react-comfy-store-products/product-3_znpiqa.jpg",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
  },
  {
    name: "armchair",
    price: 12599,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750929/react-comfy-store-products/product-4_ebl6q1.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    name: "dining table",
    price: 42999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681751026/react-comfy-store-products/product-5_n184nu.jpg",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
  {
    name: "emperor bed",
    price: 23999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752461/react-comfy-store-products/product-6_rhaxfo.jpg",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    name: "entertainment center",
    price: 59999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753280/react-comfy-store-products/prod-7_ta21yy.jpg",
    featured: true,
    colors: ["#000", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    name: "high-back bench",
    price: 39999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753314/react-comfy-store-products/prod-8_qzulqi.jpg",
    featured: true,
    colors: ["#000", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    name: "leather chair",
    price: 20099,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753354/react-comfy-store-products/prod-9_j3dsja.jpg",
    colors: ["#ff0000", "#ffb900", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    name: "leather sofa",
    price: 99999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753394/react-comfy-store-products/prod-10_d0jqoh.jpg",
    colors: ["#00ff00", "#0000ff"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    name: "modern bookshelf",
    price: 31999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753441/react-comfy-store-products/prod-11_lff6yt.jpg",
    featured: true,
    colors: ["#ffb900", "#ff0000", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kids",
  },
  {
    name: "modern poster",
    price: 3099,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753501/react-comfy-store-products/prod-12_ga6sdq.jpg",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    name: "shelf",
    price: 30999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753552/react-comfy-store-products/prod-13_cv5csw.jpg",
    colors: ["#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    name: "simple chair",
    price: 109999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753587/react-comfy-store-products/prod-14_bx2qzb.jpg",
    colors: ["#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    name: "sofa set",
    price: 129999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753621/react-comfy-store-products/prod-15_jbnypy.jpg",
    colors: ["#00ff00", "#ffb900"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    name: "suede armchair",
    price: 15999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753657/react-comfy-store-products/prod-16_jfwx3m.jpg",
    colors: ["#ffb900"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    name: "utopia sofa",
    price: 79999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753719/react-comfy-store-products/prod-17_inmzle.jpg",
    featured: true,
    colors: ["#ff0000", "#00ff00"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    name: "vase table",
    price: 120999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753757/react-comfy-store-products/prod-18_qa04uo.jpg",
    featured: true,
    colors: ["#ff0000"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    name: "wooden bed",
    price: 250099,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753801/react-comfy-store-products/prod-19_foqbma.jpg",
    colors: ["#000", "#ffb900"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    name: "wooden desk",
    price: 150999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753836/react-comfy-store-products/prod-20_wvente.jpg",
    colors: ["#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    name: "wooden desk",
    price: 40099,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753872/react-comfy-store-products/prod-21_a5wgef.jpg",
    colors: ["#0000ff", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    name: "wooden table",
    price: 234999,
    image:
      "https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681753939/react-comfy-store-products/prod-22_fhljfo.jpg",
    featured: true,
    colors: ["#ffb900", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
    shipping: true,
  },
];

module.exports = { data };
