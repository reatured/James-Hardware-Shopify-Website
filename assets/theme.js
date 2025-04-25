// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }

  // Cart drawer toggle
  const cartToggle = document.querySelector('.cart-toggle');
  const cartDrawer = document.querySelector('.cart-drawer');
  
  if (cartToggle && cartDrawer) {
    cartToggle.addEventListener('click', function() {
      cartDrawer.classList.toggle('active');
    });
  }

  // Product image gallery
  const productGallery = document.querySelector('.product-gallery');
  if (productGallery) {
    const thumbnails = productGallery.querySelectorAll('.thumbnail');
    const mainImage = productGallery.querySelector('.main-image');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const newSrc = this.dataset.fullSize;
        mainImage.src = newSrc;
        
        // Update active state
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Quantity selector
  const quantitySelectors = document.querySelectorAll('.quantity-selector');
  quantitySelectors.forEach(selector => {
    const input = selector.querySelector('input');
    const minus = selector.querySelector('.minus');
    const plus = selector.querySelector('.plus');
    
    minus.addEventListener('click', () => {
      const currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });
    
    plus.addEventListener('click', () => {
      const currentValue = parseInt(input.value);
      input.value = currentValue + 1;
    });
  });

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy loading images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  if (mobileMenuButton && sidebar) {
    mobileMenuButton.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });

    // Close sidebar when clicking outside on mobile
    mainContent.addEventListener('click', function() {
      if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Here you would typically make an AJAX call to your newsletter service
        console.log('Subscribing email:', email);
        emailInput.value = '';
        alert('Thank you for subscribing to our newsletter!');
      }
    });
  }
});

// Product Image Gallery
document.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.product-image');
  const mainProductImage = document.querySelector('.main-product-image');
  
  if (productImages.length && mainProductImage) {
    productImages.forEach(image => {
      image.addEventListener('click', function() {
        const newSrc = this.getAttribute('src');
        mainProductImage.setAttribute('src', newSrc);
      });
    });
  }
});

// Cart Quantity Adjustments
document.addEventListener('DOMContentLoaded', function() {
  const quantityButtons = document.querySelectorAll('.quantity-button');
  
  quantityButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.quantity-input');
      const currentValue = parseInt(input.value);
      
      if (this.classList.contains('quantity-up')) {
        input.value = currentValue + 1;
      } else if (this.classList.contains('quantity-down') && currentValue > 1) {
        input.value = currentValue - 1;
      }
      
      // Trigger change event to update cart
      input.dispatchEvent(new Event('change'));
    });
  });
}); 