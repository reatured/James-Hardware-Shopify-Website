(function () {
  function init() {
    var sections = document.querySelectorAll('[id*="image_with_text"]');
    if (!sections.length) return;
    sections.forEach(function (sec) {
      var rows = sec.querySelectorAll('.image-with-text__text p');
      rows.forEach(function (p) {
        if (p.dataset.jhSpec === '1') return;
        var raw = p.textContent.trim();
        if (!raw) {
          p.classList.add('jh-spec-empty');
          return;
        }
        var idx = raw.indexOf(':');
        if (idx === -1) return;
        var key = raw.slice(0, idx).trim();
        var dim = p.querySelector('.metafield-dimension');
        var keySpan = document.createElement('span');
        keySpan.className = 'jh-spec-key';
        keySpan.textContent = key;
        var valSpan = document.createElement('span');
        valSpan.className = 'jh-spec-val';
        if (dim) {
          var num = (dim.querySelector('.metafield-dimension_value') || {}).textContent || '';
          var unit = (dim.querySelector('.metafield-dimension_unit') || {}).textContent || '';
          valSpan.innerHTML = '<span class="jh-spec-num">' + num.trim() + '</span><span class="jh-spec-unit"> ' + unit.trim() + '</span>';
        } else {
          valSpan.textContent = raw.slice(idx + 1).trim();
        }
        p.innerHTML = '';
        p.appendChild(keySpan);
        p.appendChild(valSpan);
        p.classList.add('jh-spec-row');
        p.dataset.jhSpec = '1';
      });
      sec.classList.add('jh-spec-section');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
