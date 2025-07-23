function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4 text-center shadow-inner">
      <div className="max-w-4xl mx-auto space-y-1">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Pizza Shop. Designed by{" "}
          <span className="font-semibold text-red-400">Tharindu Dasun Denawaka</span>
        </p>

        <p className="text-sm sm:text-base">
          Contact:{" "}
          <a
            href="mailto:tharindudasun1997@gmail.com"
            className="underline text-blue-300 hover:text-blue-400 transition-colors"
          >
            tharindudasun1997@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;