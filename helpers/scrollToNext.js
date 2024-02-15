document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('scrollToNextBtn');
  
    window.addEventListener('scroll', function() {
      // Get the current scroll position
      const scrollPosition = window.scrollY ;
      const viewportHeight = window.innerHeight;
      // Adjust button opacity based on scroll position
      button.style.opacity = scrollPosition > 60 ? 1 : 0;
  
      // Get specific anchor elements
      const anchors = document.querySelectorAll('#solutions, #projects, #about, #experience, #contact');
      const anchorArray = Array.from(anchors);
  
      // Find the next anchor based on current position
      const nextAnchor = anchorArray.find(anchor => {
        const anchorRect = anchor.getBoundingClientRect();
        const anchorTopPosition = anchorRect.top + scrollPosition;
        return anchorTopPosition > scrollPosition && anchorRect.top < viewportHeight;
      });
  
      // Hide button if at the last anchor or no next anchor is found
      if (!nextAnchor || anchorArray.indexOf(nextAnchor) === anchorArray.length - 1) {
        button.style.opacity = 0;
      }
    });
  
    button.addEventListener('click', function() {
      const anchors = document.querySelectorAll('#solutions, #projects, #about, #experience, #contact');
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const nextAnchor = Array.from(anchors).find(anchor => {
        const anchorRect = anchor.getBoundingClientRect();
        const anchorTopPosition = anchorRect.top + scrollPosition;
        return anchorTopPosition > scrollPosition && anchorRect.top < viewportHeight;
      });
  
      if (nextAnchor) {
        nextAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  