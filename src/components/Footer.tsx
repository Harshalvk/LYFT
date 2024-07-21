const Footer = () => {
  return (
    <footer className="font-display text-center p-8 text-gray-600 text-lg border-t bg-white/30 backdrop-blur-xl mt-10">
      <p>&copy; {new Date().getFullYear()} LYFT. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
