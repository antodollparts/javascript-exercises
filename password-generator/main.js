const UPPER   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER   = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const lenSlider   = document.getElementById('length');
    const lenVal      = document.getElementById('len-val');
    const pwdOutput   = document.getElementById('pwd-output');
    const copyBtn     = document.getElementById('copy-btn');
    const copyToast   = document.getElementById('copy-toast');
    const genBtn      = document.getElementById('gen-btn');
    const strengthRow = document.getElementById('strength-row');
    const strengthLbl = document.getElementById('strength-label');
    const ucChk       = document.getElementById('uc');
    const lcChk       = document.getElementById('lc');
    const numsChk     = document.getElementById('nums');
    const symsChk     = document.getElementById('syms');

    /* ── Slider gradient fill ── */
    function updateSliderFill() {
      const min = +lenSlider.min, max = +lenSlider.max, val = +lenSlider.value;
      const pct = ((val - min) / (max - min) * 100).toFixed(1) + '%';
      lenSlider.style.setProperty('--pct', pct);
      lenVal.textContent = val;
    }

    lenSlider.addEventListener('input', () => { updateSliderFill(); updateStrength(); });
    updateSliderFill();

    /* ── Password generation ── */
    function generatePassword() {
      let charset = '';
      const guaranteed = [];

      if (ucChk.checked)   { charset += UPPER;   guaranteed.push(randomChar(UPPER)); }
      if (lcChk.checked)   { charset += LOWER;   guaranteed.push(randomChar(LOWER)); }
      if (numsChk.checked) { charset += NUMBERS; guaranteed.push(randomChar(NUMBERS)); }
      if (symsChk.checked) { charset += SYMBOLS; guaranteed.push(randomChar(SYMBOLS)); }

      if (!charset) return ''; // nothing selected

      const length = +lenSlider.value;
      const arr = [...guaranteed];

      while (arr.length < length) arr.push(randomChar(charset));

      // shuffle via crypto
      for (let i = arr.length - 1; i > 0; i--) {
        const j = cryptoRand(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr.join('');
    }

    function randomChar(str) {
      return str[cryptoRand(str.length)];
    }

    function cryptoRand(max) {
      const arr = new Uint32Array(1);
      crypto.getRandomValues(arr);
      return arr[0] % max;
    }

    /* ── Strength evaluation ── */
    function calcStrength() {
      const len    = +lenSlider.value;
      const types  = [ucChk, lcChk, numsChk, symsChk].filter(c => c.checked).length;

      if (types === 0) return 0;
      if (len < 10 || types === 1) return 1;           // too-weak
      if (len < 14 && types === 2) return 2;           // weak
      if (len >= 14 && types >= 3) return 4;           // strong
      if (types >= 3 || len >= 14) return 3;           // medium
      return 2;
    }

    const STRENGTH_MAP = [
      null,
      { cls: 'strength-too-weak', lbl: 'TOO WEAK!' },
      { cls: 'strength-weak',     lbl: 'WEAK' },
      { cls: 'strength-medium',   lbl: 'MEDIUM' },
      { cls: 'strength-strong',   lbl: 'STRONG' },
    ];

    function updateStrength() {
      const level = calcStrength();
      strengthRow.className = 'strength-row';
      if (level > 0) {
        strengthRow.classList.add(STRENGTH_MAP[level].cls);
        strengthLbl.textContent = STRENGTH_MAP[level].lbl;
      } else {
        strengthLbl.textContent = '—';
      }
    }

    [ucChk, lcChk, numsChk, symsChk].forEach(c => c.addEventListener('change', updateStrength));
    updateStrength();

    /* ── Generate ── */
    function doGenerate() {
      const pwd = generatePassword();
      if (!pwd) return;

      pwdOutput.classList.add('flash');
      setTimeout(() => {
        pwdOutput.textContent = pwd;
        pwdOutput.classList.remove('flash');
      }, 120);

      updateStrength();
    }

    genBtn.addEventListener('click', doGenerate);

    /* ── Copy ── */
    copyBtn.addEventListener('click', async () => {
      const txt = pwdOutput.textContent;
      if (!txt || txt === '—') return;
      try {
        await navigator.clipboard.writeText(txt);
        copyToast.classList.add('show');
        setTimeout(() => copyToast.classList.remove('show'), 1800);
      } catch {
        /* fallback */
        const el = document.createElement('textarea');
        el.value = txt;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copyToast.classList.add('show');
        setTimeout(() => copyToast.classList.remove('show'), 1800);
      }
    });