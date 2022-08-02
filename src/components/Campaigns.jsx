function Campaigns() {
  return (
    <div>
      <div className="container mx-auto w-9/12 mt-8">
        <h2 className="text-sm font-semibold mb-4">Kampanyalar</h2>

        <div className="container mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-4">
          <img
            className="rounded-lg"
            src="https://cdn.getir.com/misc/62e3a660bcdc0e7f05033059_banner_tr_1659086493117.jpeg"
            alt="getir"
          />
          <img
            className="rounded-lg"
            src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1655191370129.jpeg"
            alt="getir"
          />
          <img
            className="rounded-lg"
            src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
            alt="getir"
          />
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
