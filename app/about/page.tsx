
const About = () => {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg mb-10 text-gray-300 text-center">
        WallpaperHub is your destination for high-quality, curated wallpapers
        designed to breathe life into your digital spaces.
      </p>

      <h2 className="text-3xl font-semibold mb-3 text-center">Our Mission</h2>
      <p className="text-md mb-6 text-gray-300 text-center">
        We believe that the screen you look at every day should inspire you. Our
        mission is to provide an accessible, beautifully designed platform where
        users can discover and download the most stunning visual art, absolutely
        free.
      </p>

      <h2 className="text-3xl font-semibold mb-3 text-center">
        Quality Over Quantity
      </h2>
      <p className="text-md mb-6 text-gray-300 text-center">
        Unlike mass aggregators, every wallpaper on WallpaperHub is carefully
        selected. We prioritize high-resolution images with excellent
        composition, perfect for modern high-DPI displays and AMOLED screens.
      </p>

      <div className="bg-card mt-10 rounded-lg outline py-6 px-6">
        <h2 className="text-3xl font-semibold mb-3">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-300">
          Follow us on social media to get daily updates and featured artist
          spotlights.
        </p>
      </div>
    </div>
  );
};

export default About;
