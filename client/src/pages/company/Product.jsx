

const Product = () => {
  const products = [
    {
      name: "AkastarNet",
      type: "Internet (Layer3)",
      downloadUpload: "Asymmetric (upload max. 15 Mbps)",
      bandwidth: "Dedicated 1:1 Unlimited and without FUP (without quota limits)",
      ipAddress: "Static Public IP Address (NAT 1-1)",
      vlan: "Untagged",
      derivative: "Bandwidth - Contract (1M, 3M, 6M, 1Y-5Y)",
      options: [
        "Installation remote, on-site",
        "Maintenance, MS, Ticket",
      ],
      addOns: [
        "Bandwidth on demand",
        "Security (DNS, Gateway, Tunnel)",
        "LAN, IT Solution, MSS & etc",
      ],
    },
    {
      name: "AkastarLink",
      type: "Without Internet (Layer2)",
      downloadUpload: "Asymmetric (upload max. 15 Mbps)",
      bandwidth: "Dedicated 1:1 Unlimited and without FUP (without quota limits)",
      ipAddress: "-",
      vlan: "Tagged",
      derivative: "Bandwidth - Single tagged, Multi-tagged - Contract (1M, 3M, 6M, 1Y-5Y)",
      options: [
        "Installation remote, on-site",
        "Maintenance, MS, Ticket",
      ],
      addOns: [
        "Bandwidth on demand",
        "Security (DNS, Gateway, Tunnel)",
        "LAN, IT Solution, MSS & etc",
      ],
    },
    {
      name: "AkastarLite",
      type: "Internet (Layer3)",
      downloadUpload: "Asymmetric (upload max. 15 Mbps)",
      bandwidth: "CIR 1:4 Unlimited and without FUP (without quota limits)",
      ipAddress: "Shared Public IP Address (SNAT / source NAT)",
      vlan: "Untagged",
      derivative: "Bandwidth - Contract (6M, 1Y-5Y)",
      options: [
        "Installation remote, on-site",
        "Maintenance, MS, Ticket",
      ],
      addOns: [
        "Bandwidth on demand",
        "Security (DNS, Gateway, Tunnel)",
        "LAN, IT Solution, MSS & etc",
      ],
    },
    // {
    //   name: "AkastarBroadband",
    //   type: "Internet (Layer3)",
    //   downloadUpload: "Asymmetric (upload max. 15 Mbps)",
    //   bandwidth: "Unlimited and without FUP (without quota limits)",
    //   ipAddress: "Static Public IP Address (SNAT / source NAT)",
    //   vlan: "Untagged",
    //   derivative: "Bandwidth - Contract (1Y-5Y)",
    //   options: [
    //     "Installation remote, on-site",
    //     "Maintenance, MS, Ticket",
    //   ],
    //   addOns: [
    //     "Bandwidth on demand, Volume",
    //     "Security (DNS, Gateway, Tunnel)",
    //     "LAN, IT Solution, MSS & etc",
    //   ],
    // },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 md:px-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
          >
            <h2 className="mb-4 text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-bold">Type: </span>
              {product.type}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-bold">Download vs Upload: </span>
              {product.downloadUpload}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-bold">Bandwidth: </span>
              {product.bandwidth}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-bold">IP Address & NAT: </span>
              {product.ipAddress}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-bold">VLAN: </span>
              {product.vlan}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-bold">Derivative: </span>
              {product.derivative}
            </p>
            <div className="mb-2 text-sm text-gray-600">
              <span className="font-bold">Options: </span>
              <ul className="ml-5 list-disc">
                {product.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold">Add-ons: </span>
              <ul className="ml-5 list-disc">
                {product.addOns.map((addOn, idx) => (
                  <li key={idx}>{addOn}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
