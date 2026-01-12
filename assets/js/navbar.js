// Navbar scroll effect and mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const logoContainer = navbar.querySelector(".p-2.rounded-xl");
  const brandName = navbar.querySelector("h1");
  const brandSubtitle = navbar.querySelector("h1 + p");
  const navLinksContainer = navbar.querySelector(".hidden.md\\:flex");
  const cleaningBtn = navbar.querySelector("a.flex.items-center.gap-1\\.5");
  const getStartedBtn = navbar.querySelector(".hidden.md\\:flex button");
  const mobileMenuBtn = navbar.querySelector("button.md\\:hidden");
  const mobileMenu = document.getElementById("mobile-menu");

  const navLinks = Array.from(navLinksContainer.querySelectorAll("a")).filter(
    (link) => {
      return !link.classList.contains("flex") && !link.querySelector("button");
    }
  );

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  let menuOpen = false;

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", function () {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.style.height = "auto";
      mobileMenu.style.opacity = "1";
      mobileMenuBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
    } else {
      mobileMenu.style.height = "0";
      mobileMenu.style.opacity = "0";
      mobileMenuBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
    }
  });

  function setActiveLink(scrolled) {
    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");
      const isActive =
        linkHref === currentPage ||
        (currentPage === "" && linkHref === "index.html");
      const existingUnderline = link.querySelector("div.absolute");
      if (existingUnderline) existingUnderline.remove();
      if (isActive) {
        link.classList.add("font-semibold");
        const underline = document.createElement("div");
        underline.className =
          "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full " +
          (scrolled ? "bg-amber-500" : "bg-white");
        link.appendChild(underline);
      }
    });
  }

  function handleScroll() {
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-lg",
        "shadow-black/5"
      );
      logoContainer.classList.remove(
        "bg-white/10",
        "backdrop-blur-sm",
        "border",
        "border-white/20"
      );
      logoContainer.classList.add(
        "bg-gradient-to-br",
        "from-amber-500",
        "to-amber-600"
      );
      brandName.classList.remove("text-white");
      brandName.classList.add("text-slate-900");
      brandSubtitle.classList.remove("text-white/70");
      brandSubtitle.classList.add("text-slate-500");
      navLinks.forEach((l) => {
        l.classList.remove("text-white/90", "hover:text-white");
        l.classList.add("text-slate-700", "hover:text-slate-900");
      });
      if (cleaningBtn) {
        cleaningBtn.classList.remove(
          "bg-white/10",
          "backdrop-blur-sm",
          "border",
          "border-white/20",
          "hover:bg-white/20"
        );
        cleaningBtn.classList.add(
          "bg-gradient-to-r",
          "from-cyan-500",
          "to-cyan-600",
          "hover:from-cyan-600",
          "hover:to-cyan-700",
          "shadow-md"
        );
      }
      if (getStartedBtn) {
        getStartedBtn.classList.remove(
          "bg-white",
          "text-slate-900",
          "hover:bg-white/90"
        );
        getStartedBtn.classList.add(
          "bg-slate-900",
          "text-white",
          "hover:bg-slate-800"
        );
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove("text-white");
        mobileMenuBtn.classList.add("text-slate-900");
      }
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-lg",
        "shadow-black/5"
      );
      logoContainer.classList.add(
        "bg-white/10",
        "backdrop-blur-sm",
        "border",
        "border-white/20"
      );
      logoContainer.classList.remove(
        "bg-gradient-to-br",
        "from-amber-500",
        "to-amber-600"
      );
      brandName.classList.add("text-white");
      brandName.classList.remove("text-slate-900");
      brandSubtitle.classList.add("text-white/70");
      brandSubtitle.classList.remove("text-slate-500");
      navLinks.forEach((l) => {
        l.classList.add("text-white/90", "hover:text-white");
        l.classList.remove("text-slate-700", "hover:text-slate-900");
      });
      if (cleaningBtn) {
        cleaningBtn.classList.add(
          "bg-white/10",
          "backdrop-blur-sm",
          "border",
          "border-white/20",
          "hover:bg-white/20"
        );
        cleaningBtn.classList.remove(
          "bg-gradient-to-r",
          "from-cyan-500",
          "to-cyan-600",
          "hover:from-cyan-600",
          "hover:to-cyan-700",
          "shadow-md"
        );
      }
      if (getStartedBtn) {
        getStartedBtn.classList.add(
          "bg-white",
          "text-slate-900",
          "hover:bg-white/90"
        );
        getStartedBtn.classList.remove(
          "bg-slate-900",
          "text-white",
          "hover:bg-slate-800"
        );
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.add("text-white");
        mobileMenuBtn.classList.remove("text-slate-900");
      }
    }
    setActiveLink(scrolled);
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
