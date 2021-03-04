function detectiOS() {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function getMobileMapHref() {
  const androidHref =
    'https://www.google.com/maps/search/?api=1&query=2701%20Hawkins%20Point%20Rd%2C%20Curtis%20Bay%2C%20Maryland%2C%2021226';

  const iosHref =
    'http://maps.apple.com/?daddr=2701+Hawkins+Point+Rd,+Curtis+Bay,+MD,21226';

  if (detectiOS()) {
    return iosHref;
  } else {
    return androidHref;
  }
}

export function setResponsiveNavigationHref(setHref) {
  if (isMobile()) {
    setHref(getMobileMapHref());
  } else {
    setHref('/#contact');
  }
}
